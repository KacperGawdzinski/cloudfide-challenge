import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('binance')
export class BinanceController {
    constructor(
        private readonly BinanceService
    ){}

    @Get()
    fetchRecentTransactions(@Body("time") time: string) {
        this.BinanceService
    }

}
