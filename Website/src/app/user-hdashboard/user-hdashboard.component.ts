import { Component } from '@angular/core';
import { AuthserviceService } from '../service/authservice.service';

@Component({
  selector: 'app-user-hdashboard',
  templateUrl: './user-hdashboard.component.html',
  styleUrl: './user-hdashboard.component.css'
})
export class UserHdashboardComponent {
  User:string='User';
// constructor(private auth:AuthserviceService){
//   this.User=this.auth.getUsername();
// }
}
