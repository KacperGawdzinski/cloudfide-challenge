import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { BinanceService } from "./binance.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Trade, TradeSchema } from "./schemas/trade.schema";

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([{ name: Trade.name, schema: TradeSchema }]),
  ],
  providers: [BinanceService],
  exports: [MongooseModule],
})
export class BinanceModule {}
