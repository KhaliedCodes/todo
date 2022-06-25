import { Component, OnInit } from '@angular/core';
import { MyTask } from '../myTask';
import { tasks } from '../tasks';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {
  myTasks: MyTask[] = tasks

  constructor() { }

  ngOnInit(): void {
  }

}
