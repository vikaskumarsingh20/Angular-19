export class Employee {
    employeeId: number;
    employeeName: string;
    contactNo: string;
    emailId: string;
    deptId: number;
    password: string;
    gender: string;
    role: string;
    createdDate: string;
  
    constructor(
      employeeId: number,
      employeeName: string,
      contactNo: string,
      emailId: string,
      deptId: number,
      password: string,
      gender: string,
      role: string,
      createdDate: string
    ) {
      this.employeeId = employeeId;
      this.employeeName = employeeName;
      this.contactNo = contactNo;
      this.emailId = emailId;
      this.deptId = deptId;
      this.password = password;
      this.gender = gender;
      this.role = role;
      this.createdDate = createdDate;
    }
  }

  export interface IParentDept{
        departmentId: number,
        departmentName: string,
        departmentLogo: string,

  }
  export interface IChildDept{
    childDeptId: number,
    parentDeptId: string,
    departmentName: string,

}
export interface IApiResponse{
    message:string,
    result:boolean,
    data:any
}
  