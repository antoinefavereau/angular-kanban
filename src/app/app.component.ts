import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Task } from './task/task';
import { TaskComponent } from './task/task.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-kanban';
  todo: Task[] = [
    {
      title: 'Task 1',
      description: 'Description of the task 1',
    },
    {
      title: 'Task 2',
      description: 'Description of the task 2',
    },
    {
      title: 'Task 3',
      description: 'Description of the task 3',
    },
  ];
  doing: Task[] = [
    {
      title: 'Task 4',
      description: 'Description of the task 4',
    },
    {
      title: 'Task 5',
      description: 'Description of the task 5',
    },
  ];
  done: Task[] = [
    {
      title: 'Task 6',
      description: 'Description of the task 6',
    },
  ];
}
