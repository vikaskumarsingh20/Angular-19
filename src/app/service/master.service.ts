import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IApiResponse } from '../modal/Employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  private apiUrl = 'https://projectapi.gerasim.in/api/EmployeeManagement';

  constructor(private http: HttpClient) { }

  getDepartmentList() {
    return this.http.get<IApiResponse>(`${this.apiUrl}/GetParentDepartment`);
  }

  getChildDepartmentList(parentDeptId: number): Observable<IApiResponse> {
    return this.http.get<IApiResponse>(`${this.apiUrl}/GetChildDepartmentByParentId?parentDeptId=${parentDeptId}`);
  }
}
