import { Component } from '@angular/core';
import { Amplify } from 'aws-amplify';
import { AuthserviceService } from '../../service/authservice.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { SharedService } from './shared.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrl: './login-user.component.css'
})
export class LoginUserComponent {

  emailaddress: string = '';
    password: string = '';
    constructor(private authservice: AuthserviceService, private router:Router) {
    }
  
    onSignIn(form: NgForm) {
      if (form.valid) {
        // this.authservice.login(this.emailaddress, this.password).then((result:any)=>{
          Swal.fire("Not required; moving directly to the page.");
          this.router.navigate(['layout']);
        
       
       
      }
      else{
        Swal.fire("Not required; moving directly to the page.");
      this.router.navigate(['layout']);


      }
    }
  
    handleClick(){
      this.router.navigate(['admin'])
    }}