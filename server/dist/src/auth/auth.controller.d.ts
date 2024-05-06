import { AuthService } from './auth.service';
import { LoginDto, RegistDto } from './dto/auth.dto';
import { Request } from 'express';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
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
