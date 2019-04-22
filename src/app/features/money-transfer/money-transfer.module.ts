import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialSharedModule } from 'src/app/common/modules';
import { EditComponent, StoreService, TransactionService } from '.';
import { BeneficiaryComponent } from './components/edit/beneficiary/beneficiary.component';
import { PayerComponent } from './components/edit/payer/payer.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialSharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    EditComponent,
    PayerComponent,
    BeneficiaryComponent
  ],
  exports: [
    EditComponent
  ],
  providers: [
    TransactionService,
    StoreService
  ]
})
export class MoneyTransferModule { }
