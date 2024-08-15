import { Injectable } from '@angular/core';
import {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserPool,
  CognitoUserAttribute
} from "amazon-cognito-identity-js";
import Swal from 'sweetalert2';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  userPool: any;
  cognitoUser: any;
  username: string = "";

  UserName:any
  constructor(private router: Router) {
    this.userPool = new CognitoUserPool( {
      UserPoolId: "ap-south-1_bLURhJHu9",
      ClientId: "42qpg4v7fk0s93v5tgpkkhjggo",
    });
   }

  login(emailaddress: any, password: any) {
    let authenticationDetails = new AuthenticationDetails({
      Username: emailaddress,
      Password: password,
    });

    let poolData = {
      UserPoolId: "ap-south-1_bLURhJHu9",
      ClientId: "42qpg4v7fk0s93v5tgpkkhjggo",
    };

    this.username = emailaddress;
    this.userPool = new CognitoUserPool(poolData);
    let userData = { Username: emailaddress, Pool: this.userPool };
    this.cognitoUser = new CognitoUser(userData);
    return new Promise((resolve, reject) => {
    this.cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: (result: any) => {
        sessionStorage.setItem("email", this.username);
        const name = result.idToken.payload.name;
        const email = result.idToken.payload.email;
        sessionStorage.setItem("username", name);
        console.log("Success Results : ", name, email);
        // sessionStorage.setItem("email",this.username)
        // console.log("Success Results : ", result.idToken.payload.name,result.idToken.payload.email);
        resolve(result); 
      },
      onFailure: (error: any) => {
        Swal.fire("Wrong Username and Password");
        console.log("error", error);
      },
      
      newPasswordRequired: () => {
        this.router.navigate([""]);
      },
    });
  });
  }
  getUsername(): string {
    return sessionStorage.getItem("username") || "";
  }
  getEmail(): string {
    return sessionStorage.getItem("email") || "";
  }

  changePassword(
    oldPassword: string,
    newPassword: string,
    confirmPassword: string
  ) {
    if (newPassword === confirmPassword) {
      this.cognitoUser.completeNewPasswordChallenge(
        this.username,
        newPassword,
        {},
        {
          onSuccess: () => {
            console.log("Reset Success");
            this.router.navigate(["login"]);
          },
          onFailure: () => {
            console.log("Reset Fail");
          },
        }
      );
    } else {
      console.log("Password didn't Match");
    }
  }

  logOut() {
    let poolData = {
      UserPoolId: "ap-south-1_bLURhJHu9",
      ClientId: "42qpg4v7fk0s93v5tgpkkhjggo",
    };
    this.userPool = new CognitoUserPool(poolData);
    this.cognitoUser = this.userPool.getCurrentUser();
    if (this.cognitoUser) {
      this.cognitoUser.signOut();
      this.router.navigate(['login']);
    }
  }



  signUp(username: string, password: string, email: string): Promise<any> {

    this.UserName = username
    const attributeList = [
      new CognitoUserAttribute({
        Name: 'name',
        Value: username
      }),
      
      
      
    ];

    return new Promise((resolve, reject) => {
      this.userPool.signUp(email, password, attributeList, null, (err:any, result:any) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(result.user);
      });
    });
  }


  confirmUser(username: string, confirmationCode: string): Promise<any> {
    const userData = {
      Username: username,
      Pool: this.userPool
    };

    const cognitoUser = new CognitoUser(userData);

    return new Promise((resolve, reject) => {
      cognitoUser.confirmRegistration(confirmationCode, true, (err, result) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(result);
      });
    });
  }


}
