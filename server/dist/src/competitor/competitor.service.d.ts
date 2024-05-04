import { PrismaService } from "src/prisma/prisma.service";
import { CreateCompetitorDto } from "./dto/create-competitorDto";
export declare class CompetitorService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    createCompetitor(competitorDto: CreateCompetitorDto): Promise<{
        Vote: {
            id: string;
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
            email: string;
            role: import(".prisma/client").$Enums.Role;
            password: string;
            createdAt: Date;
            updatedAt: Date;
        };
        Vote: {
            id: string;
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
    findOnle: any;
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
