import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { Subject } from 'rxjs/internal/Subject';
import { PaymentReason } from '../../../models/edit/payment-reason.enum';
import { Beneficiary } from '../../../models/edit/payment.model';
import { takeUntil, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-beneficiary',
  templateUrl: './beneficiary.component.html'
})
export class BeneficiaryComponent implements OnInit, OnChanges {


  @Output() beneficiaryChange = new EventEmitter<Beneficiary>();

  @Input() paymentReasons: PaymentReason[];
  @Input() beneficiary: Beneficiary;

  formGroup: FormGroup;

  private inputChange$ = new ReplaySubject<boolean>();
  private destroy$ = new Subject<boolean>();

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
      beneficiaryIbanCtrl: [null],
      amountCtrl: [null],
      paymentReasonCtrl: [null]
    });
  }

  private listenInputChange() {
    this.inputChange$
      .pipe(takeUntil(this.destroy$), debounceTime(20))
      .subscribe(
        () => this.refreshComponentStatus(this.beneficiary)
      );
  }

  private listenFormChanges() {
    this.formGroup.valueChanges
    .pipe(takeUntil(this.destroy$), debounceTime(200))
    .subscribe(
      value => this.beneficiaryChange.emit({
        beneficiaryIban: value.beneficiaryIbanCtrl,
        amount: value.amountCtrl,
        paymentReason: value.paymentReasonCtrl
      })
    );
  }

  private refreshComponentStatus(beneficiary: Beneficiary) {
    if (beneficiary) {
      const NO_EVENT = { emitEvent: false };
      this.beneficiaryIbanCtrl.setValue(beneficiary.beneficiaryIban, NO_EVENT);
      this.amountCtrl.setValue(beneficiary.amount, NO_EVENT);
      this.paymentReasonCtrl.setValue(beneficiary.paymentReason, NO_EVENT);

    }
  }

  get beneficiaryIbanCtrl(): AbstractControl {
    return this.formGroup.get('beneficiaryIbanCtrl');
  }
  get amountCtrl(): AbstractControl {
    return this.formGroup.get('amountCtrl');
  }
  get paymentReasonCtrl(): AbstractControl {
    return this.formGroup.get('paymentReasonCtrl');
  }

}
