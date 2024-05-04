import { UpdateUserDto } from 'src/auth/dto/auth.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class UsersService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
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
