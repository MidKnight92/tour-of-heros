import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';
import { filter, map, noop, Subject, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent implements OnInit, OnDestroy{
  @Input() 
  public hero?: Hero;
  private destroyed$: Subject<void> = new Subject<void>();
  constructor(private activatedRoute: ActivatedRoute, private heroService: HeroService, private location: Location){}

  public ngOnInit(): void {
   const id: string | null = this.activatedRoute.snapshot.paramMap.get('id');

   id && this.heroService.getHero(id)
   .pipe(
    tap((currentHero: Hero): Hero => this.hero = currentHero),
    takeUntil(this.destroyed$)
   ).subscribe({next: noop, complete: noop, error: noop})
  }

  public ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  public goBack(): void {
    this.location.back();
  }
}
