import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Movie from '../models/Movie';
import MovieDetails from '../models/MovieDetails';
import { tap, map } from 'rxjs/operators';

const BASE_URL = 'https://api.themoviedb.org/3/';
const IN_THREATRES = 'discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22';
const POPULAR = 'discover/movie?sort_by=popularity.desc';
const KIDS = 'discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc';
const BEST_DRAMA = 'discover/movie?with_genres=18&primary_release_year=2020';

const API_KEY = '&api_key=c99164fa43270779d9e3dc71c2f0ca9c';
const API_KEY_ALT = '?api_key=c99164fa43270779d9e3dc71c2f0ca9c';

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  constructor(
    private http: HttpClient
  ) { }

  getPopularMovies() {
    return this.http.get<Movie[]>(BASE_URL + POPULAR + API_KEY)
      .pipe(
        map((data) => data['results'].slice(0, 6))
      );
  }

  getTheatreMovies() {
    return this.http.get<Movie[]>(BASE_URL + IN_THREATRES + API_KEY)
      .pipe(
        map((data) => data['results'].slice(0, 6))
      );
  }

  getPopularKidsMovies() {
    return this.http.get<Movie[]>(BASE_URL + KIDS + API_KEY)
      .pipe(
        map((data) => data['results'].slice(0, 6))
      );
  }

  getBestDramaMovies() {
    return this.http.get<Movie[]>(BASE_URL + BEST_DRAMA + API_KEY)
      .pipe(
        map((data) => data['results'].slice(0, 6))
      );
  }

  getMovieById(id: string) {
    return this.http.get<MovieDetails>(BASE_URL + `movie/${id}` + API_KEY_ALT);
  }
}
