"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.excludeFieldsFromArr = exports.excludeFields = exports.formatPrismaError = exports.verifyPassword = exports.hashPassword = void 0;
const argon2 = require("argon2");
const hashPassword = async (password) => {
    return await argon2.hash(password);
};
exports.hashPassword = hashPassword;
const verifyPassword = async (password, hash) => {
    return await argon2.verify(hash, password);
};
exports.verifyPassword = verifyPassword;
const formatPrismaError = (error, isError = true) => {
    switch (isError) {
        case error.includes('Unique constraint failed on the fields'):
            return 'This is already registered';
        default:
            return 'Internal server error';
    }
};
exports.formatPrismaError = formatPrismaError;
const excludeFields = (obj, fields) => {
    const newObj = { ...obj };
    fields.forEach((field) => delete newObj[field]);
    return newObj;
};
exports.excludeFields = excludeFields;
const excludeFieldsFromArr = (arr, fields) => {
    return arr.map((obj) => (0, exports.excludeFields)(obj, fields));
};
exports.excludeFieldsFromArr = excludeFieldsFromArr;
//# sourceMappingURL=helpers.js.map