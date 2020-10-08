import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Movie from '../models/Movie';

const BASE_URL = 'https://api.themoviedb.org/3/movie';
const IN_THREATRES = 'https://api.themoviedb.org/3/discover/movie'
const API_KEY = '?api_key=c99164fa43270779d9e3dc71c2f0ca9c';

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  constructor(private http: HttpClient) { }

  getPopularMovies(): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>(BASE_URL + '/popular' + API_KEY);
  }

  getTheatreMovies(): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>(IN_THREATRES + API_KEY + '&with_release_type=2|3');
  }
}
