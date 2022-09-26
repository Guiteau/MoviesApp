import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Movie } from '../models/movies/popular/movie';
import { Detail } from '../models/movies/details/detail';
import { Status } from '../models/status';
import { Session } from '../models/authentication/session';
import { Credits } from '../models/movies/details/credits.model';
import { AccountStates } from '../models/movies/details/account-states.model';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  apiKey: string;
  region: string;
  language: string;

  constructor(private http: HttpClient) {

    this.apiKey = '9e511612503f5cc31b92b28a22545026';
    this.language = 'en-US';
    this.region = 'US';

  }

  getPopularMovies(page: number): Promise<Movie>{
    return new Promise((resolve, reject) => {
      this.http.get(environment.URLMovies + `popular?api_key=${this.apiKey}&language=${this.language}&page=${page}&region=${this.region}`).subscribe(
        (popularMoviesResults: any) => {
          resolve(popularMoviesResults);
        },
        (error: any) =>{
          console.log('Error trying to get popular movies list', error);
          reject(error);
        }
      );
    });
  }

  getMovieDetails(idMovie: number): Promise<Detail>{
    return new Promise((resolve, reject) => {
      this.http.get(environment.URLMovies + `${idMovie}?api_key=${this.apiKey}&language=${this.language}`).subscribe(
        (movieDetails: any) => {
          resolve(movieDetails);
        },
        (error: any) =>{
          console.log('Error trying to get popular movies list', error);
          reject(error);
        }
      );
    });
  }

  public getMovieCredits(idMovie: number): Promise<Credits>{
    return new Promise((resolve, reject) => {
      this.http.get(environment.URLMovies + `${idMovie}/credits?api_key=${this.apiKey}&language=${this.language}`).subscribe(
        (movieDetails: any) => resolve(movieDetails),
        (error: any) => reject(error));
    });
  }

  public getMovieAccountStates(idMovie: number): Promise<AccountStates>{
    return new Promise((resolve, reject) => {
      this.http.get(environment.URLMovies + `${idMovie}/account_states?api_key=${this.apiKey}&session_id=${localStorage.getItem('movie-app-session-id')}&language=${this.language}`).subscribe(
        (accountStates: any) => resolve(accountStates),
        (error: any) => reject(error));
    });
  }

  getMoviesSearch(query: string, page: number): Promise<Movie> {
    return new Promise((resolve, reject) => {
      this.http.get(environment.URLSearchMovies + `?api_key=${this.apiKey}&language=${this.language}&query=${query}&page=${page}&include_adult=false`).subscribe(
        (popularMoviesResults: any) => {
          resolve(popularMoviesResults);
        },
        (error: any) =>{
          console.log('Error trying to get searched movies list', error);
          reject(error);
        }
      );
    });
  }

  rateMovie(movieId: number, rating: number): Promise<Status>{

    let headers = new HttpHeaders({
      'Content-Type': 'application/json;charset=utf-8'});

    return new Promise((resolve, reject) =>
    this.http.post(environment.URLMovies + `${movieId}/rating?api_key=${this.apiKey}&session_id=${localStorage.getItem('movie-app-session-id')}`, {
      value: rating
    }, {headers: headers}).subscribe((session: any) => {
      resolve(session);
    },
      (error: any) => {
        console.log('Error trying to rate a movie', error);
        reject(error);
      }
    ));
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


}
