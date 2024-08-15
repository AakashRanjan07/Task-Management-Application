import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TaskModel } from '../components/add-task/task';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsertaskserviceService {


  private apiUrl = 'https://localhost:7178/api/Values/Userfetch';

  constructor(private http: HttpClient) {}

  addTask(task: TaskModel): Observable<TaskModel> {
    return this.http.post<TaskModel>(this.apiUrl, task);
  }
}
