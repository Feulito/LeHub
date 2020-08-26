import { Component, OnInit, OnDestroy } from '@angular/core';
import { Entreprise } from 'src/app/models/entreprise.model';
import { Subscription } from 'rxjs';
import { EntrepriseService } from 'src/app/services/entreprise.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entreprise-list',
  templateUrl: './entreprise-list.component.html',
  styleUrls: ['./entreprise-list.component.scss']
})
export class EntrepriseListComponent implements OnInit, OnDestroy {

  entreprises: Entreprise[] = [];
  entrepriseSubscription: Subscription;

  constructor(private entrepriseService: EntrepriseService,
              private router: Router) { }

  ngOnInit() {
    this.entrepriseSubscription = this.entrepriseService.entrepriseSubject.subscribe(
      (entreprises: Entreprise[]) => {
        this.entreprises = entreprises;
      }
    );
    this.entrepriseService.getEntreprises();
    this.entrepriseService.emitEntreprises();
  }

  ngOnDestroy() {
    this.entrepriseSubscription.unsubscribe();
  }

}
