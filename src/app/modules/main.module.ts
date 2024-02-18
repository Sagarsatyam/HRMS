import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { MainRoutingModule } from './main-routing.module';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { MainComponent } from './main/main.component';
import { CommonComponent } from './common/common.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ScriptLoaderService } from 'src/assets/js/script-loader.service';
// import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';

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
import { ProsonalDetailsComponent } from './employee/prosonal-details/prosonal-details.component';
import { EmployeeSubHeaderComponent } from './employee/employee-sub-header/employee-sub-header.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeDashboardComponent } from './employee/employee-dashboard/employee-dashboard.component';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { RouterModule, Routes } from '@angular/router';










@NgModule({
  declarations: [
    MainDashboardComponent,
    MainComponent, CommonComponent, HeaderComponent, FooterComponent, SidebarComponent, DashboardComponent,
    ProsonalDetailsComponent,EmployeeSubHeaderComponent,EmployeeListComponent,EmployeeDashboardComponent,

  ],
  imports: [
    CommonModule,
    MainRoutingModule, MdbTabsModule, MdbAccordionModule,
    // BrowserAnimationsModule,
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
    HttpClientModule
  ],
  providers: [ScriptLoaderService],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MainModule { }
