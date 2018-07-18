import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup} from '@angular/forms';
import { AngularFireDatabase } from '../../../node_modules/angularfire2/database';



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
  
  }
  
  
