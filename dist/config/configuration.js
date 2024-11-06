"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    port: parseInt(process.env.PORT, 10),
    database: {
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        host: process.env.DATABASE_HOST,
        name: process.env.DATABASE_NAME,
        port: parseInt(process.env.DATABASE_PORT, 10)
    }
});
//# sourceMappingURL=configuration.js.map