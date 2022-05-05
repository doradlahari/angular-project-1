import { Component, OnInit } from '@angular/core';
import { icontact } from '../models/icontact';
import { ContactService } from '../services-contact/contact.service';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.sass']
})
export class ContactManagerComponent implements OnInit {
  public loading: boolean = false;
  public contacts: icontact[] = [];
  public errorMessage: string | null = null;
  constructor(private contactService: ContactService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.contactService.GetallContacts().subscribe((data: icontact[]) => {
      this.contacts = data;
      this.loading = false;
    }, (error) => {
      this.errorMessage = error;
      this.loading = false;
    })
  }

}
