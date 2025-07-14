import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { DxFormModule, DxCheckBoxModule, DxTextAreaModule } from 'devextreme-angular';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        DxFormModule,
        DxCheckBoxModule,
        DxTextAreaModule
    ],
    providers: [ ],
    bootstrap: [AppComponent]
})
export class AppModule { }