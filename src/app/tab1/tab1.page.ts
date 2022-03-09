import { Component } from '@angular/core';
import { TaskserviceService } from '../services/taskservice.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public tasks: String[];
  public task: String;

  constructor(
    private taskserviceService: TaskserviceService
  ) {
    this.tasks = this.taskserviceService.getTasks();
    this.task = '';
  }

  private add() {
    this.taskserviceService.addTask(this.task);
    this.tasks = this.taskserviceService.getTasks();
    this.task = '';
  }

  private remove(pos:number) {
    this.taskserviceService.removeTask(pos);
    this.tasks = this.taskserviceService.getTasks();//
  }

  private complete(pos:number){
    this.taskserviceService.completeTask(pos);
    this.tasks = this.taskserviceService.getTasks();//
  }

  private important(pos:number){
    this.taskserviceService.importantTask(pos);
    this.tasks = this.taskserviceService.getTasks();
  }
  
}
