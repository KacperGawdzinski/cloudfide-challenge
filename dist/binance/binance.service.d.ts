import { HttpService } from "@nestjs/axios";
import { Trade } from "./schemas/trade.schema";
import { Model } from "mongoose";
export declare class BinanceService {
    private readonly httpService;
    private tradeModel;
    constructor(httpService: HttpService, tradeModel: Model<Trade>);
    fetchRecentTransactions(symbol: string): Promise<any>;
}
