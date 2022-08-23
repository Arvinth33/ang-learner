import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmi-calculator',
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.css']
})
export class BmiCalculatorComponent implements OnInit {

  weight:number=0;
  height:number=0;
  bmi:number=0;
  bmiResult:String='underweight';
  constructor() {
   
  }

  ngOnInit(): void {
    
  }

  calculateBmi(): any {
     const hgt=this.height;
     const wgt=this.weight;
     this.bmi= wgt/(hgt*hgt);
     if(this.bmi<18.5){
      this.bmiResult="underweight";
     }else if(this.bmi>18.5 && this.bmi<24.9){
      this.bmiResult="healthy weight";
     }else if(this.bmi>25 && this.bmi<29.9){
      this.bmiResult="overweight";
     }else{
      this.bmiResult="obese";
     }
  }

  clear():any{
    this.height=0;
    this.weight=0;
    this.bmi=0;
    this.bmiResult='underweight';
  }

}
