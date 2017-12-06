import { OnInit } from '@angular/core';
import { FieldType } from 'ngx-cc-template-core';
import { MatInput } from '@angular/material/input';
import { CanhcamErrorStateMatcher } from '../canhcam.error-state-matcher';
export declare class CanhcamFieldInput extends FieldType implements OnInit {
    matInput: MatInput;
    errorStateMatcher: CanhcamErrorStateMatcher;
    readonly type: string;
    ngOnInit(): void;
}
