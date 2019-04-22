import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialSharedModule } from 'src/app/common/modules';
import { EditComponent, StoreService, TransactionService } from '.';


@NgModule({
  imports: [
    CommonModule,
    MaterialSharedModule
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
