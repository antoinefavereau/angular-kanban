import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task';

@Component({
  standalone: true,
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  @Input() task!: Task;
  @Output() edit = new EventEmitter<Task>();
}
