import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.css']
})
export class SkillsListComponent implements OnInit {
  skills = [
    "Javascript",
    "C#",
    "Java"
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
