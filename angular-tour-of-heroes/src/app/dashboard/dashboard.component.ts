import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { noop, tap } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  public heroes?: Hero[];

  constructor(private heroService: HeroService){}

  ngOnInit(): void {
    this.heroService.getHeroes()
      .pipe(
        tap((allHeroes: Hero[]) => this.heroes = allHeroes.slice(0, 5))
      )
      .subscribe({next: noop, complete: noop, error: noop});
  }
}
