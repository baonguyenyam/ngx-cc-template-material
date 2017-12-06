import { Component, NgModule, NgZone, Renderer2, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { CanhcamModule, FieldType, FieldWrapper } from 'ngx-cc-template-core';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatRadioButton, MatRadioModule } from '@angular/material/radio';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatFormField, MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { FocusMonitor } from '@angular/cdk/a11y';
import { Subject as Subject$1 } from 'rxjs/Subject';
import { takeUntil as takeUntil$1 } from 'rxjs/operator/takeUntil';
import { CommonModule } from '@angular/common';

class CanhcamFieldCheckbox extends FieldType {
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.field['__formField__']) {
            this.field['__formField__']._control.focusMonitor([this.matCheckbox._inputElement.nativeElement]);
        }
    }
}
CanhcamFieldCheckbox.decorators = [
    { type: Component, args: [{
                selector: 'canhcam-field-mat-checkbox',
                template: `
    <mat-checkbox [formControl]="formControl" [canhcamAttributes]="field">{{ to.label }}</mat-checkbox>
  `,
            },] },
];
/**
 * @nocollapse
 */
CanhcamFieldCheckbox.ctorParameters = () => [];
CanhcamFieldCheckbox.propDecorators = {
    'matCheckbox': [{ type: ViewChild, args: [MatCheckbox,] },],
};

class CanhcamFieldMultiCheckbox extends FieldType {
    /**
     * @param {?} model
     * @param {?} field
     * @return {?}
     */
    static createControl(model, field) {
        let /** @type {?} */ controlGroupConfig = field.templateOptions.options.reduce((previous, option) => {
            previous[option.key] = new FormControl(model ? model[option.key] : undefined);
            return previous;
        }, {});
        return new FormGroup(controlGroupConfig, field.validators ? field.validators.validation : undefined, field.asyncValidators ? field.asyncValidators.validation : undefined);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.field['__formField__']) {
            this.field['__formField__']._control.focusMonitor(this.matCheckboxes.map(matCheckbox => matCheckbox._inputElement.nativeElement));
        }
    }
}
CanhcamFieldMultiCheckbox.decorators = [
    { type: Component, args: [{
                selector: 'canhcam-field-mat-multicheckbox',
                template: `
    <ng-container *ngFor="let option of to.options">
      <mat-checkbox [formControl]="formControl.get(option.key)" [canhcamAttributes]="field">{{ option.value }}</mat-checkbox>
    </ng-container>
  `,
            },] },
];
/**
 * @nocollapse
 */
CanhcamFieldMultiCheckbox.ctorParameters = () => [];
CanhcamFieldMultiCheckbox.propDecorators = {
    'matCheckboxes': [{ type: ViewChildren, args: [MatCheckbox,] },],
};

class CanhcamErrorStateMatcher {
    /**
     * @param {?} field
     */
    constructor(field) {
        this.field = field;
    }
    /**
     * @param {?} control
     * @param {?} form
     * @return {?}
     */
    isErrorState(control, form) {
        return this.field && this.field.showError;
    }
}

class CanhcamFieldInput extends FieldType {
    constructor() {
        super(...arguments);
        this.errorStateMatcher = new CanhcamErrorStateMatcher(this);
    }
    /**
     * @return {?}
     */
    get type() {
        return this.to.type || 'text';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.field['__formField__']) {
            this.field['__formField__']._control = this.matInput;
        }
    }
}
CanhcamFieldInput.decorators = [
    { type: Component, args: [{
                selector: 'canhcam-field-mat-input',
                template: `
    <input matInput
      [type]="type"
      [errorStateMatcher]="errorStateMatcher"
      [formControl]="formControl"
      [canhcamAttributes]="field">
  `,
            },] },
];
/**
 * @nocollapse
 */
CanhcamFieldInput.ctorParameters = () => [];
CanhcamFieldInput.propDecorators = {
    'matInput': [{ type: ViewChild, args: [MatInput,] },],
};

class CanhcamFieldRadio extends FieldType {
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.field['__formField__']) {
            this.field['__formField__']._control.focusMonitor(this.matRadioButtons.map(matRadioButton => matRadioButton._inputElement.nativeElement));
        }
    }
}
CanhcamFieldRadio.decorators = [
    { type: Component, args: [{
                selector: 'canhcam-field-mat-radio',
                template: `
    <mat-radio-group [formControl]="formControl" [canhcamAttributes]="field">
      <mat-radio-button *ngFor="let option of to.options" [value]="option.key">
        {{ option.value }}
      </mat-radio-button>
    </mat-radio-group>
  `,
            },] },
];
/**
 * @nocollapse
 */
