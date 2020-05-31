

import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser';
import 'rxjs/add/operator/map';
import { ModuleWithProviders, NgModule} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'studentPortal';
  angForm = new FormGroup({
    name: new FormControl('', Validators.required),
    rollno: new FormControl('', Validators.required),
    sapid: new FormControl('', Validators.required),
    totalclasses: new FormControl('', Validators.required),
    dayspresent: new FormControl('', Validators.required),
  });

  get name(): any {
    return this.angForm.get('name');
  }
  get rollno(): any {
    return this.angForm.get('rollno');
  }
  get sapid(): any {
    return this.angForm.get('sapid');
  } 
  get totalclasses(): any {
    return this.angForm.get('totalclasses');
  }
  get dayspresent(): any {
    return this.angForm.get('dayspresent');
  }
  
  onFormSubmit(): void {
    console.log('Name:' + this.angForm.get('name').value);
    console.log('RollNO:' + this.angForm.get('rollno').value);
    console.log('Sapid:' + this.angForm.get('sapid').value);
  }
}
  
  


