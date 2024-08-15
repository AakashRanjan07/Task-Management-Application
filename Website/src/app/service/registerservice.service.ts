import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegisterserviceService {

  private apiUrl = 'https://localhost:7178/api/Values'; 

  constructor(private http: HttpClient) { }

  addUser(userData: any): Observable<any> {
    return this.http.post(this.apiUrl, userData);
  }
}
