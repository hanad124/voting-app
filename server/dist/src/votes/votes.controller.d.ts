import { VotesService } from "./votes.service";
import { CreateVoteDto, UpdateVoteDto } from "./dto/create-vote.dto";
export declare class VotesController {
    private readonly votesService;
    constructor(votesService: VotesService);
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
    create(createVoteDto: CreateVoteDto): Promise<{
        success: boolean;
        message: string;
    }>;
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
