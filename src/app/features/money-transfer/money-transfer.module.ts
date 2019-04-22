import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from './components/list/list.component';
import { EditComponent } from './components/edit/edit.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ListComponent,
    EditComponent
  ],
  exports: [
    ListComponent,
    EditComponent
  ]
})
export class MoneyTransferModule { }
