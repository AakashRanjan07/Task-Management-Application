// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';
// interface Task {
//   id: number;
//   title: string;
//   startDate: Date;
//   dueDate: Date;
//   priority: string;
//   assignTo: string;
//   status: string;
//   completed: boolean;
// }
// @Component({
//   selector: 'app-task-list',
//   templateUrl: './task-list.component.html',
//   styleUrl: './task-list.component.css'
// })
// export class TaskListComponent {
//   tasks: Task[] = [];

//   constructor(private http: HttpClient, private router: Router) {}

//   ngOnInit(): void {
//     this.getTasks();
//   }

//   getTasks(): void {
//     this.http.get<Task[]>('https://localhost:7178/api/Values/fetch')
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
//           console.error('Error updating task status', error);
//         }
//       );
//   }

// }



import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
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
}

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  providers: [DatePipe] // Provide DatePipe in the component
})
export class TaskListComponent {
  tasks: Task[] = [];
  formattedStartDate: string[] = [];
  formattedDueDate: string[] = [];

  constructor(private http: HttpClient, private router: Router, private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    // Dummy data
    this.tasks = [
      {
        id: 1,
        title: 'Design the homepage',
        startDate: new Date('2024-08-01T09:00:00'),
        dueDate: new Date('2024-08-07T17:00:00'),
        priority: 'High',
        assignTo: 'user1',
        status: 'InProgress',
        completed: false
      },
      {
        id: 2,
        title: 'Develop the API',
        startDate: new Date('2024-08-02T10:00:00'),
        dueDate: new Date('2024-08-10T16:00:00'),
        priority: 'Medium',
        assignTo: 'user2',
        status: 'Pending',
        completed: false
      },
      {
        id: 3,
        title: 'Write unit tests',
        startDate: new Date('2024-08-03T08:00:00'),
        dueDate: new Date('2024-08-09T15:00:00'),
        priority: 'Low',
        assignTo: 'user3',
        status: 'Completed',
        completed: true
      },
      {
        id: 4,
        title: 'Deploy the application',
        startDate: new Date('2024-08-04T11:00:00'),
        dueDate: new Date('2024-08-12T14:00:00'),
        priority: 'High',
        assignTo: 'user4',
        status: 'InProgress',
        completed: false
      },
      {
        id: 5,
        title: 'Fix bugs in login module',
        startDate: new Date('2024-08-05T09:30:00'),
        dueDate: new Date('2024-08-11T12:00:00'),
        priority: 'Medium',
        assignTo: 'user5',
        status: 'Pending',
        completed: false
      },
      {
        id: 6,
        title: 'Update documentation',
        startDate: new Date('2024-08-06T13:00:00'),
        dueDate: new Date('2024-08-13T18:00:00'),
        priority: 'Low',
        assignTo: 'user6',
        status: 'Completed',
        completed: true
      },
      {
        id: 7,
        title: 'Refactor codebase',
        startDate: new Date('2024-08-07T10:00:00'),
        dueDate: new Date('2024-08-14T17:00:00'),
        priority: 'High',
        assignTo: 'user7',
        status: 'InProgress',
        completed: false
      },
      {
        id: 8,
        title: 'Conduct user testing',
        startDate: new Date('2024-08-08T11:00:00'),
        dueDate: new Date('2024-08-15T15:00:00'),
        priority: 'Medium',
        assignTo: 'user8',
        status: 'Pending',
        completed: false
      }
    ];

    // Format dates using DatePipe and handle null values
    this.formattedStartDate = this.tasks.map(task => 
      this.datePipe.transform(task.startDate, 'short') || 'N/A'
    );
    this.formattedDueDate = this.tasks.map(task => 
      this.datePipe.transform(task.dueDate, 'short') || 'N/A'
    );
  }

  updateCompletionStatus(task: Task): void {
    task.completed = !task.completed;
    console.log('Task status updated locally:', task);
  }
}




