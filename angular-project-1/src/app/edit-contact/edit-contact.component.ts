import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { icontact } from '../models/icontact';
import { ContactService } from '../services-contact/contact.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.sass']
})
export class EditContactComponent implements OnInit {

  profileForm!: FormGroup;
  id!: number;
  contactService: any;
  // contacts = new Array<icontact>();
  contacts: any = {};

  constructor(private fb: FormBuilder, private activateroute: ActivatedRoute, private router: Router, private commonserv: ContactService) { }

  ngOnInit(): void {

    this.profileForm = this.fb.group({
      name: [],
      email: [],
      mobile: [],
      company: [],
      role: [],
      picture: []
    })
    this.id = this.activateroute.snapshot.params['contactId'];
    this.commonserv.getContact(this.id).subscribe((data) => {
      this.contacts = data
      // this.profileForm.setValue(data);
    }

    );
  }
  onSubmit() {
    if (this.profileForm.invalid) {
      return;
    }

    if (this.profileForm.valid) {
      this.commonserv.updateContact(this.id, this.profileForm.value).subscribe((data: icontact) => {
        console.log("created", data);
        this.router.navigate(['contact-manager'])
      })
    }
  }

}
