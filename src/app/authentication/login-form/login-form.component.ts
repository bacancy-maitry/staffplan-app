import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  @ViewChild('loginData') loginData : any;

  loginUser(){
    if(this.loginData.valid){
      console.log(this.loginData.value);
      this.router.navigateByUrl('/home');
    }
    else
    {
      window.alert("Invalid Username & Password");
    }
  }

}
