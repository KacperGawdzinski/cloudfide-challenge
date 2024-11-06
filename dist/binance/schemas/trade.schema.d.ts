import { HydratedDocument } from "mongoose";
export type TradeDocument = HydratedDocument<Trade>;
export declare class Trade {
    id: number;
    price: string;
    qty: string;
    quoteQty: string;
    time: number;
    isBuyerMaker: boolean;
    isBestMatch: boolean;
}
export declare const TradeSchema: import("mongoose").Schema<Trade, import("mongoose").Model<Trade, any, any, any, import("mongoose").Document<unknown, any, Trade> & Trade & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Trade, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Trade>> & import("mongoose").FlatRecord<Trade> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
