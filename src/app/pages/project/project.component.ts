import { AsyncPipe, DatePipe, NgFor, NgIf } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { Form, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MasterService } from '../../service/master.service';
import { Employee } from '../../modal/Employee';
import { EmployeeService } from '../../service/employee.service';
import { Observable } from 'rxjs';
import { Project } from '../../modal/Projects';

@Component({
  selector: 'app-project',
  imports: [RouterModule,FormsModule,NgIf,ReactiveFormsModule,NgFor,AsyncPipe,DatePipe],
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent  implements OnInit {

 currentView : string = 'List';
 projectForm : FormGroup = new FormGroup({});

 employeeService = inject(EmployeeService);

 projectList : Project[] = [];

 employeeData$ : Observable<Employee[]> = new Observable<Employee[]>();

  constructor() {
    this.initializeForm();
   debugger;
    this.employeeData$ = this.employeeService.getEmployeeList();
  }
  ngOnInit(): void {
    this.getAllProjects();
  }
  onSubmit(){
    const formVs = this.projectForm.value;
    debugger;
    this.employeeService.createNewProject(formVs).subscribe((res:Project) => {
      debugger;
      alert('Project Created Successfully');
    },(error) => {
      alert('Error while creating project');
  });
  }
  getAllProjects(){
    this.employeeService.getAllProjects().subscribe((res:Project[]) => {
      this.projectList = res;
    },(error) => {
      alert('Error while fetching projects');
  });
}
onEdit(projectData: Project){
  this.initializeForm( projectData);
}
initializeForm(project?: Project) {
  this.projectForm = new FormGroup({
    projectId: new FormControl(project ? project.projectId : 0),
    projectName: new FormControl(project ? project.projectName : ''),
    clientName: new FormControl(project ? project.clientName : ''),
    startDate: new FormControl(project ? project.startDate : ''),
    leadByEmpId: new FormControl(project ? project.leadByEmpId : 0),
    contactPerson: new FormControl(project ? project.contactPerson : ''),
    contactNo: new FormControl(project ? project.contactNo : ''),
    emailId: new FormControl(project ? project.emailId : '')
  });
  this.currentView = 'Create';
}
}
