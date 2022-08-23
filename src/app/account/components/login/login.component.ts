import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myMap = new Map<string, string>([
    ["admin", "admin"]
]);
  
  constructor() { }

  username:string='';
  password:string='';
  result:string='';
 
  ngOnInit(): void {
  }

  // login():any{
  //   if(this.myMap.has(this.username) && this.myMap.get(this.username)==this.password){
  //       this.result='Login Success';
  //   }
  // }

  login(forms:FormsModule):any{
    console.log(forms);
  }

}
