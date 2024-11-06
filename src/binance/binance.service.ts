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
        await this.tradeModel.create(trade);
      }
    }

    return;
  }
}
