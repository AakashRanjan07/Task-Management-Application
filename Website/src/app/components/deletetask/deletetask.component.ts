import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-deletetask',
  templateUrl: './deletetask.component.html',
  styleUrl: './deletetask.component.css'
})
export class DeletetaskComponent {
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
    this.http.delete(`https://localhost:7178/api/Values/${this.id}`).subscribe(() => {
      
      this.router.navigate(['/admindash/view-task']);
    }, error => {
      console.error('Error deleting task:', error);
    
    });
  }
}
