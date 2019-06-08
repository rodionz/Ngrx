import { Action } from '@ngrx/store';
import { User } from '../model/user.model';

export enum AuthActionTypes {
  LoginAction = '[Login] Action',
  LogoutAction = '[Logout] Action'


}

export class Login implements Action {
  constructor(payLoad: {user:User}){

  }
  readonly type = AuthActionTypes.LoginAction;
}


export type AuthActions = Login;
