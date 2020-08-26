import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: 'AIzaSyCL15uog-obH1VpWaWobo-BPA3vCW8Po_c',
      authDomain: 'lehub-e5325.firebaseapp.com',
      databaseURL: 'https://lehub-e5325.firebaseio.com',
      projectId: 'lehub-e5325',
      storageBucket: 'lehub-e5325.appspot.com',
      messagingSenderId: '868550374732',
      appId: '1:868550374732:web:3da8cb9ad41b9afaa7cbe9',
      measurementId: 'G-CDSHTDKWZD'
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }
}

