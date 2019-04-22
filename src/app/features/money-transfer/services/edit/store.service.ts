import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { mergeMap, take } from 'rxjs/operators';
import { UserService } from 'src/app/common/services';
import { PaymentEditStoreModel as StoreModel } from '../../models/edit/payment-edit-store.model';
import { PaymentReason } from '../../models/edit/payment-reason.enum';
import { Beneficiary, Payer, Transaction } from '../../models/edit/payment.model';
import { reducerUpdateBeneficiary, reducerUpdatePayer, reducerUpdateTransaction } from './store-reducers';
import { TransactionService } from './transaction.service';

@Injectable()
export class StoreService {

    private store$ = new BehaviorSubject<StoreModel>(this.getInitialState());

    get store(): Observable<StoreModel> {
        return this.store$.asObservable();
    }

    constructor(
        private userService: UserService,
        private transactionService: TransactionService
    ) { }


    actionUpdateTransaction(transactionId: number) {
        this.getTransaction(transactionId)
            .subscribe(transaction => {
                this.evaluateNextStatus(reducerUpdateTransaction(transaction));
            });
    }

    actionUpdatePayer(payer: Payer) {
        return this.evaluateNextStatus(reducerUpdatePayer(payer));
    }

    actionUpdateBeneficiary(beneficiary: Beneficiary) {
        return this.evaluateNextStatus(reducerUpdateBeneficiary(beneficiary));
    }

    private evaluateNextStatus(reducerFn: (currStatus: StoreModel) => Observable<StoreModel>) {
        this.store.pipe(take(1), mergeMap(currentStatus => reducerFn(currentStatus)))
            .subscribe(nextStatus => {
                this.store$.next(nextStatus);
            });
    }

    private getTransaction(transactionId: number): Observable<Transaction> {
        return !!transactionId ? this.transactionService.readTransaction(transactionId) :
            of(this.getEmptyTransaction());
    }

    private getPaymentReasons(): PaymentReason[] {
        return Object.keys(PaymentReason).map(pr => PaymentReason[pr]);
    }

    private getPayerAccounts(): string[] {
        return this.userService.getUser().accounts;
    }

    private getInitialState(): StoreModel {
        return {
            payerAccounts: this.getPayerAccounts(),
            paymentReasons: this.getPaymentReasons(),
            transaction: this.getEmptyTransaction()
        };
    }

    private getEmptyTransaction(): Transaction {
        return {
            id: null,
            payer: { payerIban: null },
            beneficiary: {
                beneficiaryIban: null,
                amount: null,
                paymentReason: PaymentReason.REASON_1
            }
        };
    }

}
