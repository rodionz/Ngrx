import { Action } from '@ngrx/store';
import { User } from '../../model/user.model';
import { AuthActions } from '../auth.actions';


export interface AuthState {
 loggedIn: boolean,
 user:User
}

export const initialAuthState: AuthState = {
loggedIn:false,
user:undefined
};

export function authReducer(state = initialAuthState, action: AuthActions): AuthState {
  switch (action.type) {

    default:
      return state;
  }
}
