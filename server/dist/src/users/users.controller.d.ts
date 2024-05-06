import { UsersService } from './users.service';
import { UpdateUserDto } from 'src/auth/dto/auth.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
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
    } & {
        id: string;
        name: string;
        role: import(".prisma/client").$Enums.Role;
        password: string;
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
    } & {
        id: string;
        name: string;
        role: import(".prisma/client").$Enums.Role;
        password: string;
    }>>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<{
        id: string;
        name: string;
        role: import(".prisma/client").$Enums.Role;
        password: string;
    }>;
}
