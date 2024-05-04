export declare class CreateCompetitorDto {
    name: string;
    email: string;
    phone: string;
    photoUrl: string;
    semister: string;
    description: string;
    userId: string;
}
declare const UpdateCompetitorDto_base: import("@nestjs/common").Type<Partial<CreateCompetitorDto>>;
export declare class UpdateCompetitorDto extends UpdateCompetitorDto_base {
}
export {};
