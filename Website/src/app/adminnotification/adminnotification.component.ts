// import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';
// import { AuthserviceService } from '../service/authservice.service';
// interface Task {
//   status: string;
// }
// @Component({
//   selector: 'app-adminnotification',
//   templateUrl: './adminnotification.component.html',
//   styleUrl: './adminnotification.component.css'
// })
// export class AdminnotificationComponent {

//   status: string[] = [];

//   constructor(private http: HttpClient, private router: Router,private auth:AuthserviceService) {}

//   ngOnInit(): void {
//     this.getTasks();
//   }
//   email=this.auth.getEmail();

//   getTasks(): void {
//     this.http.get<Task[]>('https://localhost:7178/api/Values/Notify')
//       .subscribe(
//         data => {
//           this.status = data.map(task => task.status);
//           console.log(this.status);
//         },
//         error => {
//           console.error('Error fetching tasks', error);
//         }
//       );
//   }
// }
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../service/authservice.service';

interface Task {
  id: number;
  title: string;
  status: string;
  assignedTo: string;
}

@Component({
  selector: 'app-adminnotification',
  templateUrl: './adminnotification.component.html',
  styleUrls: ['./adminnotification.component.css']
})
export class AdminnotificationComponent {

  notifications: string[] = [];

  constructor(private router: Router, private auth: AuthserviceService) {}

  ngOnInit(): void {
    this.getNotifications();
  }

  getNotifications(): void {
    // Dummy data with task details
    const tasks: Task[] = [
      { id: 1, title: 'Design the landing page', status: 'InProgress', assignedTo: 'user1' },
      { id: 2, title: 'Write documentation', status: 'Completed', assignedTo: 'user2' },
      { id: 3, title: 'Test the login module', status: 'Pending', assignedTo: 'user3' },
      { id: 4, title: 'Implement user authentication', status: 'InProgress', assignedTo: 'user4' }
    ];

    // Format the notifications
    this.notifications = tasks.map(task => 
      `Task "${task.title}" is ${task.status} by ${task.assignedTo}`
    );

    console.log(this.notifications);
  }
}
