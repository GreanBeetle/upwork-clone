import { Injectable } from '@angular/core';
import { Project } from './models/project.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ProjectService {
  projects: FirebaseListObservable<any[]>;

  constructor (
    private database: AngularFireDatabase
    ) {
      this.projects = database.list('projects');
    }

  getProjects() {
    return this.projects;
  }

  addProject(newProject: Project) {
    this.projects.push(newProject);
  }

  getProjectById(id: string) {
    return this.database.object('projects/' + id);
  }

  deleteMaster(localProject) {
    var fbProject = this.getProjectById(localProject.$key);
    fbProject.remove();
  }

}
