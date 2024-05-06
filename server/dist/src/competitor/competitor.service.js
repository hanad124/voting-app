"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompetitorService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const helpers_1 = require("../utils/helpers");
let CompetitorService = class CompetitorService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async createCompetitor(competitorDto) {
        try {
            const user = await this.prismaService.user.findUnique({
                where: {
                    id: competitorDto.userId,
                },
            });
            if (!user) {
                throw new common_1.ForbiddenException("User not found!");
            }
            const competitor = await this.prismaService.competitor.create({
                data: competitorDto,
                include: { Votes: true },
            });
            await this.prismaService.user.update({
                where: {
                    id: user.id,
                },
                data: {
                    role: "COMPETITOR",
                },
            });
            return competitor;
        }
        catch (error) {
            const err = error;
            const message = (0, helpers_1.formatPrismaError)(err.message);
            throw new common_1.InternalServerErrorException(message);
        }
    }
    findAll() {
        return this.prismaService.competitor.findMany({
            include: { Votes: true, user: true },
        });
    }
    findOne(id) {
        return this.prismaService.competitor.findUnique({
            where: {
                id: id,
            },
        });
    }
    update(id, updateCompetitorDto) {
        try {
            return this.prismaService.competitor.update({
                where: {
                    id,
                },
                data: updateCompetitorDto,
                include: { Votes: true, user: true },
            });
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error);
        }
    }
    deleteCompetitor(id) {
        try {
            return this.prismaService.competitor.delete({
                where: {
                    id,
                },
            });
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error);
        }
    }
    async getWinner() {
        try {
            const competitors = await this.prismaService.competitor.findMany({
                include: { Votes: true, user: true },
            });
            const competitorsWithVotes = competitors.map((competitor) => {
                const votes = competitor.Votes;
                const voteCount = votes.length;
                return {
                    ...competitor,
                    voteCount,
                };
            });
            const sortedCompetitors = competitorsWithVotes.sort((a, b) => b.voteCount - a.voteCount);
            const winner = sortedCompetitors[0];
            const competitionWinner = await this.prismaService.competitor.update({
                where: {
                    id: winner.id,
                },
                data: {
                    isWinner: true,
                },
            });
            return competitionWinner;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error);
        }
    }
};
exports.CompetitorService = CompetitorService;
exports.CompetitorService = CompetitorService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CompetitorService);
//# sourceMappingURL=competitor.service.js.map