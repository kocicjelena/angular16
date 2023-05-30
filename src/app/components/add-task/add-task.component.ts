import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/Task';
import {UiService} from '../../services/ui.service'
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit{
text: string | undefined;
day:string | undefined;
reminder: boolean = false;
showAddTask: boolean | undefined;
subscription: Subscription
@Output() onAddTask: EventEmitter<Task> = new EventEmitter()
constructor(private uiService:UiService){
  this.subscription = this.uiService.onToggle().subscribe((value)=>(this.showAddTask = value))
}
ngOnInit():void {
}
onSubmit(){
  if(!this.text) {
    alert('please add text');
    return;
  }
  const newTask:Task ={
    text: this.text as string,
    day: this.day as string,
    reminder: this.reminder
  };

this.onAddTask.emit(newTask);
  this.text = '',
  this.day = '',
  this.reminder = false
}
}
