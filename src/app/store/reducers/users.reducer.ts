import { createReducer, on } from '@ngrx/store';
import { InitialState } from '@ngrx/store/src/models';
import { User } from '../../models/chats.model';
import { LoadUsers, OpenFriendChat, RenderLastMessage } from '../actions/users.action';
import { getBotMessageSuccess, sendMessage } from '../actions/chats.action';

export interface UsersState {
  users: User[];
  selectedUserId: number;
  hasError?: boolean;
  errorMessage?: string;
}

const initialState: UsersState = {
  users: [],
  selectedUserId: null,
  hasError: false,
  errorMessage: '',
};

export const usersReducer = createReducer(
  initialState,
  on(LoadUsers, (state, action) => ({ ...state, users: action.users })),
  on(OpenFriendChat, (state, action) => ({ ...state, selectedUserId: action.userId })),
  on(sendMessage, (state, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    const newUsers = newState.users;
    newUsers.find((user) => user.id === action.userId).messages.push(action.message);
    return { ...newState, users: newUsers };
  }),
  on(getBotMessageSuccess, (state, action) => ({
    ...state,
    users: state.users.map((user) => {
      if (user.id === action.userId) {
        return { ...user, messages: [...user.messages, action.botMessage] };
      }
      return user;
    }),
  })),
  on(RenderLastMessage, (state, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    const newUsers = newState.users;
    const currentUser = newUsers.find((user) => user.id === action.userId);
    currentUser.outerMessage = currentUser.messages[currentUser.messages.length - 1].body;
    return { ...newState, users: newUsers };
  }),
);