CanhcamFieldRadio.ctorParameters = () => [];
CanhcamFieldRadio.propDecorators = {
    'matRadioButtons': [{ type: ViewChildren, args: [MatRadioButton,] },],
};

class CanhcamFieldTextArea extends CanhcamFieldInput {
}
CanhcamFieldTextArea.decorators = [
    { type: Component, args: [{
                selector: 'canhcam-field-mat-textarea',
                template: `
    <textarea matInput [name]="key" [formControl]="formControl" [errorStateMatcher]="errorStateMatcher" [cols]="to.cols"
      [rows]="to.rows" [canhcamAttributes]="field">
    </textarea>
  `,
            },] },
];
/**
 * @nocollapse
 */
CanhcamFieldTextArea.ctorParameters = () => [];

class CanhcamFieldSelect extends FieldType {
    constructor() {
        super(...arguments);
        this.errorStateMatcher = new CanhcamErrorStateMatcher(this);
    }
    /**
     * @return {?}
     */
    get labelProp() { return this.to.labelProp || 'label'; }
    /**
     * @return {?}
     */
    get valueProp() { return this.to.valueProp || 'value'; }
    /**
     * @return {?}
     */
    get groupProp() { return this.to.groupProp || 'group'; }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.field['__formField__']) {
            this.field['__formField__']._control = this.matSelect;
        }
        let /** @type {?} */ options = [];
        this.to.options.map((option) => {
            if (!option[this.groupProp]) {
                options.push(option);
            }
            else {
                let /** @type {?} */ filteredOption = options.filter((filteredOption) => {
                    return filteredOption.label === option[this.groupProp];
                });
                if (filteredOption[0]) {
                    filteredOption[0].group.push({
                        label: option[this.labelProp],
                        value: option[this.valueProp],
                    });
                }
                else {
                    options.push({
                        label: option[this.groupProp],
                        group: [{ value: option[this.valueProp], label: option[this.labelProp] }],
                    });
                }
            }
        });
        this.selectOptions = options;
    }
}
CanhcamFieldSelect.decorators = [
    { type: Component, args: [{
                selector: 'canhcam-field-mat-select',
                template: `
    <mat-select [formControl]="formControl" [canhcamAttributes]="field" [errorStateMatcher]="errorStateMatcher">
      <ng-container *ngFor="let item of selectOptions">
        <mat-optgroup *ngIf="item.group" label="{{item.label}}">
          <mat-option *ngFor="let child of item.group" [value]="child.value" [disabled]="item.disabled">
            {{ child.label }}
          </mat-option>
        </mat-optgroup>
        <mat-option *ngIf="!item.group" [value]="item.value" [disabled]="item.disabled">{{ item.label }}</mat-option>
      </ng-container>
    </mat-select>
  `,
            },] },
];
/**
 * @nocollapse
 */
CanhcamFieldSelect.ctorParameters = () => [];
CanhcamFieldSelect.propDecorators = {
    'matSelect': [{ type: ViewChild, args: [MatSelect,] },],
};

class CanhcamWrapperFormField extends FieldWrapper {
    /**
     * @param {?} _focusMonitor
     * @param {?} ngZone
     * @param {?} renderer
     */
    constructor(_focusMonitor, ngZone, renderer) {
        super();
        this._focusMonitor = _focusMonitor;
        this.ngZone = ngZone;
        this.renderer = renderer;
        this.stateChanges = new Subject$1();
        this._errorState = false;
        this.focused = false;
        this.destroy$ = new Subject$1();
    }
    /**
     * @return {?}
     */
    get errorState() { return this.showError; }
    /**
     * @return {?}
     */
    get showError() {
        const /** @type {?} */ showError = this.options.showError(this);
        if (showError !== this._errorState) {
            this._errorState = showError;
            this.stateChanges.next();
        }
        return showError;
    }
    /**
     * @return {?}
     */
    get ngControl() { return /** @type {?} */ (this.formControl); }
    /**
     * @return {?}
     */
    get required() { return this.to.required; }
    /**
     * @return {?}
     */
    get disabled() { return this.to.disabled; }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.focused = !!this.field.focus;
        this.formField._control = this;
        this.field['__formField__'] = this.formField;
    }
    /**
     * @param {?=} elements
     * @return {?}
     */
    focusMonitor(elements = []) {
        elements.map(element => {
            takeUntil$1.call(this._focusMonitor.monitor(element, this.renderer, false), this.destroy$).subscribe(focusOrigin => {
                if (this.focused !== !!focusOrigin) {
                    this.ngZone.run(() => {
                        this.focused = !!focusOrigin;
                        this.stateChanges.next();
                    });
                }
            });
        });
    }
    /**
     * @param {?} ids
     * @return {?}
     */
    setDescribedByIds(ids) { }
    /**
     * @return {?}
     */
    onContainerClick() { }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        delete this.field['__formField__'];
        this.stateChanges.complete();
        this.destroy$.complete();
    }
}
CanhcamWrapperFormField.decorators = [
    { type: Component, args: [{
                selector: 'canhcam-wrapper-mat-form-field',
                template: `
    <!-- fix https://github.com/angular/material2/pull/7083 by setting width to 100% -->
    <mat-form-field [floatPlaceholder]="to.floatPlaceholder" [style.width]="'100%'">
      <ng-container #fieldComponent></ng-container>
      <mat-placeholder *ngIf="to.placeholder">{{ to.placeholder }}</mat-placeholder>
      <!-- fix https://github.com/angular/material2/issues/7737 by setting id to null  -->
      <mat-error [id]="null">
        <canhcam-validation-message [fieldForm]="formControl" [field]="field"></canhcam-validation-message>
      </mat-error>
      <!-- fix https://github.com/angular/material2/issues/7737 by setting id to null  -->
      <mat-hint *ngIf="to.description" [id]="null">{{ to.description }}</mat-hint>
    </mat-form-field>
  `,
                providers: [{ provide: MatFormFieldControl, useExisting: CanhcamWrapperFormField }],
            },] },
];
/**
 * @nocollapse
 */
