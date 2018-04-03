import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { Router } from '@angular/router';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.css'],
  providers: [ProjectService]
})
export class ListProjectComponent implements OnInit {

  projects: Project[];

  constructor(private router: Router, private projectService: ProjectService) {}

  ngOnInit(){
    this.projects = this.projectService.getProjects(); 
  }

  projectDetail(clicked: Project) {
    this.router.navigate(['projects', clicked.id]);
  }
}
