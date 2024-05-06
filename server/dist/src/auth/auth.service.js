"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const prisma_service_1 = require("../prisma/prisma.service");
const helpers_1 = require("../utils/helpers");
let AuthService = class AuthService {
    constructor(prismaService, jwtService) {
        this.prismaService = prismaService;
        this.jwtService = jwtService;
    }
    async generateToken(payload) {
        return this.jwtService.sign(payload);
    }
    async login(loginDto) {
        const user = await this.prismaService.user.findUnique({
            where: {
                id: loginDto.id,
            },
        });
        if (!user) {
            throw new common_1.NotFoundException("user not found!");
        }
        const isPasswordvalid = (0, helpers_1.verifyPassword)(loginDto.password, user.password);
        if (!isPasswordvalid) {
            throw new common_1.ForbiddenException("Invalid Credentials!");
        }
        const payload = {
            id: user.id,
            name: user.name,
            role: user.role,
        };
        const token = await this.generateToken(payload);
        return {
            success: true,
            token,
        };
    }
    async register(registerDto) {
        const existUser = await this.prismaService.user.findUnique({
            where: {
                id: registerDto.id,
            },
        });
        if (existUser) {
            throw new common_1.ForbiddenException("User already exists!");
        }
        const hashedPassword = await (0, helpers_1.hashPassword)(registerDto.password);
        const user = await this.prismaService.user.create({
            data: {
                id: registerDto.id,
                name: registerDto.name,
                password: hashedPassword,
            },
        });
        const payload = {
            id: user.id,
            name: user.name,
            role: user.role,
        };
        const token = await this.generateToken(payload);
        return {
            success: true,
            token,
        };
    }
    async me(req) {
        const payload = req.user;
        const user = await this.prismaService.user.findUnique({
            where: {
                id: payload.id,
            },
        });
        if (!user) {
            throw new common_1.NotFoundException("User not found");
        }
        return (0, helpers_1.excludeFields)(user, ["password"]);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map