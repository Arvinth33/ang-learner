import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  currentTime:string="";

  constructor() { 
    this.currentTime=(new Date()).toISOString();
  }

  ngOnInit(): void {
  }

}
