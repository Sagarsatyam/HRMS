import { Component } from '@angular/core';

import { EmployeeServiceService } from './../../employee/employee-service/employee-service.service';
import { employeeList } from 'src/app/shared/model/employeelist';
import { Subject } from 'rxjs';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent {
  employeeList: Array<employeeList> = []

  constructor(private EmployeeServiceService: EmployeeServiceService) { }

  // dtoptions:DataTables.Settings ={};
  dtTrigger: Subject<any> = new Subject<any>();


  ngOnInit() {

    this.getProductCategoryList();
    // this.dtoptions={
    //   pagingType:'full_numbers',
    //   language:{
    //     searchPlaceholder:"categoryGroupId"
    //   }
    // };


  }


  getProductCategoryList() {
    this.EmployeeServiceService.getListEmployee().subscribe(res => {
      this.employeeList = res;
      this.dtTrigger.next(null);
      console.log(res);

    })
  }



}
