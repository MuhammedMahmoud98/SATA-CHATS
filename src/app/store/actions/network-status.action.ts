import { createAction, props } from '@ngrx/store';

export const CheckNetworkStatus = createAction(
  '[NETWORK] CHECK NETWORK STATUS',
  props<{status?: boolean, statusMessage?: string}>(),
);
