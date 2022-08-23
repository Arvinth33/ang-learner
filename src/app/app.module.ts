import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OutputComponent } from './output/output.component';
import { BmiCalculatorComponent } from './widgets/components/bmi-calculator/bmi-calculator.component';
import { WidgetsModule } from './widgets/widgets.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,WidgetsModule
  ],
  providers: [],
  bootstrap: [AppComponent,BmiCalculatorComponent]
})
export class AppModule { }
