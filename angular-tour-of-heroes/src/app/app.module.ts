import { NgModule } from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';

import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, HeroesComponent],
  providers: [provideRouter(routes)],
  imports:[BrowserModule, RouterModule, FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}

