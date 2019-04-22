import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionService, EditComponent } from '.';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    EditComponent
  ],
  exports: [
    EditComponent
  ],
  providers: [
    TransactionService
  ]
})
export class MoneyTransferModule { }