CanhcamWrapperFormField.ctorParameters = () => [
    { type: FocusMonitor, },
    { type: NgZone, },
    { type: Renderer2, },
];
CanhcamWrapperFormField.propDecorators = {
    'fieldComponent': [{ type: ViewChild, args: ['fieldComponent', { read: ViewContainerRef },] },],
    'formField': [{ type: ViewChild, args: [MatFormField,] },],
};

const FIELD_TYPE_COMPONENTS = [
    // types
    CanhcamFieldInput,
    CanhcamFieldCheckbox,
    CanhcamFieldRadio,
    CanhcamFieldSelect,
    CanhcamFieldTextArea,
    CanhcamFieldMultiCheckbox,
    // wrappers
    CanhcamWrapperFormField,
];
const MATERIAL_CANHCAM_CONFIG = {
    types: [
        {
            name: 'input',
            component: CanhcamFieldInput,
            wrappers: ['form-field'],
        },
        {
            name: 'textarea',
            component: CanhcamFieldTextArea,
            wrappers: ['form-field'],
            defaultOptions: {
                templateOptions: {
                    cols: 1,
                    rows: 1,
                },
            },
        },
        {
            name: 'select',
            component: CanhcamFieldSelect,
            wrappers: ['form-field'],
        },
        {
            name: 'radio',
            component: CanhcamFieldRadio,
            wrappers: ['form-field'],
            defaultOptions: {
                templateOptions: {
                    floatPlaceholder: 'always',
                },
            },
        },
        {
            name: 'checkbox',
            component: CanhcamFieldCheckbox,
            wrappers: ['form-field'],
            defaultOptions: {
                templateOptions: {
                    floatPlaceholder: 'always',
                },
            },
        },
        {
            name: 'multicheckbox',
            component: CanhcamFieldMultiCheckbox,
            wrappers: ['form-field'],
            defaultOptions: {
                templateOptions: {
                    floatPlaceholder: 'always',
                },
            },
        },
    ],
    wrappers: [
        { name: 'form-field', component: CanhcamWrapperFormField },
    ],
    manipulators: [],
};

class CanhcamMaterialModule {
}
CanhcamMaterialModule.decorators = [
    { type: NgModule, args: [{
                declarations: FIELD_TYPE_COMPONENTS,
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    MatFormFieldModule,
                    MatInputModule,
                    MatRadioModule,
                    MatSelectModule,
                    MatCheckboxModule,
                    CanhcamModule.forRoot(MATERIAL_CANHCAM_CONFIG),
                ],
            },] },
];
/**
 * @nocollapse
 */
CanhcamMaterialModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { CanhcamFieldCheckbox, CanhcamFieldMultiCheckbox, CanhcamFieldInput, CanhcamFieldRadio, CanhcamFieldTextArea, CanhcamFieldSelect, CanhcamWrapperFormField, CanhcamMaterialModule, FIELD_TYPE_COMPONENTS as ɵa, MATERIAL_CANHCAM_CONFIG as ɵb };
//# sourceMappingURL=ngx-cc-template-material.js.map
