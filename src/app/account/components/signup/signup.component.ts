import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  username:string='';
  password:string='';
  email:string='';
  result:string='';

  ngOnInit(): void {
  }

  signup():any{
    
  }

}
