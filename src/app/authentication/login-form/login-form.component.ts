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

  @ViewChild('usernameInput') username: any;

  usernameData: any;


  loginUser(loginForm) {
    if (loginForm.valid) {
      console.log(loginForm.value);
      // console.log(loginForm.value.username);
      this.router.navigateByUrl('/home').then(() => {
        console.log('Username is:::', this.username.value)
        this.usernameData = this.username.value;
      })
    }
    else {
      window.alert("Invalid Username & Password");
    }
  }

}
