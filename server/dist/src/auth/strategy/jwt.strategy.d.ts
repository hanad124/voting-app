import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
import { jwtPayload } from 'types/auth';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor(config: ConfigService);
    validate(payload: jwtPayload): Promise<{
        id: string;
        name: string;
        role: string;
    }>;
}
export {};
