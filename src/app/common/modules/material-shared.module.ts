import { NgModule } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
    imports: [
        MatToolbarModule,
        MatProgressBarModule
    ],
    exports: [
        MatToolbarModule,
        MatProgressBarModule
    ],
    declarations: [],
    providers: [],
})
export class MaterialSharedModule { }
