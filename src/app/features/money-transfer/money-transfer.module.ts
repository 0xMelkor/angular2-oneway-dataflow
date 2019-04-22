import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionService, EditComponent, StoreService } from '.';

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
    TransactionService,
    StoreService
  ]
})
export class MoneyTransferModule { }
