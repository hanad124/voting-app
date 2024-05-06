import { PrismaService } from "src/prisma/prisma.service";
import { CreateVoteDto, UpdateVoteDto } from "./dto/create-vote.dto";
export declare class VotesService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createVoteDto: CreateVoteDto): Promise<{
        success: boolean;
        message: string;
    }>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        user: {
            id: string;
            name: string;
            role: import(".prisma/client").$Enums.Role;
            password: string;
        };
        competitor: {
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
        };
    } & {
        id: string;
        userId: string;
        competitorId: string;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__VoteClient<{
        user: {
            id: string;
            name: string;
            role: import(".prisma/client").$Enums.Role;
            password: string;
        };
        competitor: {
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
        };
    } & {
        id: string;
        userId: string;
        competitorId: string;
        createdAt: Date;
        updatedAt: Date;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updateVoteDto: UpdateVoteDto): import(".prisma/client").Prisma.Prisma__VoteClient<{
        user: {
            id: string;
            name: string;
            role: import(".prisma/client").$Enums.Role;
            password: string;
        };
        competitor: {
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
        };
    } & {
        id: string;
        userId: string;
        competitorId: string;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
