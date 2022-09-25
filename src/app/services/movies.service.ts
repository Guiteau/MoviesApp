import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Movie } from '../models/movies/popular/movie';
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

}
