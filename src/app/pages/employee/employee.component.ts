import { Component, inject, OnInit, signal, Signal } from '@angular/core';
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
  styleUrl: './employee.component.css',
})
export class EmployeeComponent implements OnInit {
  parentDepartList: any = ([] = []);
  childDepartList: any = ([] = []);
  employeesList: any = ([] = []);

 isSidePanelOpen = signal<boolean>(false);

  deptId: number = 0;
  masterService = inject(MasterService);
  employeeService = inject(EmployeeService);
  employeeObj: Employee = new Employee();

  ngOnInit(): void {
    this.getParentDepartList();
    this.getEmployees();
  }
  addNew(){
    this.isSidePanelOpen.set(true);
  }
  close(){
    this.isSidePanelOpen.set(false);
  }
  getEmployees() {
    this.employeeService.getEmployeeList().subscribe((res: Employee[]) => {
      this.employeesList = res;
    });
  }
  getParentDepartList() {
    debugger;
    this.masterService.getDepartmentList().subscribe((res: IApiResponse) => {
      this.parentDepartList = res.data;
    });
  }
  onDepartmentChange() {
    this.masterService
      .getChildDepartmentList(this.deptId)
      .subscribe((res: IApiResponse) => {
        this.childDepartList = res.data;
      });
  }
  onEdit(obj:Employee) {
    this.employeeObj = obj;
  }

  onUpdateEmployee(){
    debugger;
    this.employeeService.updateEmployee(this.employeeObj).subscribe(
      (res: Employee) => {
        alert(' Employee updated successfully');
        this.getEmployees();
      },
      (error) => {
        alert(' Error while updating employee');
      }
    );
  }
  onDeleteEmployee(employeeId: number) {
    const result = confirm('Are you sure you want to delete this employee?');
    if (result) {
      debugger;

      this.employeeService.deleteEmployeeById(employeeId).subscribe(
        (res: Employee) => {
          alert('Employee deleted successfully');
          this.getEmployees();
        },
        (error) => {
          alert('Error while deleting employee');
        }
      );
    }
  }

  onSaveEmployee() {
    debugger;
    this.employeeService.createEmployee(this.employeeObj).subscribe(
      (res: Employee) => {
        alert('Employee created successfully');
        this.getEmployees();
      },
      (error) => {
        console.error( error);
        alert('Error while creating employee');
      }
    );
  }
}
