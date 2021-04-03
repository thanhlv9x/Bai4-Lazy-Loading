import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
    {
        path: "",
        loadChildren: () => import('./dashboard/modules/dashboard.module').then(m => m.DashboardModule),
    },
    {
        path: "employee-management",
        loadChildren: () => import('./employee-management/modules/employee-management.module').then(m => m.EmployeeManagementModule),
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
