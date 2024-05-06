import { Role } from "@prisma/client";
export declare class LoginDto {
    id: string;
    password: string;
}
export declare class RegistDto {
    name: string;
    id: string;
    password: string;
}
export declare class UpdateUserDto {
    name: string;
    id: string;
    password: string;
    role: Role;
}
