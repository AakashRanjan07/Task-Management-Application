import { Component } from '@angular/core';
import { AuthserviceService } from '../service/authservice.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrl: './admindashboard.component.css'
})
export class AdmindashboardComponent {
  Admin:string='Admin';
//   constructor(private auth:AuthserviceService){
// this.Admin=this.auth.getUsername();
//   }
    status: boolean = false;
    addToggle() {
      this.status = !this.status;
    }
  
}
