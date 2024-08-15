// import { Component } from '@angular/core';
// import { DatePipe } from '@angular/common';
// import { CommonModule } from '@angular/common';
// import { TaskModel } from '../components/add-task/task';
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
//   notification: string;
// }
// @Component({
//   selector: 'app-user-dashboard',
//   templateUrl: './user-dashboard.component.html',
//   styleUrl: './user-dashboard.component.css'
// })
// export class UserDashboardComponent {

//   tasks: Task[] = [];
//   formattedDate: string|null;
//   username:string='';
//   ngOnInit(): void {
//     this.getTasks();
//     this.getnotify();
//   }
  

//   constructor(private datePipe: DatePipe, private http:HttpClient, private router: Router, private auth:AuthserviceService) {
//     const today = new Date();
//     this.formattedDate = this.datePipe.transform(today, 'EEEE, d MMMM  yyyy');
//     this.username=auth.getUsername();
// }    
// email=this.auth.getEmail();
// getTasks(): void {
//   this.http.get<Task[]>(`https://localhost:7178/api/Values/Userfetch/${this.email}`)
//     .subscribe(
//       data => {
//         this.tasks = data;
//       },
//       error => {
//         console.error('Error fetching tasks', error);
//       }
//     );
//   }
//   notifications: string[] = [];

//   getnotify(): void {
//     this.http.get<Task[]>(`https://localhost:7178/api/Values/Assigned/?email=${this.email}`)
//       .subscribe(
//         data => {
//           this.notifications = data.map(task => task.notification);
//           console.log(this.notifications);
//         },
//         error => {
//           console.error('Error fetching tasks', error);
//         }
//       );
// }
// }
import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

interface Task {
  id: number;
  title: string;
  startDate: Date;
  dueDate: Date;
  priority: string;
  status: string;
  completed: boolean;
  notification: string;
}

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'] // Corrected to "styleUrls"
})
export class UserDashboardComponent {
  tasks: Task[] = [];
  notifications: string[] = [];
  formattedDate: string | null;
  username: string = 'User'; // Static username for demonstration

  constructor(private datePipe: DatePipe) {
    const today = new Date();
    this.formattedDate = this.datePipe.transform(today, 'EEEE, d MMMM yyyy');
  }

  ngOnInit(): void {
    this.getTasks();
    this.getnotify();
  }

  getTasks(): void {
    this.tasks = [
      {
        id: 1,
        title: 'Design the landing page',
        startDate: new Date(),
        dueDate: new Date('2024-08-15T10:00:00'),
        priority: 'High',
        status: 'Pending',
        completed: false,
        notification: 'Task deadline is approaching!'
      },
      {
        id: 2,
        title: 'Write documentation',
        startDate: new Date(),
        dueDate: new Date('2024-08-20T10:00:00'),
        priority: 'Medium',
        status: 'In Progress',
        completed: false,
        notification: 'Documentation is in progress'
      },
      {
        id: 3,
        title: 'Test the login module',
        startDate: new Date(),
        dueDate: new Date('2024-08-25T10:00:00'),
        priority: 'Low',
        status: 'Completed',
        completed: true,
        notification: 'Login module has been tested'
      },
      {
        id: 4,
        title: 'Test all the modules form starting',
        startDate: new Date(),
        dueDate:new Date('2024-08-30T10:00:00'),
        priority: 'High',
        status: 'Completed',
        completed: true,
        notification: 'All modules has been implemented'
      }
    ];
  }

  getnotify(): void {
    this.notifications = [
      'Task deadline is approaching!',
      'Documentation is in progress',
      'Login module has been tested',
      'All modules has been implemented',
    ];
  }
}
