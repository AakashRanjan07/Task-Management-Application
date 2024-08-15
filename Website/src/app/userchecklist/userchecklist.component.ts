import { Component ,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-userchecklist',
  templateUrl: './userchecklist.component.html',
  styleUrl: './userchecklist.component.css'
})
export class UserchecklistComponent implements OnInit {
  newItemName: string = '';
  items: { checklist: string, completed: boolean }[] = [];

  ngOnInit(): void {
    Swal.fire("Maintenance is Completed");
    this.loadItemsFromStorage();
  }

  addItem(): void {
    if (this.newItemName.trim() !== '') {
      this.items.push({ checklist: this.newItemName, completed: false });
      this.saveItemsToStorage();
      this.newItemName = '';
    }
  }

  toggleComplete(index: number): void {
    this.items[index].completed = !this.items[index].completed;
    this.saveItemsToStorage();
  }

  deleteItem(index: number): void {
    this.items.splice(index, 1);
    this.saveItemsToStorage();
  }

  private loadItemsFromStorage(): void {
    try {
      const storedItems = localStorage.getItem('todoItems');
      if (storedItems) {
        this.items = JSON.parse(storedItems);
      }
    } catch (error) {
      console.error('Error accessing localStorage:', error);
    }
  }

  private saveItemsToStorage(): void {
    try {
      localStorage.setItem('todoItems', JSON.stringify(this.items));
    } catch (error) {
      console.error('Error accessing localStorage:', error);
    }
  }
}