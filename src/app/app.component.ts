import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'relistenLecture';
  name: string = "Emily";
  age: number = 5;
  author = {
    name:"Emily Sampson",
    title:"Kindergartener",
    
  }
}
