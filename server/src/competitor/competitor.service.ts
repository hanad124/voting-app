import {
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
} from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import {
  CreateCompetitorDto,
  UpdateCompetitorDto,
} from "./dto/create-competitorDto";
import { formatPrismaError } from "src/utils/helpers";

@Injectable()
export class CompetitorService {
  constructor(private readonly prismaService: PrismaService) {}

  async createCompetitor(competitorDto: CreateCompetitorDto) {
    try {
      const user = await this.prismaService.user.findUnique({
        where: {
          email: competitorDto.email,
        },
      });

      if (!user) {
        throw new ForbiddenException("User not found!");
      }

      const competitor = await this.prismaService.competitor.create({
        data: competitorDto,
        include: { Vote: true },
      });

      // Update user role to competitor
      await this.prismaService.user.update({
        where: {
          email: user.email,
        },
        data: {
          role: "COMPETITOR",
        },
      });

      return competitor;
    } catch (error) {
      const err = error as Error;
      const message = formatPrismaError(err.message);
      throw new InternalServerErrorException(message);
    }
  }

  findAll() {
    return this.prismaService.competitor.findMany({
      include: { Vote: true, user: true },
    });
  }

  findOne(id: string) {
    return this.prismaService.competitor.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: string, updateCompetitorDto: UpdateCompetitorDto) {
    try {
      return this.prismaService.competitor.update({
        where: {
          id,
        },
        data: updateCompetitorDto,
        include: { Vote: true, user: true },
      });
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  deleteCompetitor(id: string) {
    try {
      return this.prismaService.competitor.delete({
        where: {
          id,
        },
      });
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async getWinner() {
    try {
      const competitors = await this.prismaService.competitor.findMany({
        include: { Vote: true, user: true },
      });

      const competitorsWithVotes = competitors.map((competitor) => {
        const votes = competitor.Vote;
        const voteCount = votes.length;

        return {
          ...competitor,
          voteCount,
        };
      });

      const sortedCompetitors = competitorsWithVotes.sort(
        (a, b) => b.voteCount - a.voteCount
      );

      const winner = sortedCompetitors[0];

      // other competitors will be set to false as they are not winners
      const otherCompetitors = sortedCompetitors.slice[1];

      for (const competitor of otherCompetitors) {
        await this.prismaService.competitor.update({
          where: {
            id: competitor.id,
          },
          data: {
            isWinner: false,
          },
        });
      }

      const competitionWinner = await this.prismaService.competitor.update({
        where: {
          id: winner.id,
        },
        data: {
          isWinner: true,
        },
      });

      return competitionWinner;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
