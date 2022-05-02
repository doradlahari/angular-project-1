import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.sass']
})
export class SignInComponent implements OnInit {
  loginForm: any;
  submitted!: boolean;
  constructor(private formBuilder: FormBuilder, private router: Router,) {
    this.loginForm = this.formBuilder.group({
      email: ['',[
        Validators.required,
        Validators.email,
        Validators.
        pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
      ],],
      password: ['', Validators.required],
    });
  }
  ngOnInit(): void {
  }
  get f() {
    return this.loginForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    if (this.loginForm.valid) {
      this.router.navigate(['home']);
    }
  }
}