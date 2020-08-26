import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {

  entrepriseIsAuth = false;
  freelanceIsAuth = false;

  constructor() { }

  createNewFreelance(mail: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(mail, password).then(
          () => {
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  signInFreelance(mail: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(mail, password).then(
          () => {
            this.freelanceIsAuth = true;
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  signOutFreelance() {
    firebase.auth().signOut();
    this.freelanceIsAuth = false;
  }

  createNewEntreprise(mail: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(mail, password).then(
          () => {
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  signInEntreprise(mail: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(mail, password).then(
          () => {
            this.entrepriseIsAuth = true;
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  signOutEntreprise() {
    this.entrepriseIsAuth = false;
    firebase.auth().signOut();
  }
}
