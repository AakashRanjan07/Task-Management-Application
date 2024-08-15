// import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';
// import { AuthserviceService } from '../service/authservice.service';
// interface Task {
//   id: number;
//   title: string;
//   startDate: Date;
//   dueDate: Date;
//   priority: string;
//   status: string;
//   completed: boolean;
// }
// @Component({
//   selector: 'app-usertasks',
//   templateUrl: './usertasks.component.html',
//   styleUrl: './usertasks.component.css'
// })
// export class UsertasksComponent {

//   tasks: Task[] = [];

//   constructor(private http: HttpClient, private router: Router,private auth:AuthserviceService) {}

//   ngOnInit(): void {
//     this.getTasks();
//   }
//  email=this.auth.getEmail();
//   getTasks(): void {
//     this.http.get<Task[]>(`https://localhost:7178/api/Values/Userfetch/${this.email}`)
//       .subscribe(
//         data => {
//           this.tasks = data;
//         },
//         error => {
//           console.error('Error fetching tasks', error);
//         }
//       );
//   }

//   updateCompletionStatus(task: Task): void {
//     task.completed = !task.completed;
//     this.http.put(`https://api.example.com/tasks/${task.id}`, task)
//       .subscribe(
//         response => {
        
//           console.log('Task status updated successfully');
//         },
//         error => {
//           console.error(error);
//         }
//       );
// }}


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthserviceService } from '../service/authservice.service';
import { DatePipe } from '@angular/common';

interface Task {
  id: number;
  title: string;
  startDate: Date;
  dueDate: Date;
  priority: string;
  assignTo: string;
  status: string;
  completed: boolean;
  Adminnotify: string;
}

@Component({
  selector: 'app-usertasks',
  templateUrl: './usertasks.component.html',
  styleUrl: './usertasks.component.css',
  providers: [DatePipe] // Add DatePipe here
})
export class UsertasksComponent implements OnInit {
  tasks: Task[] = [];
  email: string = '';
  name: string = '';

  constructor(private http: HttpClient, private router: Router, private auth: AuthserviceService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.email = this.auth.getEmail();
    this.name = this.auth.getUsername();
    console.log("Name: " + this.name);
    console.log("Email: " + this.email);
    this.getTasks();
  }

  getTasks(): void {
    // Dummy data for demonstration
    this.tasks = [
      {
        id: 1,
        title: 'Design the homepage',
        startDate: new Date('2024-08-01T10:00:00'),
        dueDate: new Date('2024-08-15T10:00:00'),
        priority: 'High',
        assignTo: 'User1',
        status: 'InProgress',
        completed: false,
        Adminnotify: ''
      },
      {
        id: 2,
        title: 'Develop the backend',
        startDate: new Date('2024-08-05T09:00:00'),
        dueDate: new Date('2024-08-20T09:00:00'),
        priority: 'Medium',
        assignTo: 'User2',
        status: 'InProgress',
        completed: false,
        Adminnotify: ''
      },
      {
        id: 3,
        title: 'Create unit tests',
        startDate: new Date('2024-08-10T11:00:00'),
        dueDate: new Date('2024-08-25T11:00:00'),
        priority: 'Low',
        assignTo: 'User3',
        status: 'Pending',
        completed: false,
        Adminnotify: ''
      },
      {
        id: 4,
        title: 'Deploy the application',
        startDate: new Date('2024-08-15T08:00:00'),
        dueDate: new Date('2024-08-30T08:00:00'),
        priority: 'High',
        assignTo: 'User4',
        status: 'Pending',
        completed: false,
        Adminnotify: ''
      },
     
      {
        id: 5,
        title: 'Implement the checkout module',
        startDate: new Date('2024-08-18T15:00:00'),
        dueDate: new Date('2024-08-28T15:00:00'),
        priority: 'High',
        assignTo: 'User2',
        status: 'completed',
        completed: false,
        Adminnotify: ''
      },
      {
        id: 6,
        title: 'Implement the filter module',
        startDate: new Date('2024-08-18T15:00:00'),
        dueDate: new Date('2024-08-28T15:00:00'),
        priority: 'Low',
        assignTo: 'User2',
        status: 'Pending',
        completed: false,
        Adminnotify: ''
      },
      {
        id: 7,
        title: 'Implement the payment module',
        startDate: new Date('2024-08-18T15:00:00'),
        dueDate: new Date('2024-08-28T15:00:00'),
        priority: 'Low',
        assignTo: 'User2',
        status: 'Pending',
        completed: false,
        Adminnotify: ''
      },
      {
        id: 8,
        title: 'Implement the search module',
        startDate: new Date('2024-08-12T14:00:00'),
        dueDate: new Date('2024-08-22T14:00:00'),
        priority: 'Medium',
        assignTo: 'User1',
        status: 'InProgress',
        completed: false,
        Adminnotify: ''
      }
    ];
  }

  updateStatus(task: Task): void {
    const previousStatus = task.status;
    const hello = "Task status is " + previousStatus + " by " + this.name;
    const apiUrl = `https://localhost:7178/api/Values/UserHell`;

    const data = { status: hello };

    this.http.post(apiUrl, data).subscribe(
      (response: any) => {
        console.log('Previous status:', previousStatus);
        console.log('Current status:', task.status);

        if ((previousStatus === 'InProgress' && task.status === 'InProgress') ||
            (previousStatus === 'Completed' && task.status === 'Completed')) {
          task.Adminnotify = "The status of the task is " + task.status + " by " + this.name;
          console.log('Admin has been notified with status:', task.status);
        }
      },
      (error: any) => {
        console.error('Error updating task:', error);
      }
    );
  }

  // Method to format date
  formatDate(date: Date): string {
    return this.datePipe.transform(date, 'dd MMMM yyyy') || '';
  }
}
