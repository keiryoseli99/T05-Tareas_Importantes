import { Component } from '@angular/core';
import { TaskserviceService } from '../services/taskservice.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public completedTasks: String[];

  constructor(
    private taskserviceService: TaskserviceService
  ) {
    this.completedTasks = this.taskserviceService.getCompletedTasks();
  }

  private removeComplete(pos:number) {
    this.taskserviceService.removeCompleteTask(pos);
    this.completedTasks = this.taskserviceService.getCompletedTasks();
  }

  private unComplete(pos:number){
    this.taskserviceService.unCompleteTask(pos);
    this.completedTasks = this.taskserviceService.getCompletedTasks();
  }

}
