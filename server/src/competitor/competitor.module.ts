import { Module } from "@nestjs/common";
import { CompetitorController } from "./competitor.controller";
import { CompetitorService } from "./competitor.service";
import { PrismaService } from "src/prisma/prisma.service";

@Module({
  controllers: [CompetitorController],
  providers: [CompetitorService, PrismaService],
})
export class CompetitorModule {}
