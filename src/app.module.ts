import { MongooseModule } from "@nestjs/mongoose";
import { Module } from "@nestjs/common";
import { BinanceController } from "./binance/binance.controller";
import { BinanceService } from "./binance/binance.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { BinanceModule } from "./binance/binance.module";
import configuration from "./config/configuration";
import { HttpModule } from "@nestjs/axios";

@Module({
  imports: [
    ConfigModule.forRoot({ load: [configuration], isGlobal: true }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: `mongodb://${configService.get<string>("database.host")}:${configService.get<string>("database.port")}`,
        auth: {
          username: configService.get<string>("database.user"),
          password: configService.get<string>("database.password"),
        },
        dbName: configService.get<string>("database.name"),
      }),
      inject: [ConfigService],
    }),
    BinanceModule,
    HttpModule,
  ],
  controllers: [BinanceController],
  providers: [BinanceService],
})
export class AppModule {}
