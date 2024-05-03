import { UpdateUserDto } from 'src/auth/dto/auth.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class UsersService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findAll(): Promise<Partial<{
        Competitor: {
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
        }[];
        Vote: {
            id: string;
            userId: string;
            competitorId: string;
            createdAt: Date;
            updatedAt: Date;
        }[];
    } & {
        id: string;
        name: string;
        email: string;
        role: import(".prisma/client").$Enums.Role;
        password: string;
        createdAt: Date;
        updatedAt: Date;
    }>[]>;
    findOne(id: string): Promise<Partial<{
        Competitor: {
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
        }[];
        Vote: {
            id: string;
            userId: string;
            competitorId: string;
            createdAt: Date;
            updatedAt: Date;
        }[];
    } & {
        id: string;
        name: string;
        email: string;
        role: import(".prisma/client").$Enums.Role;
        password: string;
        createdAt: Date;
        updatedAt: Date;
    }>>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<{
        id: string;
        name: string;
        email: string;
        role: import(".prisma/client").$Enums.Role;
        password: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
