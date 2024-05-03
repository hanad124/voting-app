export declare const hashPassword: (password: string) => Promise<string>;
export declare const verifyPassword: (password: string, hash: string) => Promise<boolean>;
export declare const formatPrismaError: (error: string, isError?: boolean) => "This is already registered" | "Internal server error";
export declare const excludeFields: <T>(obj: T, fields: Array<keyof T>) => Partial<T>;
export declare const excludeFieldsFromArr: <T>(arr: T[], fields: Array<keyof T>) => Partial<T>[];
