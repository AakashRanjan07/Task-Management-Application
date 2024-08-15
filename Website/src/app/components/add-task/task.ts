// export interface Task {
//      id: number;
//      title: string;
//      status: string;
//      dueDate: string | null;
//      startDate: string | null;
//      assignTo: string;
//      priority: string;


// }

export interface TaskModel {
     id?: number; // Optional as it will be generated by the server
     title: string;
     startDate: string; // Assuming date format is YYYY-MM-DD
     dueDate: string; // Assuming date format is YYYY-MM-DD
     priority: string;
     assignTo: string;
     status: string;
     notification:string;
   }
   
