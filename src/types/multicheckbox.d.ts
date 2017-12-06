import { AfterViewInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { FieldType, CanhcamFieldConfig } from 'ngx-cc-template-core';
import { MatCheckbox } from '@angular/material/checkbox';
export declare class CanhcamFieldMultiCheckbox extends FieldType implements AfterViewInit {
    matCheckboxes: MatCheckbox[];
    static createControl(model: any, field: CanhcamFieldConfig): AbstractControl;
    ngAfterViewInit(): void;
}
