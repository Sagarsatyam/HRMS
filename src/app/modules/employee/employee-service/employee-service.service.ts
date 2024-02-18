import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { employeeList } from 'src/app/shared/model/employeelist';
import { GlobalServiceService } from 'src/app/shared/global-service/global-service.service';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  constructor(private httpClient: HttpClient, private GlobalServiceService: GlobalServiceService) { }
  getListEmployee(): Observable<employeeList[]> {
    const baseUrl = this.GlobalServiceService.getBaseUrl();
    const specificEndpoint = "EmpReg";
    const url = `${baseUrl}${specificEndpoint}`;
    return this.httpClient.get<employeeList[]>(url);
  }

  saveEmployee(employee: employeeList): Observable<employeeList> {
    var url = "https://biller.koiv.in/api/EmpReg";
    return this.httpClient.post<employeeList>(url, employee);
  }
}
