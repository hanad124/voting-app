import { PrismaService } from "src/prisma/prisma.service";
export declare class SeedService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    seed(): Promise<void>;
}
