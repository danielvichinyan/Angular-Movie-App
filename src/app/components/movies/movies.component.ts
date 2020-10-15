import { Component, OnInit } from '@angular/core';
import Movie from '../../models/Movie';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  popularMovies: Movie[];
  inTheatreMovies: Movie[];
  popularKidsMovies: Movie[];
  bestDramaMovies: Movie[];
  popularMoviesSub: Subscription;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const [
      drama,
      kids,
      popular,
      theatres
    ] = this.route.snapshot.data['movies'];
    this.bestDramaMovies = drama;
    this.popularKidsMovies = kids;
    this.popularMovies = popular;
    this.inTheatreMovies = theatres;
  }
}
