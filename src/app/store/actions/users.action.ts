import { createAction, props } from '@ngrx/store';
import { User } from '../../models/chats.model';

export const LoadUsers = createAction(
  '[USERS] Load Users',
  props<{users: User[]}>(),
);

export const OpenFriendChat = createAction(
  '[USERS] Open Friend Chat',
  props<{userId: number}>(),
);

export const RenderLastMessage = createAction(
  '[USERS] Render Last Message',
  props<{userId: number}>(),
);
