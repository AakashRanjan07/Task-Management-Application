import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-userdelete',
  templateUrl: './userdelete.component.html',
  styleUrl: './userdelete.component.css'
})
export class UserdeleteComponent {
  id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!; 
  }

  deleteTask() {
    Swal.fire("Maintenance in Progress");
    this.http.delete(`https://localhost:7178/api/Values/user${this.id}`).subscribe(() => {
      
      this.router.navigate(['/layout/usertask']);
    }, error => {
      console.error('Error deleting task:', error);
    
    });
  }
}
