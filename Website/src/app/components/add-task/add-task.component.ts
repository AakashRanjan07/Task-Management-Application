import { Component } from '@angular/core';
import { TaskModel } from './task';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TaskService } from '../../service/task.service';
import { title } from 'process';
import Swal from 'sweetalert2';
interface User {
  username: string;
  email: string;
}
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
 task: TaskModel = {
    title: '',
    startDate: '',
    dueDate: '',
    priority: '',
    assignTo: '',
    status: 'Pending',
  notification:'',
  };

  constructor(private taskService: TaskService,private http: HttpClient,private router:Router) {
  
  }

  users: string[] = []; 

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    const apiUrl = 'https://localhost:7178/api/Values/Username';
    

    this.http.get<User[]>(apiUrl).subscribe(
      users => {
        this.users = users.map(user => user.username);
    
      },
      error => {
        console.error('Error fetching users: ', error);
      }
    );
  }
  
  // onSubmit() {
  //   this.task.notification = `Task: ${this.task.title}`;
  //   this.taskService.addTask(this.task).subscribe(() => {
  //   this.router.navigate(['/admindash/view-task']);
  //   });
  // }
   onSubmit() {
    Swal.fire("Maintenance in Progress");
   }

}