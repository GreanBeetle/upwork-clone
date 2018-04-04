import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ListProjectComponent } from './list-project/list-project.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'addUser',
    component: AddUserComponent
  },
  {
    path: 'listProject',
    component: ListProjectComponent
  },
  {
    path: 'projects/:id',
    component: ProjectDetailComponent
  },
  {
    path: 'addProject',
    component: AddProjectComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
