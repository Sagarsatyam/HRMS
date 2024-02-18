import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from '../main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule, Routes } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { EmployeeSubHeaderComponent } from './employee-sub-header/employee-sub-header.component';
import { ProsonalDetailsComponent } from './prosonal-details/prosonal-details.component';
import { EmployeeComponent } from './employee.component';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
// import { RouterModule, Routes } from '@angular/router';





// const routes: Routes = [
//   { path: 'main', component: MainComponent },

//   // {
//   //   path: '',
//   //   component: EmployeeComponent,
//   //   children: [
//   //     // { path: 'dashboard', component: DashboardComponent },
//   //     { path: 'empSubHeader', component: EmployeeSubHeaderComponent },
//   //     { path: '', redirectTo: '/main/empSubHeader', pathMatch: 'full' },

//   //     { path: 'pd', component: ProsonalDetailsComponent },

//   //   ],
//   // },



// ];



@NgModule({
  declarations: [
    // MainComponent,
    EmployeeSubHeaderComponent,
    
    // EmployeeDashboardComponent,
    // EmployeeListComponent,

    // ProsonalDetailsComponent,

  ],
  imports: [

    MdbAccordionModule,
    BrowserAnimationsModule,
    MdbValidationModule,
    MdbTooltipModule,
    MdbScrollspyModule,
    MdbRippleModule,
    MdbRangeModule,
    MdbRadioModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbFormsModule,
    MdbDropdownModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbCarouselModule,
    MdbTabsModule,
    CommonModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    FormsModule,
    MatListModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    HttpClientModule,
    MatSelectModule,
    // RouterModule.forChild(routes),
    EmployeeRoutingModule

  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class EmployeeModule { }
