import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl,Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-backend',
  templateUrl: './backend.component.html',
  styleUrls: ['./backend.component.css']
})
export class BackendComponent implements OnInit {
  postUrl:string ='https://szelwh4c0d.execute-api.us-east-1.amazonaws.com/Final';
  headers = new HttpHeaders().set('content-type', 'application/json') ;
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


  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  onFormSubmit(angForm): void {

    console.log('Name:' + this.angForm.get('name').value);
    console.log('RollNO:' + this.angForm.get('rollno').value);
    console.log('Sapid:' + this.angForm.get('sapid').value);
    console.log('Total Classes:' + this.angForm.get('totalclasses').value);
    console.log('Days Present:' + this.angForm.get('dayspresent').value);

    
    const formData= new FormData();
    formData.append('name', this.angForm.get('name').value);
    formData.append('sapid', this.angForm.get('sapid').value);
    formData.append('rollno', this.angForm.get('rollno').value);
    formData.append('totalclasses', this.angForm.get('totalclasses').value);
    formData.append('dayspresent', this.angForm.get('dayspresent').value);
    const form = JSON.stringify(formData);
    this.httpClient.post(this.postUrl, form, { headers: new  HttpHeaders().set('content-type','application/json')}).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)

    
    )
  }
}
