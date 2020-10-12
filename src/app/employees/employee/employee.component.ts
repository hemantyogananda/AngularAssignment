import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { DepartmentService } from 'src/app/shared/department.service';
import { NotificationService } from 'src/app/shared/notification.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public service: EmployeeService, public departmentService: DepartmentService, public notificationService: NotificationService, public dialogRef: MatDialogRef<EmployeeComponent>) { }

  ngOnInit(): void {
    this.service.getEmployees();
  }

  onClear(){
    this.service.form.reset();
    this.service.InitializeFormGroup();    
  }

  onSubmit(){
    if (this.service.form.valid){
      if(!this.service.form.get('$key').value)
      this.service.insertEmployee(this.service.form.value);
      else
      this.service.updateEmployee(this.service.form.value);
      this.service.form.reset();
      this.service.InitializeFormGroup();
      this.notificationService.success(':: Submitted Successfully');
      this.onClose();

    }
  }

  onClose(){
    this.service.form.reset();
    this.service.InitializeFormGroup(); 
    this.dialogRef.close();
  }

}
