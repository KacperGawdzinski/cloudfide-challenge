import { Injectable } from '@nestjs/common';

@Injectable()
export class BinanceService {
    async  fetchRecentTransactions: Promise<Transactions> {
        return new Promise();
    }
}
