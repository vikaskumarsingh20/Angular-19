import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MasterService } from '../../service/master.service';
import { Employee, IApiResponse } from '../../modal/Employee';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../service/employee.service';

@Component({
  selector: 'app-employee',
  imports: [RouterModule, NgFor, FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {

  parentDepartList: any = [] = [];
  childDepartList: any = [] = [];

  deptId: number = 0;
  masterService = inject(MasterService);
  employeeService = inject(EmployeeService);
  employeeObj: Employee = new Employee();

  ngOnInit(): void {
    this.getParentDepartList();
  }
  getParentDepartList() {
    this.masterService.getDepartmentList().subscribe((res: IApiResponse) => {
      this.parentDepartList = res.data;
    });
  }

  onDepartmentChange() {
    this.masterService.getChildDepartmentList(this.deptId).subscribe((res: IApiResponse) => {
      this.childDepartList = res.data;
    });
  }
  onSaveEmployee() {
    debugger;
    this.employeeService.createEmployee(this.employeeObj).subscribe({
      next: (res: Employee) => {
        debugger;
        alert("Employee created successfully");
      },
      error: (err) => {
        alert("Error while creating employee");
      }
    });
  }
}


