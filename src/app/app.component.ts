import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
  loginForm: FormGroup;
  constructor( private fb : FormBuilder){

    this.loginForm =  this.fb.group({
      UserName: ['',Validators.required],
      password: ['', [Validators.required]]
    });
  }

  onSubmit(){

    //
  }
}
