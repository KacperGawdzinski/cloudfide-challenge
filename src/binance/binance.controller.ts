import { Body, Controller, Get, Post } from '@nestjs/common';
import { BinanceService } from './binance.service';

@Controller('binance')
export class BinanceController {
    constructor(
        private readonly binanceService: BinanceService
    ){}

    @Get()
    fetchRecentTransactions(@Body("time") time: string, @Body("symbol") symbol: string) {
        this.binanceService.fetchRecentTransactions(time, symbol)
    }

}
