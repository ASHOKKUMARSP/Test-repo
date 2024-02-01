import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  loginObj: any

  constructor(private router: Router) {
    this.loginObj = {
      username: '',
      password: ''
    }
  }

  ngOnInit(): void {
  }

  login() {
    if (this.loginObj.username === 'admin' && this.loginObj.password === 'admin') {
      sessionStorage.setItem('loginId', this.loginObj.username);
      this.router.navigateByUrl('dashboard');
    } else {
      alert('Invalid Credentials');
    }
  }

}
