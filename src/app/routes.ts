import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AddRestoComponent } from './pages/add-resto/add-resto.component';
import { UpdateRestoComponent } from './pages/update-resto/update-resto.component';
import { ListRestoComponent } from './pages/list-resto/list-resto.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'add',
    component: AddRestoComponent,
  },
  {
    path: 'update',
    component: UpdateRestoComponent,
  },
  {
    path: 'list',
    component: ListRestoComponent,
  },
];
