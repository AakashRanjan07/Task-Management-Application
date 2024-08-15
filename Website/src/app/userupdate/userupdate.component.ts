import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
interface Task {
  id: number;
  title: string;
  startDate: string;
  dueDate: string;
  priority: string;
  assignTo: string;
  status: string;
}
@Component({
  selector: 'app-userupdate',
  templateUrl: './userupdate.component.html',
  styleUrl: './userupdate.component.css',
})
export class UserupdateComponent {
  task: Task = {
    id: 0,
    title: '',
    startDate: '',
    dueDate: '',
    priority: '',
    assignTo: '',
    status: '',
  };

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const taskId = this.route.snapshot.paramMap.get('id');
    if (taskId) {
      this.getTask(parseInt(taskId, 10));
    }
  }

  getTask(id: number): void {
    this.http
      .get<Task>(`https://localhost:7178/api/Values/User${id}`)
      .subscribe(
        (data) => {
          this.task = data;
        },
        (error) => {
          console.error('Error fetching task', error);
        }
      );
  }

  updateTask(): void {
    Swal.fire("Maintenance in Progress");
    this.http
      .put(`https://localhost:7178/api/Values/user${this.task.id}`, this.task)
      .subscribe(
        (response) => {
          this.router.navigate(['/layout/usertask']);
        },
        (error) => {
          console.error('Error updating task', error);
        }
      );
  }
}
