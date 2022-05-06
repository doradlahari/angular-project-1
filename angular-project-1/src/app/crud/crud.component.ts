
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
  users = new Array< icontact>();

  profileForm!: FormGroup;
  
  constructor(private contactService : ContactService, private fb:FormBuilder,
    private router : Router) { }

  ngOnInit(): void {
this.profileForm= this.fb.group({
  name:[],
  email:[],
  mobile:[],
  company:[],
  role:[],
  picture:[]
})


  }
  onSubmit(){
    if(this.profileForm.invalid){
return;
    }

    if(this.profileForm.valid){
      this.contactService.createContact(this.profileForm.value).subscribe((data:icontact)=>{
console.log("created",data);
this.users.push(data);
this.router.navigate(['contact-manager'])
      })
  }
  }
}
