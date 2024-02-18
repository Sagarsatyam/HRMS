import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { EmployeeComponent } from './employee.component';
import { EmployeeSubHeaderComponent } from './employee-sub-header/employee-sub-header.component';
import { ProsonalDetailsComponent } from './prosonal-details/prosonal-details.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  // {
  // //   path: 'main',
    
  // //   loadChildren: () =>
  // //     import('./employee.module').then(
  // //       (m) => m.EmployeeModule
  // //     ),
  // // },
  // {
  //   path: '',
  //   component: EmployeeComponent,
  //   children: [
  //     // { path: 'dashboard', component: DashboardComponent },
  //     { path: 'empSubHeader', component: EmployeeSubHeaderComponent },
  //     { path: '', redirectTo: '/main/empSubHeader', pathMatch: 'full' },
  //     { path: 'pd', component: ProsonalDetailsComponent },

  //   ],
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
