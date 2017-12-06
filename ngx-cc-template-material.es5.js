var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var CanhcamFieldCheckbox = /** @class */ (function (_super) {
    __extends(CanhcamFieldCheckbox, _super);
    function CanhcamFieldCheckbox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    CanhcamFieldCheckbox.prototype.ngAfterViewInit = function () {
        if (this.field['__formField__']) {
            this.field['__formField__']._control.focusMonitor([this.matCheckbox._inputElement.nativeElement]);
        }
    };
    return CanhcamFieldCheckbox;
}(FieldType));
CanhcamFieldCheckbox.decorators = [
    { type: Component, args: [{
                selector: 'canhcam-field-mat-checkbox',
                template: "\n    <mat-checkbox [formControl]=\"formControl\" [canhcamAttributes]=\"field\">{{ to.label }}</mat-checkbox>\n  ",
            },] },
];
/**
 * @nocollapse
 */
CanhcamFieldCheckbox.ctorParameters = function () { return []; };
CanhcamFieldCheckbox.propDecorators = {
    'matCheckbox': [{ type: ViewChild, args: [MatCheckbox,] },],
};
var CanhcamFieldMultiCheckbox = /** @class */ (function (_super) {
    __extends(CanhcamFieldMultiCheckbox, _super);
    function CanhcamFieldMultiCheckbox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} model
     * @param {?} field
     * @return {?}
     */
    CanhcamFieldMultiCheckbox.createControl = function (model, field) {
        var /** @type {?} */ controlGroupConfig = field.templateOptions.options.reduce(function (previous, option) {
            previous[option.key] = new FormControl(model ? model[option.key] : undefined);
            return previous;
        }, {});
        return new FormGroup(controlGroupConfig, field.validators ? field.validators.validation : undefined, field.asyncValidators ? field.asyncValidators.validation : undefined);
    };
    /**
     * @return {?}
     */
    CanhcamFieldMultiCheckbox.prototype.ngAfterViewInit = function () {
        if (this.field['__formField__']) {
            this.field['__formField__']._control.focusMonitor(this.matCheckboxes.map(function (matCheckbox) { return matCheckbox._inputElement.nativeElement; }));
        }
    };
    return CanhcamFieldMultiCheckbox;
}(FieldType));
CanhcamFieldMultiCheckbox.decorators = [
    { type: Component, args: [{
                selector: 'canhcam-field-mat-multicheckbox',
                template: "\n    <ng-container *ngFor=\"let option of to.options\">\n      <mat-checkbox [formControl]=\"formControl.get(option.key)\" [canhcamAttributes]=\"field\">{{ option.value }}</mat-checkbox>\n    </ng-container>\n  ",
            },] },
];
/**
 * @nocollapse
 */
