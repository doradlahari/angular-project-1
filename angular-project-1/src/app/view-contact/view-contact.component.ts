import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { icontact } from '../models/icontact';
import { ContactService } from '../services-contact/contact.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.sass']
})
export class ViewContactComponent implements OnInit {
  contacts: any = {};
  // contacts = new Array<icontact>();
  _id!: string;
  constructor(private contactService: ContactService, private activateroute: ActivatedRoute) {
    contactService.getContact(this._id).subscribe((data: icontact[]) => {
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
    this._id = this.activateroute.snapshot.params['contactId'];    
    this.contactService.getContact(this._id).subscribe((data: any) => {
      // console.log("============sada", data);
      
      this.contacts = data;
    })
  }
}
