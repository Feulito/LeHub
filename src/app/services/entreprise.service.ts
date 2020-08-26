import { Injectable } from '@angular/core';
import { Entreprise } from '../models/entreprise.model';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {

  entreprises: Entreprise[] = [];
  entrepriseSubject = new Subject<Entreprise[]>();

  constructor() { }

  emitEntreprises() {
    this.entrepriseSubject.next(this.entreprises);
  }

  getEntreprises() {
    firebase.database().ref('/entreprises').on('value',
    (data) => {
      this.entreprises = data.val() ? data.val() : [];
      this.emitEntreprises();
    });
  }
  
  getEntrepriseByName(name: string) {
    firebase.database().ref('/entreprises').orderByChild("nom").equalTo(name).on("value",
    (data) => {
      this.entreprises = data.val() ? data.val() : [];
      this.emitEntreprises();
    });
  }

  getEntreprise(i: number) {
    if (i < this.entreprises.length) {
      return this.entreprises[i];
    }
  }

  saveEntreprises() {
    firebase.database().ref('/entreprises').set(this.entreprises);
  }

  createNewEntreprise(entreprise: Entreprise) {
    this.entreprises.push(entreprise);
    this.saveEntreprises();
    this.emitEntreprises();
  }

  removeEntreprise(entreprise: Entreprise) {
    const bookIndexToRemove = this.entreprises.findIndex(
      (ent) => {
        if (ent === entreprise) {
          return true;
        }
      }
    );
    this.entreprises.splice(bookIndexToRemove, 1);
    this.saveEntreprises();
    this.emitEntreprises();
  }
}
