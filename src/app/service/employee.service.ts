import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Employee, IApiResponse, Project } from '../modal/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  apiUrl = 'https://projectapi.gerasim.in/api/EmployeeManagement/';

  constructor(private http: HttpClient) { }

  createEmployee(obj: Employee) {
    return this.http.post<Employee>(`${this.apiUrl}CreateEmployee`, obj);
  }

  getEmployeeList() {
    return this.http.get<Employee[]>(`${this.apiUrl}GetAllEmployees`);
  }

  updateEmployee(obj: Employee) {
    return this.http.put<Employee>(`${this.apiUrl}UpdateEmployee/${obj.employeeId}`, obj);
  }

  deleteEmployeeById(employeeId: number) {
    return this.http.delete<Employee>(`${this.apiUrl}DeleteEmployee/${employeeId}`);
  }

  createNewProject(obj: Project) {
    return this.http.post<Project>(`${this.apiUrl}CreateProject`, obj);
  }
getAllProjects() {
  return this.http.get<Project[]>(`${this.apiUrl}GetAllProjects`);
}
updateProject(obj: Project) {
  return this.http.put<Project>(`${this.apiUrl}UpdateProject/${obj.projectId}`, obj);
}
}
