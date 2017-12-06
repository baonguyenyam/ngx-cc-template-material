#### 1. Install @angular/forms and ngx-cc-template-core packages:
```bash
  npm install @angular/forms ngx-cc-template-core --save
```

#### 2. Choose and install your UI (pre-defined types/templates) package:

- [Material2](https://github.com/angular/material2):
  1. Ensure you have already installed material2 https://material.angular.io/guide/getting-started
  2. Install `ngx-cc-template-material`
```bash
  npm install ngx-cc-template-material --save
```

- [Bootstrap](https://getbootstrap.com):

```bash
  npm install ngx-cc-template-bootstrap --save
```

#### 3. Import the `CanhcamModule` and UI (pre-defined types/templates):

```ts
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CanhcamModule} from 'ngx-cc-template-core';
import {CanhcamBootstrapModule} from 'ngx-cc-template-bootstrap';

// for material2 import `CanhcamMaterialModule`:
// import {CanhcamMaterialModule} from 'ngx-cc-template-material';

@NgModule({
  imports: [
    ...,
    ReactiveFormsModule,
    CanhcamModule.forRoot(),
    CanhcamBootstrapModule,

    // for material2 use:
    // CanhcamMaterialModule
  ],
})
export class AppModule {}
```

#### 3. Define the form config in your component:

```ts
import {Component} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {CanhcamFieldConfig} from 'ngx-cc-template-core';

@Component({
  selector: 'app',
  template: `
    <form [formGroup]="form" (ngSubmit)="submit(userModel)">
      <canhcam-form [model]="userModel" [fields]="userFields">
        <button type="submit" class="btn btn-default">Submit</button>
      </canhcam-form>
    </form>
  `,
})
export class AppComponent {
  form = new FormGroup({});
  userModel = { email: 'email@gmail.com' };
  userFields: Array<CanhcamFieldConfig> = [{
    key: 'email',
    type: 'input',
    templateOptions: {
      type: 'email',
      label: 'Email address',
      placeholder: 'Enter email',
      required: true,
    }
  }];

  submit(user) {
    console.log(user);
  }
}
```


