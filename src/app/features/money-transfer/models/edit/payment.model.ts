import { PaymentReason } from './payment-reason.enum';

export interface Payer {
    payerIban: string;
}

export interface Beneficiary {
    beneficiaryIban: string;
    amount: number;
    paymentReason: PaymentReason;
}

export interface Transaction {
    payer: Payer;
    beneficiary: Beneficiary;
}
