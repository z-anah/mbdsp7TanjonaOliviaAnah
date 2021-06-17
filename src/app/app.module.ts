import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BackComponent } from './back/back.component';
import { Routes, RouterModule } from '@angular/router';
import { NavigBarComponent } from './back/navig-bar/navig-bar.component';
import { TopBarComponent } from './back/top-bar/top-bar.component';
import { FooterComponent } from './back/footer/footer.component';
import { DashboardComponent } from './back/pages/dashboard/dashboard.component';
import { GestionUserComponent } from './back/pages/gestion-user/gestion-user.component';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './back/pages/gestion-moderator/register/register.component';
import { HttpClientModule } from '@angular/common/http';
const routes:Routes = [
  { path: '', component: AuthComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'authentification', component: AuthComponent},
  { path: 'back', component: BackComponent, children: [
    {
      path: '',
      component: DashboardComponent
    },
    {
      path: 'dashboard',
      component: DashboardComponent
    },
    {
      path: 'gestionUtilisateur',
      component: GestionUserComponent
    },
    {
      path: 'ajoutModerateur',
      component: RegisterComponent
    }
  ]}
]
@NgModule({
  declarations: [
    AppComponent,
    BackComponent,
    NavigBarComponent,
    TopBarComponent,
    FooterComponent,
    DashboardComponent,
    GestionUserComponent,
    AuthComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
