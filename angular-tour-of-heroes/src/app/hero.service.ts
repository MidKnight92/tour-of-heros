import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heros';
import { EMPTY, Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  public getHero(id: string): Observable<Hero> {
    const hero = HEROES.find(hero => hero.id === +id);
    hero && this.messageService.add(`HeroService: fetched her for id=${id}`)
    return hero ? of(hero) : EMPTY;
  }

  public getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
