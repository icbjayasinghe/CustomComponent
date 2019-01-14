import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputDirective } from './component/input.directive';
import { NewDirectiveDirective } from './directive/new-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    InputDirective,
    NewDirectiveDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
