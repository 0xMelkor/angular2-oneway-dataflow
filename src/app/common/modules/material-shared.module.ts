import { NgModule } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
    imports: [
        MatToolbarModule,
        MatProgressBarModule,
        MatSelectModule
    ],
    exports: [
        MatToolbarModule,
        MatProgressBarModule,
        MatSelectModule
    ],
    declarations: [],
    providers: [],
})
export class MaterialSharedModule { }
