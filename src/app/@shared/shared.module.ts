// core module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    BannerComponent
} from './components';

@NgModule({
    declarations: [
        BannerComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        BannerComponent
    ]
})
export class SharedModule { }
