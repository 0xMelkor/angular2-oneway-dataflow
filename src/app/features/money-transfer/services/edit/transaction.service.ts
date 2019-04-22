import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { delay } from 'rxjs/operators';
import { Transaction, TransactionUtil } from '../../models/edit/payment.model';

/**
 * This service is intended to provide a fake remote CRUD interface for Transactions @see Transaction.
 * Transactions are stored in the local session storage
 */
@Injectable()
export class TransactionService {

    private readonly TRANSACTIONS_SESSION_KEY = 'transactions';

    constructor() { }

    createTransaction(t: Transaction): Observable<Transaction> {
        const transaction = TransactionUtil.clone(t);
        const allTransactions = this.getStoredTransactions();

        transaction.id = allTransactions.length + 1;
        allTransactions.push(transaction);
        sessionStorage.setItem(this.TRANSACTIONS_SESSION_KEY, JSON.stringify(allTransactions));

        return of(transaction).pipe(delay(200));
    }

    readTransaction(id: number): Observable<Transaction> {
        const t = this.getStoredTransactions().filter(tr => tr.id === id)[0];
        return of(t).pipe(delay(200));
    }

    private getStoredTransactions(): Transaction[] {
        const transactions: string = sessionStorage.getItem(this.TRANSACTIONS_SESSION_KEY);
        return transactions ? JSON.parse(transactions) as Transaction[] : [];
    }

}
