// import { Component } from '@angular/core';
// import { Feedback } from '../feedback';
// import { HttpClient } from '@angular/common/http';
// import { ufeedback } from './ufeedback';
// import { task } from '../../userfeedback/Task';
// @Component({
//   selector: 'app-dashboard',
//   templateUrl: './dashboard.component.html',
//   styleUrl: './dashboard.component.css',
// })
// export class DashboardComponent {

//   apiUrl = 'https://localhost:7178/api/Values/Ufeedback';
//   feedbackList: ufeedback[] = [];
  
//   constructor(private http: HttpClient) {

//   }

//   ngOnInit() {
//     this.fetchFeedback();
//   }

//   fetchFeedback() {
//     this.http.get<ufeedback[]>(this.apiUrl).subscribe(
//       (data) => {
//         this.feedbackList = data;
//       },
//       (error) => {
//         console.error(error);
//       }
//     );
//   }
// }

import { Component } from '@angular/core';
import { ufeedback } from './ufeedback'; // Ensure this path is correct based on your project structure

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'], // Updated to styleUrls instead of styleUrl
})
export class DashboardComponent {

  feedbackList: ufeedback[] = [];

  // Define your dummy data
  dummyFeedbackData: ufeedback[] = [
    {
      id: 1,
      userId: 'user1',
      feedbackText: 'Great service! Very satisfied with the product.',
      date: new Date('2024-08-01T10:00:00Z')
    },
    {
      id: 2,
      userId: 'user2',
      feedbackText: 'The delivery was delayed, but the customer service was helpful.',
      date: new Date('2024-08-02T12:00:00Z')
    },
    {
      id: 3,
      userId: 'user3',
      feedbackText: 'Excellent quality, will definitely recommend it to others.',
      date: new Date('2024-08-03T14:00:00Z')
    },
    {
      id: 4,
      userId: 'user4',
      feedbackText: 'The product didn’t meet my expectations. It’s not as described.',
      date: new Date('2024-08-04T16:00:00Z')
    },
    {
      id: 5,
      userId: 'user5',
      feedbackText: 'Overall good experience. I appreciate the quick responses to my queries.',
      date: new Date('2024-08-05T18:00:00Z')
    },
    {
      id: 6,
      userId: 'user6',
      feedbackText: 'The product is fantastic! Exceeded my expectations in every way.',
      date: new Date('2024-08-06T10:30:00+05:30')
    }
    
  ];

  constructor() {
    // Directly assigning dummy data to feedbackList
    this.feedbackList = this.dummyFeedbackData;
  }

  ngOnInit() {
    // You can remove fetchFeedback() method since it's not needed
  }
}
