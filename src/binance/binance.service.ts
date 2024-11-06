import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { lastValueFrom } from "rxjs";
import { Trade } from "./schemas/trade.schema";
import { Model } from "mongoose";

@Injectable()
export class BinanceService {
  constructor(
    private readonly httpService: HttpService,
    @InjectModel(Trade.name) private tradeModel: Model<Trade>
  ) {}

  async fetchRecentTransactions(symbol: string): Promise<any> {
    const response = await lastValueFrom(
      this.httpService.get("https://api.binance.com/api/v3/trades", {
        params: {
          symbol,
        },
      })
    );

    //ineffective but couldn't think of faster solution during the task
    for (const trade of response.data) {
      if (!(await this.tradeModel.findOne({ id: trade.id }).exec())) {
        await this.tradeModel.create({ ...trade, symbol });
      }
    }

    return response.data;
  }

  async analyseHistory(symbol: string, startTime: number, endTime: number) {
    const trades = await this.tradeModel.find({
      time: { $gte: startTime, $lte: endTime },
      symbol,
    });

    const { lowestValue, highestValue } = this.findExtremum(trades);

    return {
      startValue: trades[0].price,
      endValue: trades[trades.length - 1].price,
      lowestValue,
      highestValue,
    };
  }

  findExtremum(trades: Trade[]) {
    let lowestValue = 100000000;
    let highestValue = -1;

    for (const trade of trades) {
      const currentValue = parseFloat(trade.price);
      if (currentValue < lowestValue) {
        lowestValue = currentValue;
      }
      if (currentValue > highestValue) {
        highestValue = currentValue;
      }
    }
    return { lowestValue, highestValue };
  }
}
