import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent implements OnInit {
  public messages: Observable<string[]> = of([]);

  constructor(private messageService: MessageService){}

  public ngOnInit(): void {
    this.messages = this.messageService.getMessages();
  }

  public clearMessages(): void {
    this.messageService.clear();
  }
}
