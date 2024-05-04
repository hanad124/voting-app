import {
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
} from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateCompetitorDto } from "./dto/create-competitorDto";
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
}
