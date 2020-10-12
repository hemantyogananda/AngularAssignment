import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material/material.module';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeService } from 'src/app/shared/employee.service';
import { DepartmentService } from 'src/app/shared/department.service';
import { environment } from 'src/environments/environment';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { MatConfirmDialigComponent } from './mat-confirm-dialig/mat-confirm-dialig.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeComponent,
    EmployeeListComponent,
    MatConfirmDialigComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [EmployeeService,DepartmentService, DatePipe],
  bootstrap: [AppComponent],
  entryComponents: [EmployeeComponent, MatConfirmDialigComponent]
})
export class AppModule { }
