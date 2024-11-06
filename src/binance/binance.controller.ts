import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { BinanceService } from "./binance.service";

@Controller("binance")
export class BinanceController {
  constructor(private readonly binanceService: BinanceService) {}

  @Get("symbol")
  fetchRecentTransactions(@Query("symbol") symbol: string) {
    this.binanceService.fetchRecentTransactions(symbol);
  }
}
