"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
    }));
    app.setGlobalPrefix('api');
    const configService = app.get(config_1.ConfigService);
    await app.listen(configService.get('port'));
}
bootstrap();
//# sourceMappingURL=main.js.map