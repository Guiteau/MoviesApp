import { ChangeDetectorRef, Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { IgxFilterOptions, IgxPaginatorComponent } from 'igniteui-angular';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from 'src/app/models/movies/popular/movie';

@Component({
  selector: 'app-movies-list-view',
  templateUrl: './movies-list-view.component.html',
  styleUrls: ['./movies-list-view.component.scss']
})
export class MoviesListViewComponent implements OnInit, AfterViewInit {

  @ViewChild('paginator', { static: true }) public paginator!: IgxPaginatorComponent;
  public searchMovie: string = "";
  public loader: boolean = false;
  public totalPages: number = 0;
  public density: any = 'comfortable';
  public popularMoviesList: Movie[] = [];

  constructor(private moviesService: MoviesService, public cdr: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  ngOnInit(): void {
    this.getPopularMovies(1);
  }

  // --- ******* MY APP ******* --- //

  public getPopularMovies(page: number) {
    this.moviesService.getPopularMovies(page).then((response: any) => {
      if (response == undefined)
        console.log('Promise getPopularMovies() undefined response');
      this.popularMoviesList = response["results"];
      this.totalPages = response["total_pages"];
    })
  }

  public navigateToFirstPage() {
    this.paginator.page = 0;
  }

  // public changePage(event: Event) {
  //   this.loader = true;
  //   this.getPopularMovies(event.pageIndex + 1);
  // }

  public onPageChange(page: number){
    this.loader = true;
    this.getPopularMovies(page + 1);
  }

  // public get data() {
  //   let movies = this.popularMoviesList;
  //   movies = this.paginator ?
  //     this.popularMoviesList.slice(this.paginator.page * this.paginator.perPage,
  //       ((this.paginator.page * this.paginator.perPage) + this.paginator.perPage)) : movies;
  //   return movies;
  // }

  get filterMovies() {
    const fo = new IgxFilterOptions();
    fo.key = 'title';
    fo.inputValue = this.searchMovie;
    return fo;
  }

  // --- ******* MY APP ******* --- //

  public toggleFavorite(contact: any) {
    contact.isFavorite = !contact.isFavorite;
  }

}
