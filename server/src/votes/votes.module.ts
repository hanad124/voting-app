import { Injectable, Module } from "@nestjs/common";
import { VotesController } from "./votes.controller";
import { VotesService } from "./votes.service";
import { PrismaService } from "src/prisma/prisma.service";
import { UsersService } from "src/users/users.service";

@Module({
  controllers: [VotesController],
  providers: [VotesService, PrismaService, UsersService],
})
export class VotesModule {}
