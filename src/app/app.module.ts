import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Input } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { SigninEntrepriseComponent } from './auth/entreprise/signin-entreprise/signin-entreprise.component';
import { SignupEntrepriseComponent } from './auth/entreprise/signup-entreprise/signup-entreprise.component';
import { SignupFreelanceComponent } from './auth/freelance/signup-freelance/signup-freelance.component';
import { SigninFreelanceComponent } from './auth/freelance/signin-freelance/signin-freelance.component';
import { EntrepriseService } from './services/entreprise.service';
import { EntrepriseListComponent } from './entreprise-list/entreprise-list.component';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { EntrepriseViewComponent } from './entreprise-view/entreprise-view.component';

const appRoutes: Routes = [
  {path: 'signin/entreprise', component: SigninEntrepriseComponent},
  {path: 'view/entreprises' , component: EntrepriseListComponent},
  {path: 'signin/freelance', component: SigninFreelanceComponent},
  {path: 'view/entreprises/webseb', component: EntrepriseViewComponent},
  {path: '', component: WelcomeComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    SigninEntrepriseComponent,
    SignupEntrepriseComponent,
    SignupFreelanceComponent,
    SigninFreelanceComponent,
    EntrepriseListComponent,
    EntrepriseViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(appRoutes)
  ],
  providers: [
    EntrepriseService,
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
