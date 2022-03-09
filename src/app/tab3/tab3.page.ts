import { Component } from '@angular/core';
import { TaskserviceService } from '../services/taskservice.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public importantTasks: String[];

  constructor(
    private taskserviceService: TaskserviceService
  ) {
    this.importantTasks = this.taskserviceService.getImportantTasks();
  }

  private removeImportant(pos:number){
    this.taskserviceService.removeImportantTask(pos);
    this.importantTasks = this.taskserviceService.getImportantTasks();
  }

  private completeImportant(pos:number){
    this.taskserviceService.completeImportantTask(pos);
    this.importantTasks = this.taskserviceService.getImportantTasks();
  }

  private notImportant(pos:number){
    this.taskserviceService.notImportantTask(pos);
    this.importantTasks = this.taskserviceService.getImportantTasks();
  }

}
