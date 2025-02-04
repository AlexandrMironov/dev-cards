import { Document } from 'mongoose';
export declare class Card extends Document {
    title: string;
    description: string;
    startDate: string;
}
export declare const CardSchema: import("mongoose").Schema<Card, import("mongoose").Model<Card, any, any, any, Document<unknown, any, Card> & Card & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Card, Document<unknown, {}, import("mongoose").FlatRecord<Card>> & import("mongoose").FlatRecord<Card> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
