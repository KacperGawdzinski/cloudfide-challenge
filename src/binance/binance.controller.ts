import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { BinanceService } from "./binance.service";

@Controller("binance")
export class BinanceController {
  constructor(private readonly binanceService: BinanceService) {}

  @Get("symbol")
  fetchRecentTransactions(@Query("symbol") symbol: string) {
    return this.binanceService.fetchRecentTransactions(symbol);
  }

  @Get("analysis")
  analyse(
    @Query("symbol") symbol: string,
    @Query("startTime") startTime: number,
    @Query("endTime") endTime: number
  ) {
    return this.binanceService.analyseHistory(symbol, startTime, endTime);
  }
}
