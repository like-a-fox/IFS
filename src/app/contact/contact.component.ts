import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators, FormBuilder, FormGroup} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { AngularFireDatabase } from '../../../node_modules/angularfire2/database';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

export class ParentErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
      const isSubmitted = !!(form && form.submitted);
      const controlTouched = !!(control && (control.dirty || control.touched));
      const controlInvalid = !!(control && control.invalid);
      const parentInvalid = !!(control && control.parent && control.parent.invalid && (control.parent.dirty || control.parent.touched));

      return isSubmitted || (controlTouched && (controlInvalid || parentInvalid));
  }
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  contact: FormGroup;

  constructor(private fb: FormBuilder, private af: AngularFireDatabase) {
  }
  ngOnInit() {
      this.contact = this.fb.group({
        name: ['', Validators.required],
        email: ['', Validators.required, Validators.email],
        subject: ['', Validators.required],
        message: ['', Validators.required]
      });
    }
  
    onSubmit() {
      const {name, email, subject, message} = this.contact.value;
      const date = Date();
      const html = `
        <div>From: ${name}</div>
        <div>Email: <a href="mailto:${email}">${email}</a></div>
        <div>Date: ${date}</div>
        <div>Subject: ${subject}</div>
        <div>Message: ${message}</div>
      `;
      let formRequest = { name, email, subject, message, date, html };
      this.af.list('/messages').push(formRequest);
      this.contact.reset();
    }
  
    matcher = new MyErrorStateMatcher();
  }
  
  
