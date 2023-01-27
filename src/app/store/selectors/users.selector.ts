import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UsersState } from '../reducers/users.reducer';
import { User } from '../../models/chats.model';

const getUsersState = createFeatureSelector<UsersState>('usersReducer');

export const getUsers = createSelector(getUsersState, (state) => state.users);
export const getSelectedUserId = createSelector(getUsersState, (state) => state.selectedUserId);

export const getSelectedUser = createSelector(
  getUsers,
  getSelectedUserId,
  (users: User[], userId: number) => users.filter((user) => user.id === userId)[0],
);

export const getNetworkStatus = createSelector(
  getUsersState,
  (state) => ({ errorMessage: state.errorMessage, hasError: state.hasError }),
);
