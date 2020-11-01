"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const helmet = require("helmet");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    app.use(helmet());
    await app.listen(process.env.PORT || 3000);
    common_1.Logger.log(await app.getUrl(), app_module_1.AppModule.name);
}
bootstrap();
//# sourceMappingURL=main.js.map