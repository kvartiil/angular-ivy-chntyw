import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  tasklist:string[]=[];
  public AddTask(task) {
    this.tasklist.push(task)
  }
  public DeleteTask(index) {
    this.tasklist.splice(index,1);
  }
}
