import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { PaymentEditStoreModel as StoreModel, PaymentEditStoreModelUtil as StoreUtil } from '../../models/edit/payment-edit-store.model';
import { Beneficiary, Payer, Transaction, TransactionUtil } from '../../models/edit/payment.model';



export const reducerUpdateTransaction = (transaction: Transaction) => {
    return (currStatus: StoreModel): Observable<StoreModel> => {
        const nextStatus = StoreUtil.clone(currStatus);
        nextStatus.transaction = transaction;
        return of(nextStatus);
    };
};

export const reducerUpdateBeneficiary = (beneficiary: Beneficiary) => {
    return (currStatus: StoreModel): Observable<StoreModel> => {
        const nextStatus = StoreUtil.clone(currStatus);
        TransactionUtil.updateBeneficiary(nextStatus.transaction, beneficiary);
        return of(nextStatus);
    };
};


export const reducerUpdatePayer = (payer: Payer) => {
    return (currStatus: StoreModel): Observable<StoreModel> => {
        const nextStatus = StoreUtil.clone(currStatus);
        TransactionUtil.updatePayer(nextStatus.transaction, payer);
        return of(nextStatus);
    };
};
