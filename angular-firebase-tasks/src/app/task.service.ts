import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { Task } from './models/task.model';

@Injectable({
  providedIn: 'root'
})

export class TaskService {

  tasks: AngularFirestoreCollection<Task>

  constructor(
    private db: AngularFirestore
  ) { 
    this.setTasks();
  }

  private setTasks(): void {
    this.tasks = this.db.collection<Task>('/tasks');
  }
}