CanhcamFieldMultiCheckbox.ctorParameters = function () { return []; };
CanhcamFieldMultiCheckbox.propDecorators = {
    'matCheckboxes': [{ type: ViewChildren, args: [MatCheckbox,] },],
};
var CanhcamErrorStateMatcher = /** @class */ (function () {
    /**
     * @param {?} field
     */
    function CanhcamErrorStateMatcher(field) {
        this.field = field;
    }
    /**
     * @param {?} control
     * @param {?} form
     * @return {?}
     */
    CanhcamErrorStateMatcher.prototype.isErrorState = function (control, form) {
        return this.field && this.field.showError;
    };
    return CanhcamErrorStateMatcher;
}());
var CanhcamFieldInput = /** @class */ (function (_super) {
    __extends(CanhcamFieldInput, _super);
    function CanhcamFieldInput() {
        var _this = _super.apply(this, arguments) || this;
        _this.errorStateMatcher = new CanhcamErrorStateMatcher(_this);
        return _this;
    }
    Object.defineProperty(CanhcamFieldInput.prototype, "type", {
        /**
         * @return {?}
         */
        get: function () {
            return this.to.type || 'text';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CanhcamFieldInput.prototype.ngOnInit = function () {
        if (this.field['__formField__']) {
            this.field['__formField__']._control = this.matInput;
        }
    };
    return CanhcamFieldInput;
}(FieldType));
CanhcamFieldInput.decorators = [
    { type: Component, args: [{
                selector: 'canhcam-field-mat-input',
                template: "\n    <input matInput\n      [type]=\"type\"\n      [errorStateMatcher]=\"errorStateMatcher\"\n      [formControl]=\"formControl\"\n      [canhcamAttributes]=\"field\">\n  ",
            },] },
];
/**
 * @nocollapse
 */
CanhcamFieldInput.ctorParameters = function () { return []; };
CanhcamFieldInput.propDecorators = {
    'matInput': [{ type: ViewChild, args: [MatInput,] },],
};
var CanhcamFieldRadio = /** @class */ (function (_super) {
    __extends(CanhcamFieldRadio, _super);
    function CanhcamFieldRadio() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    CanhcamFieldRadio.prototype.ngAfterViewInit = function () {
        if (this.field['__formField__']) {
            this.field['__formField__']._control.focusMonitor(this.matRadioButtons.map(function (matRadioButton) { return matRadioButton._inputElement.nativeElement; }));
        }
    };
    return CanhcamFieldRadio;
}(FieldType));
CanhcamFieldRadio.decorators = [
    { type: Component, args: [{
                selector: 'canhcam-field-mat-radio',
                template: "\n    <mat-radio-group [formControl]=\"formControl\" [canhcamAttributes]=\"field\">\n      <mat-radio-button *ngFor=\"let option of to.options\" [value]=\"option.key\">\n        {{ option.value }}\n      </mat-radio-button>\n    </mat-radio-group>\n  ",
            },] },
];
/**
 * @nocollapse
 */
CanhcamFieldRadio.ctorParameters = function () { return []; };
CanhcamFieldRadio.propDecorators = {
    'matRadioButtons': [{ type: ViewChildren, args: [MatRadioButton,] },],
};
var CanhcamFieldTextArea = /** @class */ (function (_super) {
    __extends(CanhcamFieldTextArea, _super);
    function CanhcamFieldTextArea() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CanhcamFieldTextArea;
}(CanhcamFieldInput));
CanhcamFieldTextArea.decorators = [
    { type: Component, args: [{
                selector: 'canhcam-field-mat-textarea',
                template: "\n    <textarea matInput [name]=\"key\" [formControl]=\"formControl\" [errorStateMatcher]=\"errorStateMatcher\" [cols]=\"to.cols\"\n      [rows]=\"to.rows\" [canhcamAttributes]=\"field\">\n    </textarea>\n  ",
            },] },
];
/**
 * @nocollapse
 */
CanhcamFieldTextArea.ctorParameters = function () { return []; };
var CanhcamFieldSelect = /** @class */ (function (_super) {
    __extends(CanhcamFieldSelect, _super);
    function CanhcamFieldSelect() {
        var _this = _super.apply(this, arguments) || this;
        _this.errorStateMatcher = new CanhcamErrorStateMatcher(_this);
        return _this;
    }
    Object.defineProperty(CanhcamFieldSelect.prototype, "labelProp", {
        /**
         * @return {?}
         */
        get: function () { return this.to.labelProp || 'label'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanhcamFieldSelect.prototype, "valueProp", {
        /**
         * @return {?}
         */
        get: function () { return this.to.valueProp || 'value'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanhcamFieldSelect.prototype, "groupProp", {
        /**
         * @return {?}
         */
        get: function () { return this.to.groupProp || 'group'; },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CanhcamFieldSelect.prototype.ngOnInit = function () {
        var _this = this;
        if (this.field['__formField__']) {
            this.field['__formField__']._control = this.matSelect;
        }
        var /** @type {?} */ options = [];
        this.to.options.map(function (option) {
            if (!option[_this.groupProp]) {
                options.push(option);
            }
            else {
                var /** @type {?} */ filteredOption = options.filter(function (filteredOption) {
                    return filteredOption.label === option[_this.groupProp];
                });
                if (filteredOption[0]) {
                    filteredOption[0].group.push({
                        label: option[_this.labelProp],
                        value: option[_this.valueProp],
                    });
                }
                else {
                    options.push({
                        label: option[_this.groupProp],
                        group: [{ value: option[_this.valueProp], label: option[_this.labelProp] }],
                    });
                }
            }
        });
        this.selectOptions = options;
    };
    return CanhcamFieldSelect;
}(FieldType));
CanhcamFieldSelect.decorators = [
    { type: Component, args: [{
                selector: 'canhcam-field-mat-select',
                template: "\n    <mat-select [formControl]=\"formControl\" [canhcamAttributes]=\"field\" [errorStateMatcher]=\"errorStateMatcher\">\n      <ng-container *ngFor=\"let item of selectOptions\">\n        <mat-optgroup *ngIf=\"item.group\" label=\"{{item.label}}\">\n          <mat-option *ngFor=\"let child of item.group\" [value]=\"child.value\" [disabled]=\"item.disabled\">\n            {{ child.label }}\n          </mat-option>\n        </mat-optgroup>\n        <mat-option *ngIf=\"!item.group\" [value]=\"item.value\" [disabled]=\"item.disabled\">{{ item.label }}</mat-option>\n      </ng-container>\n    </mat-select>\n  ",
            },] },
];
/**
 * @nocollapse
 */
CanhcamFieldSelect.ctorParameters = function () { return []; };
CanhcamFieldSelect.propDecorators = {
    'matSelect': [{ type: ViewChild, args: [MatSelect,] },],
};
var CanhcamWrapperFormField = /** @class */ (function (_super) {
    __extends(CanhcamWrapperFormField, _super);
    /**
     * @param {?} _focusMonitor
     * @param {?} ngZone
     * @param {?} renderer
     */
    function CanhcamWrapperFormField(_focusMonitor, ngZone, renderer) {
        var _this = _super.call(this) || this;
        _this._focusMonitor = _focusMonitor;
        _this.ngZone = ngZone;
        _this.renderer = renderer;
        _this.stateChanges = new Subject$1();
        _this._errorState = false;
        _this.focused = false;
        _this.destroy$ = new Subject$1();
        return _this;
    }
    Object.defineProperty(CanhcamWrapperFormField.prototype, "errorState", {
        /**
         * @return {?}
         */
        get: function () { return this.showError; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanhcamWrapperFormField.prototype, "showError", {
        /**
         * @return {?}
         */
        get: function () {
            var /** @type {?} */ showError = this.options.showError(this);
            if (showError !== this._errorState) {
                this._errorState = showError;
                this.stateChanges.next();
            }
            return showError;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanhcamWrapperFormField.prototype, "ngControl", {
        /**
         * @return {?}
         */
        get: function () { return /** @type {?} */ (this.formControl); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanhcamWrapperFormField.prototype, "required", {
        /**
         * @return {?}
         */
        get: function () { return this.to.required; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanhcamWrapperFormField.prototype, "disabled", {
        /**
         * @return {?}
         */
        get: function () { return this.to.disabled; },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CanhcamWrapperFormField.prototype.ngOnInit = function () {
        this.focused = !!this.field.focus;
        this.formField._control = this;
        this.field['__formField__'] = this.formField;
    };
    /**
     * @param {?=} elements
     * @return {?}
     */
    CanhcamWrapperFormField.prototype.focusMonitor = function (elements) {
        var _this = this;
        if (elements === void 0) { elements = []; }
        elements.map(function (element) {
            takeUntil$1.call(_this._focusMonitor.monitor(element, _this.renderer, false), _this.destroy$).subscribe(function (focusOrigin) {
                if (_this.focused !== !!focusOrigin) {
                    _this.ngZone.run(function () {
                        _this.focused = !!focusOrigin;
                        _this.stateChanges.next();
                    });
                }
            });
        });
    };
    /**
     * @param {?} ids
     * @return {?}
     */
    CanhcamWrapperFormField.prototype.setDescribedByIds = function (ids) { };
    /**
     * @return {?}
     */
    CanhcamWrapperFormField.prototype.onContainerClick = function () { };
    /**
     * @return {?}
     */
    CanhcamWrapperFormField.prototype.ngOnDestroy = function () {
        delete this.field['__formField__'];
        this.stateChanges.complete();
        this.destroy$.complete();
    };
    return CanhcamWrapperFormField;
}(FieldWrapper));
CanhcamWrapperFormField.decorators = [
    { type: Component, args: [{
                selector: 'canhcam-wrapper-mat-form-field',
                template: "\n    <!-- fix https://github.com/angular/material2/pull/7083 by setting width to 100% -->\n    <mat-form-field [floatPlaceholder]=\"to.floatPlaceholder\" [style.width]=\"'100%'\">\n      <ng-container #fieldComponent></ng-container>\n      <mat-placeholder *ngIf=\"to.placeholder\">{{ to.placeholder }}</mat-placeholder>\n      <!-- fix https://github.com/angular/material2/issues/7737 by setting id to null  -->\n      <mat-error [id]=\"null\">\n        <canhcam-validation-message [fieldForm]=\"formControl\" [field]=\"field\"></canhcam-validation-message>\n      </mat-error>\n      <!-- fix https://github.com/angular/material2/issues/7737 by setting id to null  -->\n      <mat-hint *ngIf=\"to.description\" [id]=\"null\">{{ to.description }}</mat-hint>\n    </mat-form-field>\n  ",
                providers: [{ provide: MatFormFieldControl, useExisting: CanhcamWrapperFormField }],
            },] },
];
/**
 * @nocollapse
 */
CanhcamWrapperFormField.ctorParameters = function () { return [
    { type: FocusMonitor, },
    { type: NgZone, },
    { type: Renderer2, },
]; };
CanhcamWrapperFormField.propDecorators = {
    'fieldComponent': [{ type: ViewChild, args: ['fieldComponent', { read: ViewContainerRef },] },],
    'formField': [{ type: ViewChild, args: [MatFormField,] },],
};
var FIELD_TYPE_COMPONENTS = [
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
var MATERIAL_CANHCAM_CONFIG = {
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
var CanhcamMaterialModule = /** @class */ (function () {
    function CanhcamMaterialModule() {
    }
    return CanhcamMaterialModule;
}());
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
CanhcamMaterialModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */
export { CanhcamFieldCheckbox, CanhcamFieldMultiCheckbox, CanhcamFieldInput, CanhcamFieldRadio, CanhcamFieldTextArea, CanhcamFieldSelect, CanhcamWrapperFormField, CanhcamMaterialModule, FIELD_TYPE_COMPONENTS as ɵa, MATERIAL_CANHCAM_CONFIG as ɵb };
//# sourceMappingURL=ngx-cc-template-material.es5.js.map
