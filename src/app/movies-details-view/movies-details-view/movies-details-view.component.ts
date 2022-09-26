import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs'
import { Detail } from 'src/app/models/movies/details/detail';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies-details-view',
  templateUrl: './movies-details-view.component.html',
  styleUrls: ['./movies-details-view.component.scss']
})
export class MoviesDetailsViewComponent implements OnInit {

  public movie: Detail = null!;

  public loading: boolean = false;

  private params!: Subscription;

  constructor(
    private moviesService: MoviesService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.initParamsSubscription();
  }

  public getMovieDetails(id: number | undefined): void {
    if (id === undefined) {
      this.router.navigate(['/movies-list']);
      return;
    }
    this.setLoading(true);
    this.moviesService.getMovieDetails(id).then((response: any) => {
      console.log(response)
      if (response == undefined)
        console.log('Promise getMovieDetails() undefined response');
        this.movie = response;
    }).catch((error: any) => {
      console.log(error);
    }).finally(() => this.setLoading(false));
  }

  private initParamsSubscription(): void {
    this.params = this.activatedRoute.params.subscribe((params: Params) =>
      this.getMovieDetails(params.id ? parseInt(params.id, 10) : undefined));
  }

  private setLoading(value: boolean): void {
    this.loading = value;
  }

}
