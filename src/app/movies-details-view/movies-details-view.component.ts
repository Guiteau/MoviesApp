import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs'
import { Detail } from 'src/app/models/movies/details/detail';
import { MoviesService } from 'src/app/services/movies.service';
import { Credits } from 'src/app/models/movies/details/credits.model';
import { Cast } from 'src/app/models/movies/details/cast.model';
import { Status } from 'src/app/models/status';
import { AccountStates } from 'src/app/models/movies/details/account-states.model';
import { UserAuthenticationService } from 'src/app/services/user-authentication.service';

@Component({
  selector: 'app-movies-details-view',
  templateUrl: './movies-details-view.component.html',
  styleUrls: ['./movies-details-view.component.scss']
})
export class MoviesDetailsViewComponent implements OnInit {

  public movie: Detail = null!;
  public cast: Cast[] = [];
  public loading: boolean = false;
  public points: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  public rating: number = 0;

  private params!: Subscription;

  constructor(
    public userAuthenticationService: UserAuthenticationService,
    private moviesService: MoviesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.initParamsSubscription();
  }

  public onSelectionCombo(event: any): void {
    this.moviesService.rateMovie(this.movie.id, event)
    .catch((error: any) => {
      console.error('An error ocurred rating the movie, please try again')
      window.alert('An error ocurred rating the movie, please try again');
    });
  }

  private initParamsSubscription(): void {
    this.params = this.activatedRoute.params.subscribe((params: Params) => {
      const id: number | undefined = params.id ? parseInt(params.id, 10) : undefined;
      if (id === undefined) {
        this.router.navigate(['/movies-list']);
        return;
      }
      this.getMovieDetails(id);
      this.getMovieCredits(id);
      if (this.userAuthenticationService.isUserLoggedIn) {
        this.getMovieAccountStates(id);
      }
    });
  }

  private getMovieDetails(id: number): void {
    this.setLoading(true);
    this.moviesService.getMovieDetails(id)
      .then((response: Detail) => this.movie = response)
      .catch((error: any) => {
        console.error('An error ocurred getting movie details, please try again');
        window.alert('An error ocurred getting movie details, please try again');
      })
      .finally(() => this.setLoading(false));
  }

  private getMovieCredits(id: number): void {
    this.moviesService.getMovieCredits(id)
      .then((credits: Credits) => this.cast = credits?.cast ?? [])
      .catch((error: any) => {
        console.error('An error ocurred getting movie credits, please try again');
        window.alert('An error ocurred getting movie credits, please try again');
      });
  }

  private getMovieAccountStates(id: number): void {
    this.moviesService.getMovieAccountStates(id)
      .then((accountStates: AccountStates) => this.rating = !accountStates?.rated ? this.rating : accountStates?.rated.value)
      .catch((error: any) => {
        console.error('An error ocurred getting movie account states, please try again');
        window.alert('An error ocurred getting movie account states, please try again');
      });
  }

  private setLoading(value: boolean): void {
    this.loading = value;
  }

}
