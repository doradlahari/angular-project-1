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

  public contactId: string | null = null;
  public contact: icontact = {} as icontact;
  constructor(private activatedRoute: ActivatedRoute,
    private contactService: ContactService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.contactId = param.get('contactId')
    });
    if (this.contactId) {
      this.contactService.getContact(this.contactId).subscribe((data: icontact) => {
        this.contact = data;
      })
    }
  }
public isNotEmpty(){
  return Object.keys(this.contact).length>0;
}
}
