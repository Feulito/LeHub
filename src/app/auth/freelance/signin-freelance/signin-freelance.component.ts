import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin-freelance',
  templateUrl: './signin-freelance.component.html',
  styleUrls: ['./signin-freelance.component.scss']
})
export class SigninFreelanceComponent implements OnInit {

  freelanceForm: FormGroup;
  errorMessage: string;
  isAuth: boolean;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.getAuth();
    this.initForm();
  }

  initForm() {
    this.freelanceForm = this.formBuilder.group({
      mail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z/.+\-*_]/)]]
    });
  }

  onSubmit() {
    const mail = this.freelanceForm.get('mail').value;
    const password = this.freelanceForm.get('password').value;

    this.authService.signInFreelance(mail, password).then(
      () => {
        this.isAuth = this.authService.freelanceIsAuth;
        this.router.navigate(['/view', 'freelances']);
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }

  onSignOut() {
    this.authService.signOutFreelance();
    this.isAuth = false;
  }

  disconnect() {
    this.isAuth = false;
  }

  getAuth() {
    this.isAuth = this.authService.freelanceIsAuth;
  }

}
