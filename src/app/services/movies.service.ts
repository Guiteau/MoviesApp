import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Movie } from '../models/movies/popular/movie';
import { RootObject } from '../models/error-api';
import { Detail } from '../models/movies/details/detail';
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

  /*  $-$ SCREEN 1 $-$
      
        ***CASE 1***
    - get lists
    - get popular movies (popularity is one of the properties)
    - get images (poster image)
    - get release dates
  */

  /*  $-$ SCREEN 2 $-$
      
        ***CASE 1***

    - get details
    - get images (poster image)
    - get release date

        ***CASE 2***

     - post rate movie
     - delete rate movie

  */

}
