import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BinanceController } from './binance/binance.controller';
import { BinanceService } from './binance/binance.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), MongooseModule.forRootAsync({
    useFactory: async (configService: ConfigService) => ({
      uri: `mongodb://${configService.get<string>("database.host")}:${configService.get<string>("database.port")}}`,
      auth: {
        username: configService.get<string>("database.user"),
        password: configService.get<string>("database.password")
      },
      dbName: configService.get<string>("database.name")
    }),
  })],
  controllers: [AppController, BinanceController],
  providers: [AppService, BinanceService],
})
export class AppModule {}
