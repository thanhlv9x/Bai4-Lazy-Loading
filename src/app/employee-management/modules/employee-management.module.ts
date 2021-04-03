import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFileUploadModule } from 'angular-material-fileupload';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { EmployeeManagementRoutingModule } from './employee-management-routing.module';

import { EmployeeService } from "../../services/employee.service";

import { BytesPipe } from '../../pipe/bytes.pipe';

import { GridComponent } from '../components/grid/grid.component';
import { AddDialogComponent } from '../components/dialog/add/add-dialog.component';
import { EditDialogComponent } from '../components/dialog/edit/edit-dialog.component';
import { RemoveDialogComponent } from '../components/dialog/remove/remove-dialog.component';
import { AlertComponent } from '../components/dialog/alert/alert.component';

@NgModule({
    declarations: [
        GridComponent,
        BytesPipe,
        AddDialogComponent,
        EditDialogComponent,
        RemoveDialogComponent,
        AlertComponent
    ],
    imports: [
        CommonModule,
        EmployeeManagementRoutingModule,
        MatTableModule,
        MatInputModule,
        FormsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatDatepickerModule,
        ReactiveFormsModule,
        MatNativeDateModule,
        MatFileUploadModule,
        MatCardModule,
        MatButtonModule
    ],
    providers: [EmployeeService],
    bootstrap: [GridComponent]
})
export class EmployeeManagementModule { }
