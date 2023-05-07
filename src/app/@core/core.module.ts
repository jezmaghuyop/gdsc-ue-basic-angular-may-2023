// core module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { NavigationComponentComponent } from './components/navigation-component/navigation-component.component'
// import { FooterComponentComponent } from './components/footer-component/footer-component.component';

import {
    NavigationComponentComponent,
    FooterComponentComponent
} from './components';

@NgModule({
    declarations: [
        NavigationComponentComponent,
        FooterComponentComponent,
    ],
    imports: [
        CommonModule
    ],
    exports: [
        NavigationComponentComponent,
        FooterComponentComponent
    ]
})
export class CoreModule { }
