import { ChangeDetectorRef, Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { IgxPaginatorComponent } from 'igniteui-angular';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from 'src/app/models/movies/popular/movie';
import { Router } from '@angular/router';

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

  constructor(private moviesService: MoviesService, public cdr: ChangeDetectorRef, private router: Router) { }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  ngOnInit(): void {
    this.getPopularMovies(1);
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
