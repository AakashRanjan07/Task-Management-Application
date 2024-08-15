import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthserviceService } from '../service/authservice.service';
import { Router } from '@angular/router';
import { RegisterserviceService } from '../service/registerservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  username:any
  password:any
  email:any

  constructor(private fb: FormBuilder, private authService: AuthserviceService, private router:Router,private reservice:RegisterserviceService) {
    
  }
 

  onSubmit(): void {
   
      console.log(this.username,this.password,this.email)
      // this.authService.signUp(this.username, this.password, this.email).then(
      //   user => {
      //     const userData = {
      //       username: this.username,
      //       password: this.password,
      //       email: this.email
      //     };
      //     this.reservice.addUser(userData).subscribe(response => {
      //       console.log('User details stored in database:', response);
      //       this.router.navigate(['confirmationCode'], {
      //         state: {
      //           email: this.email
      //         }
      //       });
      //     }, error => {
      //       console.error('Error storing user details:', error);
      //     });
      //   }
      // ).catch(error => {
      //   console.error('Signup error:', error);
      // });
           Swal.fire("Not required; moving directly to the page.");
           this.router.navigate(['layout'])


    }
  handleClick(){
    // Swal.fire("Not required; moving directly to the page.");
    this.router.navigate(['login'])
}
 
}
