import { Component } from '@angular/core';
import { EmployeeServiceService } from './../../employee/employee-service/employee-service.service';
import { employeeList } from 'src/app/shared/model/employeelist';


@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.scss']
})
export class EmployeeDashboardComponent {
  //   emplist: Array<employeeList> = [];
  //   showOptions: boolean[] = [];

  //   toggleOptions(index: number) {
  //       // Toggle the showOptions property for the clicked item
  //       this.showOptions[index] = !this.showOptions[index];
  //   }

  //   constructor(private EmployeeServiceService: EmployeeServiceService) { }

  //   ngOnInit() {
  //       // Simulate loading for 3 seconds
  //       setTimeout(() => {
  //           this.getEmployeeList();
  //       }, 3000);
  //   }

  //   getEmployeeList() {
  //       this.EmployeeServiceService.getListEmployee().subscribe(
  //           (res) => {
  //               this.emplist = res;
  //               this.showOptions = res.map(() => false); // Initialize showOptions for each item
  //           },
  //           (error) => {
  //               console.error(error);
  //           }
  //       );
  //   }

  //   getImageURL(imageFileName: string): string {
  //       return `assets/images/${imageFileName}`;
  // }

}
