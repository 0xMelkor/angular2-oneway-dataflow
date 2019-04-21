import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoneyTransferModule } from './features/money-transfer/money-transfer.module';
import { MaterialSharedModule } from './common/modules/material-shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MoneyTransferModule,
    MaterialSharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
