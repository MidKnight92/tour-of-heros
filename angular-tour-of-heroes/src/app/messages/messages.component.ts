import { Component, OnDestroy, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { BehaviorSubject, noop, Observable, of, Subject, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent implements OnInit, OnDestroy {
  private messagesSubject: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  public messages$: Observable<string[]> = this.messagesSubject.asObservable();
  private destroy$: Subject<void> = new Subject<void>();


  constructor(private messageService: MessageService){}

  public ngOnInit(): void {
    this.messageService.getMessages()
    .pipe(
      tap((messages) => this.messagesSubject.next(messages)),
      takeUntil(this.destroy$)
    ).subscribe({next: noop, complete: noop, error: noop});
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public clearMessages(): void {
    this.messageService.clear()
    .pipe(
      tap((messages) => this.messagesSubject.next(messages)),
      takeUntil(this.destroy$)
    ).subscribe({next: noop, complete: noop, error: noop});
   }
}
