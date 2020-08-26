import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-signin-entreprise',
  templateUrl: './signin-entreprise.component.html',
  styleUrls: ['./signin-entreprise.component.scss']
})
export class SigninEntrepriseComponent implements OnInit {

  entrepriseForm: FormGroup;
  errorMessage: string;
  isAuth: boolean;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.isAuth = this.authService.entrepriseIsAuth;
    this.initForm();
  }

  initForm() {
    this.entrepriseForm = this.formBuilder.group({
      mail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z/.+\-*_]/)]]
    });
  }

  onSubmit() {
    const mail = this.entrepriseForm.get('mail').value;
    const password = this.entrepriseForm.get('password').value;

    this.authService.signInEntreprise(mail, password).then(
      () => {
        this.isAuth = this.authService.entrepriseIsAuth;
        this.router.navigate(['/view', 'entreprises']);
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }

  onSignOut() {
    this.authService.signOutEntreprise();
    this.isAuth = false;
  }

}
