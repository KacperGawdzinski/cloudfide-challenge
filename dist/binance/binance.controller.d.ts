import { BinanceService } from './binance.service';
export declare class BinanceController {
    private readonly binanceService;
    constructor(binanceService: BinanceService);
    fetchRecentTransactions(time: string, symbol: string): void;
}
