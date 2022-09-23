import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesResponseService {

  constructor(private httpClient: HttpClient) { }

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
