import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { session } from '../models/authentication/session';
import { token } from '../models/authentication/token';

@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationService {

  apiKey: string = "";

  constructor(private http: HttpClient) {
    this.apiKey = '9e511612503f5cc31b92b28a22545026';
   }

  getNewToken(): Promise<token>{
    return new Promise((resolve, reject) => {
      this.http.get(environment.URLUserAuthentication + `token/new?api_key=${this.apiKey}`).subscribe(
        (token: any) => {
          resolve(token);
        },
        (error: any) =>{
          console.log('Error trying to request a new token', error);
          reject(error);
        }
      );
    });
  }

  //not finished let it there
  createSession(strToken: string){
    // return new Promise((resolve, reject) => {
    //   this.http.get(environment.URLUserAuthentication + `session/new?api_key=${this.apiKey}`).subscribe
    // })
    this.http.post(environment.URLUserAuthentication + `session/new?api_key=${this.apiKey}`, JSON.stringify({
      request_token: strToken
    })).subscribe(
      data => {
        return data;
      },
      error => {
        console.log(JSON.stringify(error.json()));
      }
    )
  }



}


