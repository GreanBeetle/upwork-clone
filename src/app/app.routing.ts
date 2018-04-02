import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ListProjectComponent } from './list-project/list-project.component';

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
  }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
