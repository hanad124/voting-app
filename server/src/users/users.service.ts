import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { UpdateUserDto } from "src/auth/dto/auth.dto";
import { PrismaService } from "src/prisma/prisma.service";
import {
  excludeFields,
  excludeFieldsFromArr,
  hashPassword,
} from "src/utils/helpers";

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll() {
    try {
      const users = await this.prismaService.user.findMany({
        include: {
          Competitor: true,
          // Vote: true,
        },
      });

      return excludeFieldsFromArr(users, ["password"]);
    } catch (error) {
      const err = error as Error;
      throw new InternalServerErrorException(err.message);
    }
  }

  async findOne(id: string) {
    try {
      const user = await this.prismaService.user.findUnique({
        where: {
          id: id,
        },
        include: {
          Competitor: true,
          // Vote: true,
        },
      });

      return excludeFields(user, ["password"]);
    } catch (error) {
      const err = error as Error;
      throw new InternalServerErrorException(err.message);
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return this.prismaService.user.update({
      where: {
        id: id,
      },

      data: {
        name: updateUserDto.name,
        // email: updateUserDto.email,
        role: { set: updateUserDto.role },
        password: await hashPassword(updateUserDto.password),
      },
    });
  }
}
