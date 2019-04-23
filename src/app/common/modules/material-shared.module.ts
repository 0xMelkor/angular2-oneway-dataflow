import { NgModule } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';

@NgModule({
    imports: [
        MatToolbarModule,
        MatProgressBarModule,
        MatSelectModule,
        MatInputModule
    ],
    exports: [
        MatToolbarModule,
        MatProgressBarModule,
        MatSelectModule,
        MatInputModule
    ],
    declarations: [],
    providers: [],
})
export class MaterialSharedModule { }
