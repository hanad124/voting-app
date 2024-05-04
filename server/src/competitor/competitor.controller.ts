import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { CompetitorService } from "./competitor.service";
import { Roles } from "src/auth/decorator/role.decorator";
import { Role } from "@prisma/client";
import {
  CreateCompetitorDto,
  UpdateCompetitorDto,
} from "./dto/create-competitorDto";

@Controller("competitors")
export class CompetitorController {
  constructor(private readonly competitorService: CompetitorService) {}

  @Post("/create-competitor")
  @Roles(Role.ADMIN)
  async create(@Body() createCompetitorDto: CreateCompetitorDto) {
    return this.competitorService.createCompetitor(createCompetitorDto);
  }

  @Get()
  @Roles(Role.ADMIN)
  findAll() {
    return this.competitorService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.competitorService.findOne(id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() UpdateCompetitorDto: UpdateCompetitorDto
  ) {
    return this.competitorService.update(id, UpdateCompetitorDto);
  }

  @Delete(":id")
  @Roles(Role.ADMIN)
  delelete(@Param("id") id: string) {
    return this.competitorService.deleteCompetitor(id);
  }

  @Get("/winner")
  @Roles(Role.ADMIN)
  async getWinner() {
    return this.competitorService.getWinner();
  }
}
