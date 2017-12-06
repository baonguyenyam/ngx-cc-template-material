import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Field } from 'ngx-cc-template-core';
export declare class CanhcamErrorStateMatcher implements ErrorStateMatcher {
    private field;
    constructor(field: Field);
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean;
}
