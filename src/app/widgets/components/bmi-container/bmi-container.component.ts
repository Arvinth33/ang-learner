import { Component, OnInit } from '@angular/core';
import { bmiItemModel } from '../../models/bmiItem.model';
type Nullable<T>= T|null;
@Component({
  selector: 'app-bmi-container',
  templateUrl: './bmi-container.component.html',
  styleUrls: ['./bmi-container.component.css']
})
export class BmiContainerComponent implements OnInit {

  constructor() { }

  bmiData?: bmiItemModel;

  ngOnInit(): void {
  }

  onBmiResultCalculated(data:bmiItemModel){
    console.log('data', data);
    this.bmiData=data;
  }

}
