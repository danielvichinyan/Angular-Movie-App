import { Component, OnDestroy, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import Movie from '../models/Movie';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, OnDestroy {
  popularMovies: Movie[];
  inTheatreMovies: Movie[];
  popularKidsMovies: Movie[];
  bestDramaMovies: Movie[];
  popularMoviesSub: Subscription;

  constructor(private moviesService: MovieService) { }

  ngOnInit(): void {
    this.popularMoviesSub = this.moviesService.getPopularMovies().subscribe(data => {
      this.popularMovies = data;
    });

    this.moviesService.getTheatreMovies().subscribe(data => {
      this.inTheatreMovies = data;
    });

    this.moviesService.getPopularKidsMovies().subscribe(data => {
      this.popularKidsMovies = data;
    });

    this.moviesService.getBestDramaMovies().subscribe(data => {
      this.bestDramaMovies = data;
    });
  }

  ngOnDestroy() {
    this.popularMoviesSub.unsubscribe();
  }
}
