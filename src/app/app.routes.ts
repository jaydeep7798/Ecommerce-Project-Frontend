import { Routes } from '@angular/router';
import { AdminLoginComponent } from './Component/Admin/admin-login/admin-login.component';

export const routes: Routes = [
    { path: '', redirectTo: 'admin-login', pathMatch: 'full' }, // ✅ Default route
    { path: 'adminlogin', component: AdminLoginComponent }
];
