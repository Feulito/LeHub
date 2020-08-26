import { Component, OnInit} from '@angular/core';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isAuth: boolean;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    firebase.auth().onAuthStateChanged(
      (user) => {
        if (user) {
          this.isAuth = true;
        } else {
          this.isAuth = false;
        }
      }
    );
  }

  onDisconnect() {
    if (this.authService.entrepriseIsAuth) {
      this.authService.signOutEntreprise();
      console.log("Deconnexion");
    } else if (this.authService.freelanceIsAuth) {
      this.authService.signOutFreelance();
    }
  }

}
