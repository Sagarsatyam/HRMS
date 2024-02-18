import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeSubHeaderComponent } from './employee/employee-sub-header/employee-sub-header.component';
import { ProsonalDetailsComponent } from './employee/prosonal-details/prosonal-details.component';
import { EmployeeDashboardComponent } from './employee/employee-dashboard/employee-dashboard.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';

const routes: Routes = [
  // for calling the children routes
  {
    path: '',
    component: MainDashboardComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: '', redirectTo: '/main/dashboard', pathMatch: 'full' },
      { path: 'empSubHeader', component: EmployeeSubHeaderComponent },
      { path: 'pd', component: ProsonalDetailsComponent },
      { path: 'Empdashboard', component: EmployeeDashboardComponent },
      { path: 'Emplist', component: EmployeeListComponent },

    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
