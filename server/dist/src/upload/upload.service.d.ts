import { CloudinaryService } from "src/cloudinary/cloudinary.service";
export declare class UploadService {
    private readonly cloudinaryService;
    constructor(cloudinaryService: CloudinaryService);
    uploadImage(image: string): Promise<{
        url: string;
    }>;
}
