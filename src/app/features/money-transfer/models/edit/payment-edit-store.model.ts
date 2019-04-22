import { PaymentReason } from './payment-reason.enum';
import { Transaction } from './payment.model';

export interface PaymentEditStoreModel {
    payerAccounts: string[];
    paymentReasons: PaymentReason[];
    transaction: Transaction;
}

export class PaymentEditStoreModelUtil {
    static clone(s: PaymentEditStoreModel): PaymentEditStoreModel {
        return JSON.parse(JSON.stringify(s));
    }
}
