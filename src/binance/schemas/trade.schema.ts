import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type TradeDocument = HydratedDocument<Trade>;

@Schema()
export class Trade {
  @Prop()
  id: number;

  @Prop()
  symbol: string;

  @Prop()
  price: string;

  @Prop()
  qty: string;

  @Prop()
  quoteQty: string;

  @Prop()
  time: number;

  @Prop()
  isBuyerMaker: boolean;

  @Prop()
  isBestMatch: boolean;
}

export const TradeSchema = SchemaFactory.createForClass(Trade);
