import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.sass']
})
export class ContactUsComponent implements OnInit {

  [x: string]: any;
  users:any;
  registerform!: FormGroup;
 submitted = false;
 constructor(private formBuilder: FormBuilder, private router:Router) { }

 ngOnInit(): void {
   this.registerform = this.formBuilder.group(
     {
       FirstName: ['', Validators.required],
       email: ['', [Validators.required, Validators.email]],
       Mobile: ['', [
         Validators.required,
         Validators.maxLength(10),
         Validators.pattern('[6-9]\\d{9}'),
       ],],
       textarea: ['',Validators.compose([
           Validators.required,
           Validators.minLength(25),
           Validators.maxLength(50)])],
    },

   );
 }



 get f(): { [key: string]: AbstractControl } {
   return this.registerform.controls;
 }
 MustMatch(ControlName: string, matchingControlName: string){
return(FormGroup: FormGroup)=>{
 const control=FormGroup.controls[ControlName];
 const MatchingControl=FormGroup.controls[matchingControlName];
 if(MatchingControl.errors && ! MatchingControl.errors['MustMatch']){
   return
 }
 if(control.value !==MatchingControl.value){
   MatchingControl.setErrors({MustMatch:true});
 }
 else{
   MatchingControl.setErrors(null);
 }
}
 }

 onSubmit(){
   this.submitted = true;

   if (this.registerform.invalid) {
     return;
   }
   if (this.registerform.valid) {
     this.users = this.registerform.value;
     // this.Employlees.push(this.registerform.value);
     alert("Message Sent Successfully")
     this.router.navigate(['contact-us']);
   }

   console.log(JSON.stringify(this.registerform.value, null, 2));
 }
 onReset(): void {
   this.submitted = false;
   this.registerform.reset();
 }

}