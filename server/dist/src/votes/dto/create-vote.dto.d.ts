export declare class CreateVoteDto {
    competitorId: string;
    userId: string;
}
declare const UpdateVoteDto_base: import("@nestjs/common").Type<Partial<CreateVoteDto>>;
export declare class UpdateVoteDto extends UpdateVoteDto_base {
}
export {};
