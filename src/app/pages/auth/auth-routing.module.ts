import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './containers/auth-page/auth-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';

const routes: Routes = [
  {
    path: '', component: AuthPageComponent, children: [
      { path: 'auth/login', component: LoginFormComponent },
      { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
      { path: 'auth/signup', component: SignupFormComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
