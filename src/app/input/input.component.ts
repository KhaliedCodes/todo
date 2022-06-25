import { Component, OnInit } from '@angular/core';
import { counter } from '../counter';
import { MyTask } from '../myTask';
import { tasks } from '../tasks';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  
  addTask(taskName: string){
    if(taskName.length !=0){
      const task: MyTask = {id:counter.count, title: taskName, isDone: false}
      tasks.push(task)
      counter.increment()
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
