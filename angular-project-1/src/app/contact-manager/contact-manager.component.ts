import { Component, OnInit } from '@angular/core';
import { icontact } from '../models/icontact';
import { ContactService } from '../services-contact/contact.service';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.sass']
})
export class ContactManagerComponent implements OnInit {
  [x: string]: any;
  contacts = new Array<icontact>();
  constructor(private contactService: ContactService) {
    contactService.GetallContacts().subscribe((data: icontact[]) => {
      this.contacts = data.map((contact => {
        return new icontact(
          contact._id,
          contact.name,
          contact.email,
          contact.mobile,
          contact.picture,
          contact.company,
          contact.role
        )
      }))
    })
  }

  ngOnInit(): void {
   this.GetallContacts();
  }

  GetallContacts(){
    this.contactService.GetallContacts().subscribe((data: icontact[]) => {
      this.contacts = data;
    })
  }
  delcontact(_id: string) {
    alert("are you sure you want to delete?")
    this.contactService.deleteContact(_id).subscribe((data: any) => {
      this.GetallContacts();
    })
  }
  refresh() {
    return true;
    }

}

