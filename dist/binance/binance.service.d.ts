import { HttpService } from "@nestjs/axios";
export declare class BinanceService {
    private readonly httpService;
    constructor(httpService: HttpService);
    fetchRecentTransactions(time: string, symbol: string): Promise<any>;
}
