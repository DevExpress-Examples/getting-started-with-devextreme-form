import { Component } from '@angular/core';
import notify from 'devextreme/ui/notify';
import { Employee, SubmitButtonOptions } from './app.types';

import { DxFormModule } from 'devextreme-angular/ui/form';

@Component({
    selector: 'app-root',
    imports: [DxFormModule],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  employee: Employee = {
    name: 'John Heart',
    position: 'CEO',
    hireDate: new Date(2012, 4, 13),
    officeNumber: 901,
    phone: '+1(213) 555-9392',
    skype: 'jheart_DX_skype',
    email: 'jheart@dx-email.com',
    notes: 'John has been in the Audio/Video industry since 1990.',
  };

  isFormReadOnly = false;

  submitButtonOptions: SubmitButtonOptions = {
    text: 'Submit the Form',
    useSubmitBehavior: true,
  };

  handleSubmit(e: Event): void {
    setTimeout(() => {
      notify('Submitted', 'success', 2000);
    }, 1000);

    e.preventDefault();
  }
}
