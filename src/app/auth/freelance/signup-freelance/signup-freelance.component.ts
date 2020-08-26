import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-freelance',
  templateUrl: './signup-freelance.component.html',
  styleUrls: ['./signup-freelance.component.scss']
})
export class SignupFreelanceComponent implements OnInit {

  freelanceForm: FormGroup;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.freelanceForm = this.formBuilder.group({
      mail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z/.+\-*_]{6,}/)]]
    });
  }

  onSubmit() {
    const mail = this.freelanceForm.get('mail').value;
    const password = this.freelanceForm.get('password').value;

    this.authService.createNewFreelance(mail, password);
    this.router.navigate(['/view', 'entreprises']);
  }

}
