import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.css']
})
export class ListProjectComponent {
  projects: Model[] = [
    new Project("Personal Website", "Web Development", "I run a foodcart and need a website for marketing purposes", "$3000", 1),
    new Project("Database", "Back End", "Need to construct database for contracting firm", "$8500", 2),
    new Project("Web Application", "Web Development", "Local NGO needs web portal", "$15,000", 3),
  ];
}
