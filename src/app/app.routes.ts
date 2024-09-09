import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent},
    { path: 'user', component: UserComponent},
    { path: 'dashboard', component: DashboardComponent}
];
