import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { Router } from '@angular/router';
import { ProjectService } from '../project.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.css'],
  providers: [ProjectService]
})
export class ListProjectComponent implements OnInit {

  projects: FirebaseListObservable<any[]>;

  constructor(private router: Router, private projectService: ProjectService) {}

  ngOnInit(){
    this.projects = this.projectService.getProjects();
  }

  projectDetail(clicked: Project) {
    this.router.navigate(['projects', clicked.$key]); 
  }
}
