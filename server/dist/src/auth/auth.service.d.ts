import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "src/prisma/prisma.service";
import { jwtPayload } from "types/auth";
import { LoginDto, RegistDto } from "./dto/auth.dto";
import { Request } from "express";
export declare class AuthService {
    private readonly prismaService;
    private readonly jwtService;
    constructor(prismaService: PrismaService, jwtService: JwtService);
    generateToken(payload: jwtPayload): Promise<string>;
    login(loginDto: LoginDto): Promise<{
        success: boolean;
        token: string;
    }>;
    register(registerDto: RegistDto): Promise<{
        success: boolean;
        token: string;
    }>;
    me(req: Request): Promise<Partial<{
        id: string;
        name: string;
        role: import(".prisma/client").$Enums.Role;
        password: string;
    }>>;
}
