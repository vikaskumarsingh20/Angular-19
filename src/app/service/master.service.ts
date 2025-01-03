import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IApiResponse } from '../modal/Employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }

  getDepartmentList(){
    return this.http.get<IApiResponse>('https://projectapi.gerasim.in/api/EmployeeManagement/GetParentDepartment');
  }

  getChildDepartmentList(parentDeptId: number) : Observable<IApiResponse>{
    return this.http.get<IApiResponse>('https://projectapi.gerasim.in/api/EmployeeManagement/GetChildDepartmentByParentId?parentDeptId='+parentDeptId);
  }
}
