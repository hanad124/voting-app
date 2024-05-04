import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { VotesService } from "./votes.service";
import { CreateVoteDto, UpdateVoteDto } from "./dto/create-vote.dto";
import { Roles } from "src/auth/decorator/role.decorator";
import { Role } from "@prisma/client";

@Controller("votes")
export class VotesController {
  constructor(private readonly votesService: VotesService) {}

  @Get()
  findAll() {
    return this.votesService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.votesService.findOne(id);
  }

  @Post("/create-vote")
  async create(@Body() createVoteDto: CreateVoteDto) {
    return this.votesService.create(createVoteDto);
  }

  @Patch(":id")
  @Roles(Role.ADMIN)
  update(@Param("id") id: string, @Body() updateVoteDto: UpdateVoteDto) {
    return this.votesService.update(id, updateVoteDto);
  }
}
