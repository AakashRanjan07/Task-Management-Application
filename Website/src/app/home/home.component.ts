import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  showAdminLogin: boolean = false;
  showAdminSignup: boolean = false;
  showUserLogin: boolean = false;
  showUserSignup: boolean = false;

  toggleAdminLogin() {
    this.showAdminLogin = !this.showAdminLogin;
    this.showAdminSignup = false;
    this.showUserLogin = false;
    this.showUserSignup = false;
  }

  toggleAdminSignup() {
    this.showAdminSignup = !this.showAdminSignup;
    this.showAdminLogin = false;
    this.showUserLogin = false;
    this.showUserSignup = false;
  }

  toggleUserLogin() {
    this.showUserLogin = !this.showUserLogin;
    this.showAdminLogin = false;
    this.showAdminSignup = false;
    this.showUserSignup = false;
  }

  toggleUserSignup() {
    this.showUserSignup = !this.showUserSignup;
    this.showAdminLogin = false;
    this.showAdminSignup = false;
    this.showUserLogin = false;
  }
}
