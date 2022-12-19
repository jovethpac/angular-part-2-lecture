import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.css']
})
export class SkillsListComponent implements OnInit {
  languages: string[] = [
    "Javascript",
    "C#",
    "Java",
    "Python",
    "Typescript"
  ]
  
  //creating a method/function without using keyword function
  // clickEventFunction() {
  //   console.log("You clicked the thing!");
  // }

  //function that removes a skill
removeSkill(){
this.languages.pop();
//use this if you are referencing a variable within the same typescript file
}

  constructor() { }

  ngOnInit(): void {
  }

}
