"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const common_1 = require("@nestjs/common");
const binance_controller_1 = require("./binance/binance.controller");
const binance_service_1 = require("./binance/binance.service");
const config_1 = require("@nestjs/config");
const binance_module_1 = require("./binance/binance.module");
const configuration_1 = require("./config/configuration");
const axios_1 = require("@nestjs/axios");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ load: [configuration_1.default], isGlobal: true }),
            mongoose_1.MongooseModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (configService) => ({
                    uri: `mongodb://${configService.get("database.host")}:${configService.get("database.port")}`,
                    auth: {
                        username: configService.get("database.user"),
                        password: configService.get("database.password"),
                    },
                    dbName: configService.get("database.name"),
                }),
                inject: [config_1.ConfigService],
            }),
            binance_module_1.BinanceModule,
            axios_1.HttpModule,
        ],
        controllers: [binance_controller_1.BinanceController],
        providers: [binance_service_1.BinanceService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map