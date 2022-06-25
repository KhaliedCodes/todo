import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MyTask } from '../myTask';
import { tasks } from '../tasks';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task!: MyTask

  constructor() { ;
  }

  ngOnInit(): void {
  }
  check( id: unknown){
    tasks.forEach(e=>{
      if(e.id == (id as number)){
        e.isDone = !e.isDone
      }
    })
    
    

  }
  deleteTask(id:unknown){
    
    tasks.forEach(e=>{
      if(e.id == (id as number)){
        console.log(e.id,(id as number));
        
        const index =tasks.indexOf(e)
        tasks.splice(index,1)
      }
    })

    
  }
  
}
