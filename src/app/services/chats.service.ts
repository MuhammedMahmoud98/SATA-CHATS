import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BotResponse } from '../models/bot.model';

@Injectable({
  providedIn: 'root',
})
export class ChatsService {
  constructor(private http: HttpClient) { }

  getChatBotMessage(): Observable<BotResponse[]> {
    return this.http.get<BotResponse[]>('https://jsonplaceholder.typicode.com/comments');
  }

  getRandomMessage() {
    return Math.ceil(Math.random() * 500);
  }
}
