import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css'],
  providers: [ProjectService]
})
export class AddProjectComponent {

  constructor(private projectService: ProjectService) { }

  submit(
    title: string,
    category: string,
    description: string,
    budget: string) {
      var newProject: Project = new Project(title, category, description, budget);
      this.projectService.addProject(newProject);
    }


}
