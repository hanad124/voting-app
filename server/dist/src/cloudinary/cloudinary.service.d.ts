import { ConfigService } from '@nestjs/config';
export declare class CloudinaryService {
    private readonly configService;
    private cloudinary;
    constructor(configService: ConfigService);
    uploadImage(image: string): Promise<string>;
}
