import { Component, OnInit,Input, OnChanges, SimpleChanges } from '@angular/core';
import { bmiItemModel } from '../../models/bmiItem.model';

@Component({
  selector: 'app-bmi-calculator-history',
  templateUrl: './bmi-calculator-history.component.html',
  styleUrls: ['./bmi-calculator-history.component.css']
})
export class BmiCalculatorHistoryComponent implements OnInit, OnChanges {

  constructor() { }
  @Input()
  bmiResultData=new bmiItemModel(0,0,0);

  bmiResultHistory:Array<any>=[];

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    // let currVal:any =changes['bmiResultData']['currentValue'];
    this.bmiResultHistory.push(this.bmiResultData);
    
  }
  }
