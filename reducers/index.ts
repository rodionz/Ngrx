import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import {storeFreeze} from 'ngrx-store-freeze';
import { environment } from '../../environments/environment';
import {  AuthActionTypes } from './../auth/auth.actions';
import { User } from '../model/user.model';
import { AuthActions } from '../auth/auth.actions';
import { routerReducer } from '@ngrx/router-store';


// tslint:disable-next-line:interface-over-type-literal
type AuthState = {

};

// const initialAuthState: AuthState = {
//   loggedIn: false,
//   user: undefined
// };

// tslint:disable-next-line:no-empty-interface
export interface AppState {

}


// function authReducer(state: AuthState = initialAuthState, action): AuthState {
//   switch (action.type){
//     case AuthActionTypes.LoginAction:
//       return {
//         loggedIn: true,
//         user: action.payLoad.user
//       };

//       default:
//         return state;
//   }
// }


export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [storeFreeze] : [];
