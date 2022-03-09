import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskserviceService {

  public tasks: String[] = [];
  private completedTasks: String[] = [];
  private importantTasks: String[] = [];

  //debe estar inicializado para poder hacer push
  constructor() { 
    this.tasks.push("Tarea1","Tarea2");
    this.completedTasks.push("Tarea3","Tarea4");
    this.importantTasks.push("Tarea5","Tarea6");
    //this.tasks = ["Tarea1","Tarea3"];
    //this.completedTasks= ["Tarea2","Tarea4"];
  }

  //Tab1: Pendientes
  public addTask(task:String){
    this.tasks.push(task);
    console.log(task);
  }

  public removeTask(pos:number){
    this.tasks.splice(pos,1);
  }

  public getTasks(){
    return this.tasks;
    //console.log(this.tasks);
  }

  public completeTask(pos:number){
    this.completedTasks.push(this.tasks[pos]);
    this.removeTask(pos);
  }

  public importantTask(pos:number){
    this.importantTasks.push(this.tasks[pos]);
    this.removeTask(pos);
  }

  //Tab2: Completadas
  public getCompletedTasks(){
    return this.completedTasks;
  }

  public removeCompleteTask(pos:number){
    this.completedTasks.splice(pos, 1);
  }
  public unCompleteTask(pos:number){
    this.tasks.push(this.completedTasks[pos]);
    this.removeCompleteTask(pos);
  }

  //Tab3: Importantes
  public getImportantTasks(){
    return this.importantTasks;
  }

  public removeImportantTask(pos:number){
    this.importantTasks.splice(pos, 1);
  }

  public completeImportantTask(pos:number){
    this.completedTasks.push(this.importantTasks[pos]);
    this.removeImportantTask(pos);
  }

  public notImportantTask(pos:number){
    this.tasks.push(this.importantTasks[pos]);
    this.removeImportantTask(pos);
  }
}
