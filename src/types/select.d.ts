import { OnInit } from '@angular/core';
import { FieldType } from 'ngx-cc-template-core';
import { MatSelect } from '@angular/material/select';
import { CanhcamErrorStateMatcher } from '../canhcam.error-state-matcher';
export declare class SelectOption {
    label: string;
    value?: string;
    group?: SelectOption[];
    disabled?: boolean;
    constructor(label: string, value?: string, children?: SelectOption[]);
}
export declare class CanhcamFieldSelect extends FieldType implements OnInit {
    matSelect: MatSelect;
    errorStateMatcher: CanhcamErrorStateMatcher;
    selectOptions: any;
    readonly labelProp: string;
    readonly valueProp: string;
    readonly groupProp: string;
    ngOnInit(): void;
}
