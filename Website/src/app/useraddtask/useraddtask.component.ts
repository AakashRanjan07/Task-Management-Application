import { Component } from '@angular/core';
import { TaskDone } from './TaskDone';
import { UseraddtaskserviceService } from '../useraddtaskservice.service';
import { Router } from '@angular/router';
import { SharedService } from '../components/login-user/shared.service';
import { AuthserviceService } from '../service/authservice.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-useraddtask',
  templateUrl: './useraddtask.component.html',
  styleUrl: './useraddtask.component.css'
})
export class UseraddtaskComponent {
  
  task: TaskDone = {
    title: '',
    startDate: '',
    dueDate: '',
    priority: '',
    status: '',
  };
   email: string = 'user@example.com';
  
  constructor(private taskService: UseraddtaskserviceService ,private router:Router,private auth:AuthserviceService) {
    this.email=this.auth.getEmail();
    
  }
  onSubmit() {
    Swal.fire("Maintenance in Progress");
    
    this.taskService.addTask(this.task,this.email).subscribe(() => {
      this.router.navigate(['/layout/usertask']);
    });
  }

}
