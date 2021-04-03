import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from '../components/dashboard/dashboard.component';

@NgModule({
    declarations: [DashboardComponent],
    imports: [DashboardRoutingModule],
    providers: [],
    bootstrap: [DashboardComponent]
})
export class DashboardModule { }
