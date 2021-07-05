import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { MenusComponent } from './menus/menus.component';
import { NewsComponent } from './news/news.component';
import { MatchComponent } from './match/match.component';
import { ResultatComponent } from './resultat/resultat.component';
import { ClubComponent } from './club/club.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { DetailequipeComponent } from './detailequipe/detailequipe.component';
import { DetaileMatchComponent } from './detaile-match/detaile-match.component';

const routes:Routes = [
   
  {
    path:"",
    component:AcceuilComponent
  },
  {
    path:"match",
    component:MatchComponent
  },
  {
    path:"Resultat",
    component:ResultatComponent
  },
  {
    path:"Club",
    component:ClubComponent
  },
  {
    path:"detaillequipe",
    component:DetailequipeComponent
  },
  {
    path:"detailMatch",
    component:DetaileMatchComponent
  },
]
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenusComponent,
    NewsComponent,
    MatchComponent,
    ResultatComponent,
    ClubComponent,
    AcceuilComponent,
    DetailequipeComponent,
    DetaileMatchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
