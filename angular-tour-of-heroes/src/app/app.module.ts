import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [AppComponent, HeroesComponent, HeroDetailComponent, MessagesComponent, DashboardComponent],
  providers: [],
  imports:[BrowserModule, RouterModule, FormsModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}

