import { createAction, props } from '@ngrx/store';
import { Message } from '../../models/chats.model';
import {ElementRef} from "@angular/core";

export const sendMessage = createAction(
  '[CHATS] Send Message',
  props<{message: Message, userId: number}>(),
);

export const getBotMessage = createAction(
  '[CHATS] Get Bot Message',
);

export const getBotMessageSuccess = createAction(
  '[CHATS] Get Bot Message Success',
  props<{botMessage: Message, userId: number}>(),
);


export const getBotMessageFailed = createAction(
  '[CHATS] Get Bot Message Failed',
  props<{errorMessage: string}>(),
);

