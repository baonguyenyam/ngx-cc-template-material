import { ViewContainerRef, OnInit, OnDestroy, NgZone, Renderer2 } from '@angular/core';
import { FieldWrapper } from 'ngx-cc-template-core';
import { MatFormField } from '@angular/material/form-field';
import { MatFormFieldControl } from '@angular/material/form-field';
import { FocusMonitor } from '@angular/cdk/a11y';
import { Subject } from 'rxjs/Subject';
export declare class CanhcamWrapperFormField extends FieldWrapper implements OnInit, OnDestroy, MatFormFieldControl<any> {
    private _focusMonitor;
    private ngZone;
    private renderer;
    fieldComponent: ViewContainerRef;
    formField: MatFormField;
    placeholder: string;
    shouldPlaceholderFloat: boolean;
    value: any;
    empty: boolean;
    stateChanges: Subject<void>;
    _errorState: boolean;
    focused: boolean;
    readonly errorState: boolean;
    readonly showError: boolean;
    readonly ngControl: any;
    readonly required: boolean;
    readonly disabled: boolean;
    private destroy$;
    constructor(_focusMonitor: FocusMonitor, ngZone: NgZone, renderer: Renderer2);
    ngOnInit(): void;
    focusMonitor(elements?: any[]): void;
    setDescribedByIds(ids: string[]): void;
    onContainerClick(): void;
    ngOnDestroy(): void;
}