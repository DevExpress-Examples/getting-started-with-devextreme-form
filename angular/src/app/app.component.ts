import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    employee = {
        name: 'John Heart',
        position: 'CEO',
        hireDate: new Date(2012, 4, 13),
        officeNumber: 901,
        phone: '+1(213) 555-9392',
        skype: 'jheart_DX_skype',
        email: 'jheart@dx-email.com',
        notes: 'John has been in the Audio/Video industry since 1990.'
    }

    isFormReadOnly = false

    submitButtonOptions = {
        text: "Submit the Form",
        useSubmitBehavior: true
    }

    handleSubmit = function(e) {
        setTimeout(() => { 
            alert("Submitted");          
        }, 3000);
        
        e.preventDefault();
    }
}