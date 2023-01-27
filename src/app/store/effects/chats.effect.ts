import { Injectable, ViewChild } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  catchError, delay, finalize, map, mergeMap, switchMap, tap,
} from 'rxjs/operators';
import { of } from 'rxjs';
import { ChatsService } from '../../services/chats.service';
import { getBotMessageFailed, getBotMessageSuccess, sendMessage } from '../actions/chats.action';
import { UserChatComponent } from '../../modules/chats/components/user-chat/user-chat.component';
import {RenderLastMessage} from "../actions/users.action";

@Injectable()
export class ChatsEffect {

  constructor(private action$: Actions, private chatsService: ChatsService) {}

  botMessage$ = createEffect(() => this.action$.pipe(
    ofType(sendMessage),
    mergeMap((action) => this.chatsService.getChatBotMessage().pipe(
      mergeMap((messageResponse) => [getBotMessageSuccess({
        botMessage: {
          time: new Date(),
          body: messageResponse[this.chatsService.getRandomMessage()].name,
          personal: false,
        },
        userId: action.userId,
      }), RenderLastMessage({userId: action.userId})]),
      finalize(() => this.chatsService.isMessageSent.next(true)),
      catchError(() => of(getBotMessageFailed({ errorMessage: 'Bot server error' }))),
    )),
  ));
}
