import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "src/prisma/prisma.service";
import { jwtPayload } from "types/auth";
import { LoginDto, RegistDto } from "./dto/auth.dto";
import { excludeFields, hashPassword, verifyPassword } from "src/utils/helpers";
import { Request } from "express";

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService
  ) {}

  async generateToken(payload: jwtPayload) {
    return this.jwtService.sign(payload);
  }

  async login(loginDto: LoginDto) {
    const user = await this.prismaService.user.findUnique({
      where: {
        id: loginDto.id,
      },
    });

    if (!user) {
      throw new NotFoundException("user not found!");
    }

    const isPasswordvalid = verifyPassword(loginDto.password, user.password);

    if (!isPasswordvalid) {
      throw new ForbiddenException("Invalid Credentials!");
    }

    const payload: jwtPayload = {
      id: user.id,
      // id: user.email,
      name: user.name,
      role: user.role,
    };

    const token = await this.generateToken(payload);

    return {
      success: true,
      token,
    };
  }

  async register(registerDto: RegistDto) {
    const existUser = await this.prismaService.user.findUnique({
      where: {
        id: registerDto.id,
      },
    });

    if (existUser) {
      throw new ForbiddenException("User already exists!");
    }

    const hashedPassword = await hashPassword(registerDto.password);

    const user = await this.prismaService.user.create({
      data: {
        id: registerDto.id,
        name: registerDto.name,
        password: hashedPassword,
      },
    });

    const payload: jwtPayload = {
      id: user.id,
      // email: user.email,
      name: user.name,
      role: user.role,
    };

    const token = await this.generateToken(payload);

    return {
      success: true,
      token,
    };
  }

  async me(req: Request) {
    const payload = req.user as jwtPayload;

    const user = await this.prismaService.user.findUnique({
      where: {
        id: payload.id,
      },
    });

    if (!user) {
      throw new NotFoundException("User not found");
    }

    return excludeFields(user, ["password"]);
  }
}
