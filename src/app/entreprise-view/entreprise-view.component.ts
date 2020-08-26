import { Component, OnInit } from '@angular/core';
import { Entreprise } from '../models/entreprise.model';
import { Subscription } from 'rxjs';
import { EntrepriseService } from '../services/entreprise.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entreprise-view',
  templateUrl: './entreprise-view.component.html',
  styleUrls: ['./entreprise-view.component.scss']
})
export class EntrepriseViewComponent implements OnInit {

  entreprises : Entreprise[];
  entrepriseSubscription : Subscription;

  constructor(private entrepriseService : EntrepriseService,
              private router : Router) { }

  ngOnInit() {
    this.entrepriseSubscription = this.entrepriseService.entrepriseSubject.subscribe(
      (e: Entreprise []) => {
        this.entreprises = e;
      }
    );
    this.entrepriseService.getEntrepriseByName("webseb");
    this.entrepriseService.emitEntreprises();
  }

  ngOnDestroy() {
    this.entrepriseSubscription.unsubscribe();
  }

}
