import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemsOperationalComponent } from './systems-operational/systems-operational.component';

const routes: Routes = [
    {
        path: 'dashboard-home',
        component: SystemsOperationalComponent
    },
    { path: '', redirectTo: 'dashboard-home', pathMatch: 'full' }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
