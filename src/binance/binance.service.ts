import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { firstValueFrom, lastValueFrom } from "rxjs";

@Injectable()
export class BinanceService {
  constructor(private readonly httpService: HttpService) {}

  async fetchRecentTransactions(time: string, symbol: string): Promise<any> {
    const response = await lastValueFrom(
      this.httpService.get("https://api.binance.com/api/v3/ticker", {
        params: {
          symbol,
          windowSize: time,
        },
      })
    );
    console.log(response.data);
    return response.data;
  }
}
