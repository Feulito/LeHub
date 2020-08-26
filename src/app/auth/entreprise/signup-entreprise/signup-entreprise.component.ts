import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EntrepriseService } from 'src/app/services/entreprise.service';
import { Router } from '@angular/router';
import { Entreprise } from 'src/app/models/entreprise.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup-entreprise',
  templateUrl: './signup-entreprise.component.html',
  styleUrls: ['./signup-entreprise.component.scss']
})
export class SignupEntrepriseComponent implements OnInit {

  entrepriseForm: FormGroup;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder,
              private entrepriseService: EntrepriseService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.entrepriseForm = this.formBuilder.group({
      nom: ['', [Validators.required]],
      mail: ['', [Validators.required, Validators.email]],
      siret: ['', [Validators.required, Validators.pattern(/[0-9]{14,14}/)]],
      dirigeant: ['', [Validators.required]],
      description: '',
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z/.+\-*_]{6,}/)]]
    });
  }

  onSubmit() {
    const mail = this.entrepriseForm.get('mail').value;
    const password = this.entrepriseForm.get('password').value;
    const nom = this.entrepriseForm.get('nom').value;
    const siret = this.entrepriseForm.get('siret').value;
    const dirigeant = this.entrepriseForm.get('dirigeant').value;
    const description: string = this.entrepriseForm.get('description').value;

    const entreprise = new Entreprise(nom, mail, siret, dirigeant);
    if (description) {
      entreprise.setDescription(description);
    }

    this.authService.createNewEntreprise(mail, password);
    this.entrepriseService.createNewEntreprise(entreprise);
    this.router.navigate(['/view', 'entreprises']);
  }

}
