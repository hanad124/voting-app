import { Body, Controller, Post } from "@nestjs/common";
import { CompetitorService } from "./competitor.service";
import { Roles } from "src/auth/decorator/role.decorator";
import { Role } from "@prisma/client";
import { CreateCompetitorDto } from "./dto/create-competitorDto";

@Controller("competitors")
export class CompetitorController {
  constructor(private readonly competitorService: CompetitorService) {}

  @Post("/create-competitor")
  @Roles(Role.ADMIN)
  async create(@Body() createCompetitorDto: CreateCompetitorDto) {
    return this.competitorService.createCompetitor(createCompetitorDto);
  }
}
