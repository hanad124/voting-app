import { Role } from '@prisma/client';
export declare class LoginDto {
    email: string;
    password: string;
}
export declare class RegistDto {
    name: string;
    email: string;
    password: string;
}
export declare class UpdateUserDto {
    name: string;
    email: string;
    password: string;
    role: Role;
}
