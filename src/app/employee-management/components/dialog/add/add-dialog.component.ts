import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeService } from '../../../../services/employee.service';
import { Employee } from '../../../../models/employee.class';
import { AlertComponent } from '../alert/alert.component';
import { isValidDate, isValidName, isValidCode, isValidEmail } from 'src/app/models/validators';

@Component({
    selector: 'app-add.dialog',
    templateUrl: './add-dialog.component.html',
    styleUrls: ['./add-dialog.component.css'],
})
export class AddDialogComponent {
    formBuilder = new FormBuilder();
    formGroup: FormGroup;
    firstError?: string;
    constructor(public dialogRef: MatDialogRef<AddDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Employee,
        public dataService: EmployeeService, public dialog: MatDialog) {
        this.formGroup = this.formBuilder.group({
            'name': new FormControl(this.data.name, [Validators.required, isValidName]),
            'code': new FormControl(this.data.code, [Validators.required, isValidCode]),
            'email': new FormControl(this.data.code, [Validators.required, isValidEmail]),
            'date': new FormControl(this.data.birth, [Validators.required, isValidDate]),
        });
    }

    onCancel(): void {
        this.dialogRef.close();
    }

    onConfirm(): void {
        if (!this.onValidate()) {
            return;
        }
        if (!this.data.image) {
            return;
        }
        if (this.formGroup.status !== "INVALID") {
            let result = this.dataService.create(this.data);
            this.dialog.open(AlertComponent, {
                data: { message: "Thêm mới " + (result ? "thành công" : "không thành công") }
            });
            if (result) {
                this.dialogRef.close();
            }
        } else {
            this.dialog.open(AlertComponent, {
                data: { message: "Dữ liệu không hợp lệ !" }
            });
        }
    }

    onUpload(event: any): void {
        this.readURL(event.target, this.data);
    }

    onClear(): void {
        let inputImage: any = document.getElementById('inputImage');
        let imgTag: any = document.getElementById('imageUpload');
        inputImage.value = null;
        imgTag.src = "";
        this.data.image = "";
    }

    onValidate(): boolean {
        const props = Object.keys(this.formGroup.value);
        this.firstError = "";
        props.forEach((prop) => {
            if (!this.firstError && this.formGroup.get(prop)?.errors) {
                this.firstError = prop;
            }
        })
        return !this.firstError;
    }

    readURL(input: any, data: any) {
        if (input.files && input.files[0] && input.files[0].type.includes('image/')) {
            var reader = new FileReader();

            reader.onload = function (e) {
                data.image = e.target?.result;
                let imgTag: any = document.getElementById('imageUpload');
                imgTag.src = e.target?.result;
            }

            reader.readAsDataURL(input.files[0]);
        } else {            
            this.onClear();
        }
    }
}
