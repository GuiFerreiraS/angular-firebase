import { TaskService } from './../task.service';
import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.scss']
})
export class TaskDialogComponent implements OnInit {

  task: Task = {title: ''}

  constructor(
    private dialogRef: MatDialogRef<TaskDialogComponent>,
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
  }

  onSave(): void {
    this.taskService.create(this.task)
      .then(() => {
        console.log('Task created.');
        this.dialogRef.close();
      });
  }

}
