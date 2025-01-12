import { Component } from '@angular/core';

@Component({
  selector: 'app-project-employee',
  imports: [],
  templateUrl: './project-employee.component.html',
  styleUrl: './project-employee.component.css'
})
export class ProjectEmployeeComponent {
  employees = [
    { name: 'John Doe', role: 'Developer', project: 'Project Alpha' },
    { name: 'Jane Smith', role: 'Designer', project: 'Project Beta' }
  ];

  addEmployee(): void {
    const newEmployee = { name: 'New Employee', role: 'Tester', project: 'Project Gamma' };
    this.employees.push(newEmployee);
  }

  editEmployee(index: number): void {
    const employee = this.employees[index];
    alert(`Editing employee: ${employee.name}`);
    // Add your edit logic here
  }

  deleteEmployee(index: number): void {
    const confirmed = confirm('Are you sure you want to delete this employee?');
    if (confirmed) {
      this.employees.splice(index, 1);
    }
  }
}
