import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import configuration from "./config/configuration";
import { PrimsaModule } from "./prisma/prisma.module";
import { AuthModule } from "./auth/auth.module";
import { APP_GUARD } from "@nestjs/core";
import { JwtAuthGuard } from "./guards/auth.guard";
import { RolesGuard } from "./guards/role.guard";
import { UsersModule } from "./users/user.module";
import { CompetitorModule } from "./competitor/competitor.module";
import { VotesModule } from "./votes/votes.module";
import { UploadModule } from "./upload/upload.module";
import { CloudinaryModule } from "./cloudinary/cloudinary.module";
import { SeedService } from "prisma/seed/seed.service";
import { SeedModule } from "prisma/seed/seed.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    PrimsaModule,
    AuthModule,
    UsersModule,
    VotesModule,
    CompetitorModule,
    UploadModule,
    CloudinaryModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
