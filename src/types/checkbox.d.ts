import { AfterViewInit } from '@angular/core';
import { FieldType } from 'ngx-cc-template-core';
import { MatCheckbox } from '@angular/material/checkbox';
export declare class CanhcamFieldCheckbox extends FieldType implements AfterViewInit {
    matCheckbox: MatCheckbox;
    ngAfterViewInit(): void;
}
