import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import * as FileSaver from 'file-saver';
import { NgModel } from '@angular/forms';
import Swal from 'sweetalert2';
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
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrl: './report.component.css'
})
export class ReportComponent {
  tasks: Task[] = [];
  startDate: string = ''; 
  endDate: string = ''; 
  constructor(private http: HttpClient, private router: Router) {
    this.loadTasks();
  }

  loadTasks(): void {
    this.http.get<Task[]>('https://localhost:7178/api/Values/fetch').subscribe(data => {
      this.tasks = data;
      console.log('Tasks loaded:', this.tasks);
    });
  }

  get filteredTasks(): Task[] {
    if (!this.startDate || !this.endDate) {
      return this.tasks;
    }
    const start = new Date(this.startDate);
    const end = new Date(this.endDate);
    return this.tasks.filter(task => {
      const taskStartDate = new Date(task.startDate);
      return taskStartDate >= start && taskStartDate <= end;
    });
  }

  // downloadReport(): void {
  //   const reportData = this.filteredTasks.map(task => ({
  //     id: task.id,
  //     title: task.title,
  //     startDate: task.startDate,
  //     dueDate: task.dueDate,
  //     priority: task.priority,
  //     assignTo: task.assignTo,
  //     status: task.status,
  //   }));
  //   console.log('Filtered Tasks:', reportData); 

  //   const blob = new Blob([JSON.stringify(reportData, null, 2)], { type: 'application/json' });
  //   FileSaver.saveAs(blob, `TaskReport_${this.startDate}_to_${this.endDate}.json`);
  // }
  downloadReport(): void {
    Swal.fire("Maintenance in Progress");
  }
}
