import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  catchError, map, mergeMap, tap,
} from 'rxjs/operators';
import { of } from 'rxjs';
import { ChatsService } from '../../services/chats.service';
import { getBotMessageFailed, getBotMessageSuccess, sendMessage } from '../actions/chats.action';

@Injectable()
export class ChatsEffect {
  constructor(private action$: Actions, private chatsService: ChatsService) {}

  botMessage$ = createEffect(() => this.action$.pipe(
    ofType(sendMessage),
    mergeMap((action) => this.chatsService.getChatBotMessage().pipe(
      map((messageResponse) => getBotMessageSuccess({
        botMessage: {
          time: new Date(),
          body: messageResponse[this.chatsService.getRandomMessage()].body,
          personal: false,
        },
        userId: action.userId,
      })),
      catchError(() => of(getBotMessageFailed({ errorMessage: 'The message didn\'t send successfully' }))),
    )),
  ));
}
