import { Component } from '@angular/core';
import { AuthserviceService } from '../service/authservice.service';
import { Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-confirm-code',
  templateUrl: './confirm-code.component.html',
  styleUrl: './confirm-code.component.css'
})
export class ConfirmCodeComponent {
  username:any
  confirmationCode:any

  @Input() email:any = history.state.email

  constructor(private authService: AuthserviceService, private router:Router) {}
  onSubmit(): void {
     
      // // this.authService.confirmUser(this.email, this.confirmationCode).then(
      //   result => {
      //    this.router.navigate(['login'])
      //   },
      //   err => {
         
      //   }
      // );
    }
}
