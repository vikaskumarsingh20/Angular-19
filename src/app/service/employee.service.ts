import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Employee, IApiResponse } from '../modal/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor( private http : HttpClient) { }

  createEmployee(obj: Employee){
    return this.http.post<Employee>('https://projectapi.gerasim.in/api/EmployeeManagement/CreateEmployee', obj);
  }

  getEmployeeList(){
    return this.http.get<Employee[]>('https://projectapi.gerasim.in/api/EmployeeManagement/GetAllEmployees');
  }
  deleteEmployeeById( employeeId: number){
    return this.http.delete<Employee>('https://projectapi.gerasim.in/api/EmployeeManagement/DeleteEmployee' + employeeId);
  }
}
