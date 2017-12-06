import { AfterViewInit } from '@angular/core';
import { FieldType } from 'ngx-cc-template-core';
import { MatRadioButton } from '@angular/material/radio';
export declare class CanhcamFieldRadio extends FieldType implements AfterViewInit {
    matRadioButtons: MatRadioButton[];
    ngAfterViewInit(): void;
}
