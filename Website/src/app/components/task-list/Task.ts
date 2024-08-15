export interface Task {
  id: number;
  title: string;
  status: string;
  dueDate: string | null;
  startDate: string | null;
  assignTo: string;
  priority: string|'High' | 'Medium' | 'Low'; // Ensure priority is of type 'High', 'Medium', or 'Low'
  completed: boolean;
}
