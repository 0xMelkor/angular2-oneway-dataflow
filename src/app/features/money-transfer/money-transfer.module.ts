import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from './components/list/list.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ListComponent,
    DetailComponent,
    EditComponent
  ],
  exports: [
    ListComponent,
    DetailComponent,
    EditComponent
  ]
})
export class MoneyTransferModule { }
