import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
    public emailAddress: string = '';
 
    setEmailAddress(email: any) {
      this.emailAddress = email;
    }
    
    getEmailAddress(): string {
      return this.emailAddress;
    }}