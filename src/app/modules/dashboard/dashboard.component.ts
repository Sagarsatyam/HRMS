import { Component } from '@angular/core';
import { employeeList } from '../../shared/model/employeelist';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  // categoryGroup: Array<employeeList> = [];
  // showOptions: boolean[] = [];
  // defaultImage: string = 'assets/images/profile.png';
  // toggleOptions(index: number) {
  //   // Toggle the showOptions property for the clicked item
  //   this.showOptions[index] = !this.showOptions[index];
  // }

  // constructor(private EmployeeListService: EmployeeListService) { }

  // ngOnInit() {
  // Simulate loading for 3 seconds
  // setTimeout(() => {
  //   this.getEmployeeList();
  // }, 3000);
  // }

  // getEmployeeList() {
  //   this.EmployeeListService.getListEmployee().subscribe(
  //     (res) => {
  //       this.categoryGroup = res;
  //       this.showOptions = res.map(() => false); // Initialize showOptions for each item
  //     },
  //     (error) => {
  //       console.error(error);
  //     }
  //   );
  // }

  // getImageURL(imageFileName: string): string {
  //   if (imageFileName && imageFileName !== 'string') {
  //     return `assets/images/${imageFileName}`;
  //   }
  //   else {
  //     return this.defaultImage;
  //   }
  // }

}
