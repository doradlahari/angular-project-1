import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { GoogleApiService, UserInfo } from '../google-api.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  title = 'angular-google-oauth-example';

  mailSnippets: string[] = []
  userInfo?: UserInfo;
  [x: string]: any;
  users: any;
  registerform!: FormGroup;
  submitted = false;
  constructor(private readonly googleApi: GoogleApiService , private formBuilder: FormBuilder, private router: Router) { 
    googleApi.userProfileSubject.subscribe( info => {
      this.userInfo = info
    })
  }

  ngOnInit() {
    this.registerform = this.formBuilder.group(
      {
        FirstName: ['', [ Validators.minLength(4), Validators.required,Validators.pattern("^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$")]],
        email: ['', [
          Validators.required,
          Validators.email,
          Validators.
            pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
        ],],
        Mobile: ['', [
          Validators.required,
          Validators.maxLength(10),
          Validators.pattern('[6-9]\\d{9}'),
        ],],
        password: ['', Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(30)])],
        repassword: ['', Validators.required],
        city:['', Validators.required],
        acceptTerms:['',Validators.required],
        gender: ['', Validators.required]
      },
      {
        validators: this.MustMatch('password', 'repassword')
      },

    )
  }
 


  get f(): { [key: string]: AbstractControl } {
    return this.registerform.controls;
  }
  MustMatch(ControlName: string, matchingControlName: string) {
    return (FormGroup: FormGroup) => {
      const control = FormGroup.controls[ControlName];
      const MatchingControl = FormGroup.controls[matchingControlName];
      if (MatchingControl.errors && !MatchingControl.errors['MustMatch']) {
        return
      }
      if (control.value !== MatchingControl.value) {
        MatchingControl.setErrors({ MustMatch: true });
      }
      else {
        MatchingControl.setErrors(null);
      }
    }
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerform.invalid) {
      return;
    }
    if (this.registerform.valid) {
      this.users = this.registerform.value;
      // this.Employlees.push(this.registerform.value);
      this.router.navigate(['']);
    }

    console.log(JSON.stringify(this.registerform.value, null, 2));
  }

  isLoggedIn(): boolean {
    return this.googleApi.isLoggedIn()
  }

  logout() {
    this.googleApi.signOut()
  }
  async getEmails() {
    if (!this.userInfo) {
      return;
    }
 const userId = this.userInfo?.info.sub as string
    const messages = await lastValueFrom(this.googleApi.emails(userId))
    messages.messages.forEach( (element: any) => {
      const mail = lastValueFrom(this.googleApi.getMail(userId, element.id))
      mail.then( mail => {
        this.mailSnippets.push(mail.snippet)
      })
    });
  }
}


