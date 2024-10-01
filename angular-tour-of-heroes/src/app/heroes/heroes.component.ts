import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent implements OnInit {
  public heroes: Observable<Hero[]> = of([]);

  constructor(private heroService: HeroService){}

  public ngOnInit(): void {
    this.heroes = this.heroService.getHeroes();
  }
}
