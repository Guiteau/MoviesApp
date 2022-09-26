import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Session } from '../models/authentication/session';
import { Token } from '../models/authentication/token';

@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationService {

  private _isUserLoggedIn: boolean = false;

  apiKey: string = "";

  constructor(private http: HttpClient) {
    this.apiKey = '9e511612503f5cc31b92b28a22545026';
  }

  public get isUserLoggedIn() {
    return this._isUserLoggedIn;
  }

  public set isUserLoggedIn(isUserLoggedIn: boolean) {
    this._isUserLoggedIn = isUserLoggedIn;
  }

  getNewToken(): Promise<Token> {
    return new Promise((resolve, reject) => {
      this.http.get(environment.URLUserAuthentication + `token/new?api_key=${this.apiKey}`).subscribe(
        (token: any) => {
          resolve(token);
        },
        (error: any) => {
          console.log('Error trying to request a new token', error);
          reject(error);
        }
      );
    });
  }

  createSessionWithLogin(strToken: string, user: string, password: string): Promise<Session> {
    return new Promise((resolve, reject) =>
      this.http.post(environment.URLUserAuthentication + `token/validate_with_login?api_key=${this.apiKey}`, {
        username: user,
        password: password,
        request_token: strToken
      }).subscribe((session: any) => {
        resolve(session);
      },
        (error: any) => {
          console.log('Error trying to create a new session with login', error);
          reject(error);
        }
      ));
  }

  createSessionId(strToken: string): Promise<Session>{
    return new Promise((resolve, reject) =>
      this.http.post(environment.URLUserAuthentication + `session/new?api_key=${this.apiKey}`, {
        request_token: strToken
      }).subscribe((session: any) => {
        resolve(session);
      },
        (error: any) => {
          console.log('Error trying to request a new session id', error);
          reject(error);
        }
      ));
  }

}