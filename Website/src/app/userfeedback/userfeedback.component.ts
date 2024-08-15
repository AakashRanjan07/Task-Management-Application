import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-userfeedback',
  templateUrl: './userfeedback.component.html',
  styleUrl: './userfeedback.component.css'
})
export class UserfeedbackComponent {
  apiUrl = 'https://localhost:7178/api/Values/AFeedback'; 

  feedback = {
    name: '',
    feedbackText: ''
  };

  constructor(private http: HttpClient) { }

  onSubmit() {
    const formData = {
      Name: this.feedback.name,
      Feedback: this.feedback.feedbackText
    };
    Swal.fire("Feedback is being sent to Admin!"); //reomve this lines and other to uncomment
    
    Swal.fire("Maintenance in Progress");//""
    // this.http.post<any>(this.apiUrl, formData)
    //   .subscribe(
        
    //     response => {
    //       Swal.fire("Feedback is being sent to Admin!");
         
    //     },
    //     error => {
    //       console.error(error);
    //     }
    //   );
  }

  }