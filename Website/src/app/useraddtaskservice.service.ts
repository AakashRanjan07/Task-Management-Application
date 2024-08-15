import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TaskDone } from './useraddtask/TaskDone';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UseraddtaskserviceService {

  private apiUrl = 'https://localhost:7178/api/Values/Hello';

  constructor(private http: HttpClient) {}
  private getApiUrl(email: string): string {
    return `${this.apiUrl}/${email}`;
  }
  addTask(task: TaskDone, email: string): Observable<TaskDone> {
    const apiUrlWithEmail = this.getApiUrl(email);
    return this.http.post<TaskDone>(apiUrlWithEmail, task);
  }
}
