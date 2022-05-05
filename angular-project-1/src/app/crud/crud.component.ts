import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { icontact } from '../models/icontact';
import { ContactService } from '../services-contact/contact.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.sass']
})
export class CrudComponent implements OnInit {
public contact:icontact={} as icontact;

  profileForm!: FormGroup;
  constructor(private contactService : ContactService, private fb:FormBuilder,
    private router : Router) { }

  ngOnInit(): void {
this.profileForm= this.fb.group({
  name:[],
  email:[],
  number:[],
  organaization:[],
  role:[],
  pic:[]
})


  }
  onSubmit(){
    if(this.profileForm.invalid){
return;
    }

    if(this.profileForm.valid){
      this.contactService.createContact(this.contact).subscribe((data:icontact)=>{
this.router.navigate(['/contact-manager']).then();
      })
  }
  }
}
