import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppBannerComponent } from './components/app-banner/app-banner.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { TimerComponent } from './components/timer/timer.component';
import { BmiCalculatorComponent } from './components/bmi-calculator/bmi-calculator.component';
import { FormsModule } from '@angular/forms';
import { BmiCalculatorHistoryComponent } from './components/bmi-calculator-history/bmi-calculator-history.component';
import { BmiContainerComponent } from './components/bmi-container/bmi-container.component';



@NgModule({
  declarations: [
    AppBannerComponent,
    AppFooterComponent,
    TimerComponent,
    BmiCalculatorComponent,
    BmiCalculatorHistoryComponent,
    BmiContainerComponent
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports: [AppBannerComponent,AppFooterComponent,TimerComponent,BmiCalculatorComponent]
})
export class WidgetsModule { }
