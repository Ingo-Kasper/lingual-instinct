import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainContentComponent } from './main-content/main-content.component';

export const routes: Routes = [
    { path: '', component: MainContentComponent},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent}
];
