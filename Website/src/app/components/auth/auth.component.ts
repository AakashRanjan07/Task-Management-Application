import { Component } from '@angular/core';
import { Amplify } from 'aws-amplify';
import { AuthserviceService } from '../../service/authservice.service';
Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: 'ap-south-1_4TFKqs5fC',
      userPoolClientId: '7pf6h2ggglcdrj65mjmji5kb5n'
    }
  }
});
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  constructor(private service:AuthserviceService){}

  formFields = {
    signUp: {
      name: {
        order: 1
      },
      email: {
        order: 2
      },
      password: {
        order: 3
      },
      confirm_password: {
        order: 4
      }
    },
  };
  // async ngOnInit(){
  //   let user=await this.service.getCurrentUser();
  //   console.log(user);
  // }
}
