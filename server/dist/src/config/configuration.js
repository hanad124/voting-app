"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    port: parseInt(process.env.APP_PORT) || 3000,
    jwtSecret: process.env.JWT_SECRET,
});
//# sourceMappingURL=configuration.js.map