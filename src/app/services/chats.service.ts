import { Injectable, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { BotResponse } from '../models/bot.model';
import { UserChatComponent } from '../modules/chats/components/user-chat/user-chat.component';

@Injectable({
  providedIn: 'root',
})
export class ChatsService {
  isMessageSent: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  showScrollDownBtn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }

  getChatBotMessage(): Observable<BotResponse[]> {
    return this.http.get<BotResponse[]>('https://jsonplaceholder.typicode.com/comments');
  }

  getRandomMessage() {
    return Math.ceil(Math.random() * 500);
  }

  logUserChat() {
    // console.log(this.userChatComponent, 'CHAT COMP');
  }
}
