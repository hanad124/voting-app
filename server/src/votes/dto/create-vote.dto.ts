import { PartialType } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateVoteDto {
  @IsString()
  @IsNotEmpty()
  competitorId: string;

  @IsString()
  @IsNotEmpty()
  userId: string;
}

export class UpdateVoteDto extends PartialType(CreateVoteDto) {}
