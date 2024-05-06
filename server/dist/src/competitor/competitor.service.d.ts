import { PrismaService } from "src/prisma/prisma.service";
import { CreateCompetitorDto, UpdateCompetitorDto } from "./dto/create-competitorDto";
export declare class CompetitorService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    createCompetitor(competitorDto: CreateCompetitorDto): Promise<{
        Votes: {
            id: string;
            userId: string;
            competitorId: string;
            createdAt: Date;
            updatedAt: Date;
        }[];
    } & {
        id: string;
        userId: string;
        name: string;
        email: string;
        phone: string;
        photoUrl: string;
        semister: string;
        description: string;
        isWinner: boolean;
        voteCount: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        user: {
            id: string;
            name: string;
            role: import(".prisma/client").$Enums.Role;
            password: string;
        };
        Votes: {
            id: string;
            userId: string;
            competitorId: string;
            createdAt: Date;
            updatedAt: Date;
        }[];
    } & {
        id: string;
        userId: string;
        name: string;
        email: string;
        phone: string;
        photoUrl: string;
        semister: string;
        description: string;
        isWinner: boolean;
        voteCount: number;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__CompetitorClient<{
        id: string;
        userId: string;
        name: string;
        email: string;
        phone: string;
        photoUrl: string;
        semister: string;
        description: string;
        isWinner: boolean;
        voteCount: number;
        createdAt: Date;
        updatedAt: Date;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updateCompetitorDto: UpdateCompetitorDto): import(".prisma/client").Prisma.Prisma__CompetitorClient<{
        user: {
            id: string;
            name: string;
            role: import(".prisma/client").$Enums.Role;
            password: string;
        };
        Votes: {
            id: string;
            userId: string;
            competitorId: string;
            createdAt: Date;
            updatedAt: Date;
        }[];
    } & {
        id: string;
        userId: string;
        name: string;
        email: string;
        phone: string;
        photoUrl: string;
        semister: string;
        description: string;
        isWinner: boolean;
        voteCount: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    deleteCompetitor(id: string): import(".prisma/client").Prisma.Prisma__CompetitorClient<{
        id: string;
        userId: string;
        name: string;
        email: string;
        phone: string;
        photoUrl: string;
        semister: string;
        description: string;
        isWinner: boolean;
        voteCount: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    getWinner(): Promise<{
        id: string;
        userId: string;
        name: string;
        email: string;
        phone: string;
        photoUrl: string;
        semister: string;
        description: string;
        isWinner: boolean;
        voteCount: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
