import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
interface Task {
  id: number;
  title: string;
  startDate: string;
  dueDate: string;
  priority: string;
  assignTo:string,
  status: string;
}
interface User {
  username: string;
  email: string;
}
@Component({
  selector: 'app-updatetask',
  templateUrl: './updatetask.component.html',
  styleUrl: './updatetask.component.css'
})
export class UpdatetaskComponent {
 
    task: Task = {
      id: 0,
      title: '',
      startDate: '',
      dueDate: '',
      priority: '',
      assignTo:'',
      status: ''
    };
  
    constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }
    users: string[] = []; 
    ngOnInit(): void {
      const taskId = this.route.snapshot.paramMap.get('id');
      if (taskId) {
        this.getTask(parseInt(taskId, 10));
      }
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
  
    getTask(id: number): void {
      this.http.get<Task>(`https://localhost:7178/api/Values/${id}`)
        .subscribe(
          data => {
            this.task = data;
          },
          error => {
            console.error('Error fetching task', error);
          }
        );
    }
  
    updateTask(): void {
      this.http.put(`https://localhost:7178/api/Values/${this.task.id}`, this.task)
        .subscribe(
          response => {
            this.router.navigate(['/admindash/view-task'])
          },
          error => {
            console.error('Error updating task', error);
          }
        );
    }
}
