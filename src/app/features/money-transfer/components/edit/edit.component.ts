import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { merge } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';
import { debounceTime, map, takeUntil, tap } from 'rxjs/operators';
import { PaymentEditStoreModel as StoreModel } from '../../models/edit/payment-edit-store.model';
import { StoreService } from '../../services/edit/store.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit, OnDestroy {

  private destroy$ = new Subject<boolean>();

  status: StoreModel;
  isLoading: boolean;

  constructor(private route: ActivatedRoute, private storeService: StoreService) { }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }

  ngOnInit() {
    const store$ = this.storeService.store;

    const route$ = this.route.params
      .pipe(
        map(params => params.id),
        tap(_ => this.isLoading = true),
        tap(id => this.storeService.actionUpdateTransaction(id))
      );

    merge(route$, store$)
      .pipe(
        debounceTime(20),
        takeUntil(this.destroy$),
        tap(_ => this.isLoading = false)
      )
      .subscribe(status => {
        this.status = status;
      });
  }


}
