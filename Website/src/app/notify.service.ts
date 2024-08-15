import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Notify } from './userassignedtasks/Notify';
@Injectable({
  providedIn: 'root'
})
export class NotifyService {
 private apiUrl = 'https://localhost:7178/api/Values/Notify'; 

  constructor(private http: HttpClient) {}

  storeNotifyStatusChange(notify: Notify, message: string): Observable<any> {
    const url = `${this.apiUrl}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const payload = { notifyId: notify.id, message: message, timestamp: new Date() };
    return this.http.post(url, payload, { headers });
  }
}
