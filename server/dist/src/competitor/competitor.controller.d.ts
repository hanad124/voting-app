import { CompetitorService } from "./competitor.service";
import { CreateCompetitorDto } from "./dto/create-competitorDto";
export declare class CompetitorController {
    private readonly competitorService;
    constructor(competitorService: CompetitorService);
    create(createCompetitorDto: CreateCompetitorDto): Promise<{
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
}
