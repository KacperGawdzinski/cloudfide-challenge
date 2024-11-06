import { BinanceService } from "./binance.service";
export declare class BinanceController {
    private readonly binanceService;
    constructor(binanceService: BinanceService);
    fetchRecentTransactions(symbol: string): void;
}
