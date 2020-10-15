import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Movie from '../models/Movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {
  
  searchedMovies: Movie[];
  query: any;
  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute 
  ) { }

  ngOnInit(): void {
    const query = this.route.snapshot.queryParams['search'];
    this.movieService.searchMovie(query)
      .subscribe(data => {
        this.searchedMovies = data['results'];
      });
  }
}
