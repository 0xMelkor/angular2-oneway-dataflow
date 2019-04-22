import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { Subject } from 'rxjs/internal/Subject';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { Payer } from '../../../models/edit/payment.model';

@Component({
  selector: 'app-payer',
  templateUrl: './payer.component.html'
})
export class PayerComponent implements OnInit, OnChanges {

  @Input() accounts: string[];
  @Input() payer: Payer;

  @Output() payerChange = new EventEmitter<Payer>();

  formGroup: FormGroup;

  private inputChange$ = new ReplaySubject<boolean>();
  private destroy$ = new Subject<boolean>();

  get payerIbanCtrl(): AbstractControl { return this.formGroup.get('payerIbanCtrl'); }

  constructor(private fb: FormBuilder) { }

  ngOnChanges() {
    this.inputChange$.next(true);
  }

  ngOnInit() {
    this.initFormGroup();
    this.listenInputChange();
    this.listenFormChanges();
  }

  private initFormGroup() {
    this.formGroup = this.fb.group({
      payerIbanCtrl: [null]
    });
  }

  private listenInputChange() {
    this.inputChange$
      .pipe(takeUntil(this.destroy$), debounceTime(20))
      .subscribe(
        () => this.refreshComponentStatus(this.payer)
      );
  }

  private listenFormChanges() {
    this.payerIbanCtrl.valueChanges
      .pipe(takeUntil(this.destroy$), debounceTime(200))
      .subscribe(
        value => this.payerChange.emit({
          payerIban: value
        })
      );
  }

  private refreshComponentStatus(payer: Payer) {
    if (payer) {
      this.payerIbanCtrl.setValue(payer.payerIban, { emitEvent: false });
    }
  }

}
