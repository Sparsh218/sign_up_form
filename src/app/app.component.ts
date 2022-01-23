import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { StringCompare } from './validators/compare-validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'sign-up-form';

  registerForm: FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
      
    this.registerForm = this.formBuilder.group({
      firstName: ["",Validators.required],
      lastName: ["",Validators.required],
      email: ["",[Validators.required, Validators.email]],
      password: ["",[Validators.required, Validators.minLength(6)]],
      confirmPassword: ["",Validators.required],
      tcs: [false,Validators.required],
    } , {
      validators: StringCompare("password","confirmPassword")
    });

  }

  get registerFormControl() {
    
    return this.registerForm.controls;

  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
  }

}
