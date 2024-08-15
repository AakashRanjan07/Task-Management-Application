import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthserviceService } from '../service/authservice.service';
import { Router } from '@angular/router';
import { SharedService } from '../components/login-user/shared.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrl: './login-admin.component.css',
})
export class LoginAdminComponent {
  emailaddress: string = '';
  password: string = '';
  constructor(
    private authservice: AuthserviceService,
    private router: Router,
    private shared: SharedService
  ) {}

  onSignIn(form: NgForm) {
    if (form.valid) {
      Swal.fire("Not required; moving directly to the page.");
      this.router.navigate(['admindash']);
    } else {
      Swal.fire("Not required; moving directly to the page.");
      this.router.navigate(['admindash']);
    }
  }
  handleClick() {
    this.router.navigate(['layout']);
  }
  handleClickUser() {
    this.router.navigate(['login']);
  }
}
