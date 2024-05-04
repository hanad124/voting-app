import { UsersService } from './users.service';
import { UpdateUserDto } from 'src/auth/dto/auth.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<Partial<{
        id: string;
        name: string;
        email: string;
        role: import(".prisma/client").$Enums.Role;
        password: string;
        createdAt: Date;
        updatedAt: Date;
    }>[]>;
    findOne(id: string): Promise<Partial<{
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
