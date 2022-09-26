import { ChangeDetectorRef, Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { IgxPaginatorComponent } from 'igniteui-angular';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from 'src/app/models/movies/popular/movie';
import { Router } from '@angular/router';
import { UserAuthenticationService } from 'src/app/services/user-authentication.service';
import { token } from 'src/app/models/authentication/token';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movies-list-view',
  templateUrl: './movies-list-view.component.html',
  styleUrls: ['./movies-list-view.component.scss']
})
export class MoviesListViewComponent implements OnInit, AfterViewInit {

  @ViewChild('paginator', { static: true }) public paginator!: IgxPaginatorComponent;
  public searchMovie: string = "";
  public totalPagesPopular: number = 0;
  public totalPagesSearch: number = 0;
  public density: any = 'comfortable';
  public popularMoviesList: Movie[] = [];
  public moviesSearchList: Movie[] = [];
  public showSearchedResults: boolean = false;

  constructor(
    public cdr: ChangeDetectorRef,
    public authenticationService: UserAuthenticationService,
    private moviesService: MoviesService,
    private router: Router
  ) { }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  ngOnInit(): void {
    this.getPopularMovies(1);
  }

  public signIn(): void {
    this.authenticationService.getNewToken()
      .then((token: token) => {
        localStorage.setItem('movie-app-token', token.request_token);
        window.location.href = environment.URLToAskUserPermission + token.request_token + '?redirect_to=http://localhost:4200/log-in';
      })
      .catch((error: any) => {
        window.alert('An error ocurred trying to generate a new token, please try again');
      });
  }

  public onChange(event: any): void {
    if (event === '') {
      this.searchMovie = '';
      this.showSearchedResults = false;
    }
  }

  public getMoviesSearch(page: number) {
    if (this.searchMovie.length > 0) {
      this.searchMovie = this.searchMovie.trim()
      this.moviesService.getMoviesSearch(this.searchMovie, page).then((response: any) => {
        if (response == undefined)
          console.log('Promise getMoviesSearch() undefined response');
        this.moviesSearchList = response["results"];
        this.totalPagesSearch = response["total_pages"];
        this.showSearchedResults = this.moviesSearchList.length > 0;
      })
    } else {
      this.showSearchedResults = false;
    }
  }

  public getPopularMovies(page: number) {
    this.moviesService.getPopularMovies(page).then((response: any) => {
      if (response == undefined)
        console.log('Promise getPopularMovies() undefined response');
      this.popularMoviesList = response["results"];
      this.totalPagesPopular = response["total_pages"];
    })
  }

  public navigateToFirstPage() {
    this.paginator.page = 0;
  }

  public onPageChange(page: number) {
    this.getPopularMovies(page + 1);
  }

}
