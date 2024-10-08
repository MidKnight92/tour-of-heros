import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messages: string[] = [];
  constructor() { }

  public add(newMessage: string){
    this.messages.push(newMessage);
  }

  public clear(): Observable<string[]>{
    this.messages = []
    return of(this.messages);
  }

  public getMessages(): Observable<string[]> {
    return of(this.messages);
  }
}
