// import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';
// import { TaskModel } from '../components/add-task/task';
// import { TaskDone } from '../useraddtask/TaskDone';
// import { Input } from '@angular/core';
// import { AuthserviceService } from '../service/authservice.service';
// interface Task {
//   notification: string;
// }
// @Component({
//   selector: 'app-usernotification',
//   templateUrl: './usernotification.component.html',
//   styleUrl: './usernotification.component.css'
// })


// export class UsernotificationComponent {


//   notifications: string[] = [];

//   constructor(private http: HttpClient, private router: Router,private auth:AuthserviceService) {}

//   ngOnInit(): void {
//     this.getTasks();
//   }
//   email=this.auth.getEmail();

//   getTasks(): void {
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
//   }}

import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../service/authservice.service';

interface Task {
  notification: string;
}

@Component({
  selector: 'app-usernotification',
  templateUrl: './usernotification.component.html',
  styleUrls: ['./usernotification.component.css']
})
export class UsernotificationComponent implements OnInit {

  notifications: string[] = [];

  // Dummy data
  private dummyTasks: Task[] = [
    { notification: 'Task deadline is approaching!' },
    { notification: 'Documentation is in progress' },
    { notification: 'Login module has been tested' },
    { notification: 'All modules have been implemented' },
    { notification: 'Upcoming review meeting on Friday' },
    { notification: 'Update project documentation by end of day' },
    { notification: 'Prepare slides for next week’s presentation' },
    { notification: 'Team meeting scheduled for tomorrow morning' },
  ];

  constructor(private auth: AuthserviceService) {}

  ngOnInit(): void {
    this.getNotifications();
  }

  email = this.auth.getEmail();

  getNotifications(): void {
    // Replace API call with dummy data
    this.notifications = this.dummyTasks.map(task => task.notification);
    console.log(this.notifications);
  }
}
