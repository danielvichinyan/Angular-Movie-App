import { Injectable } from '@angular/core';
import { 
    ActivatedRouteSnapshot, 
    Resolve, 
    RouterStateSnapshot 
} from '@angular/router';
import { forkJoin } from 'rxjs';
import Movie from '../../models/Movie';
import { MovieService } from '../movie.service';

@Injectable()
export class MovieListResolver implements Resolve<Movie[]> {

    constructor(
        private movieService: MovieService
    ) {  }
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        return forkJoin([
            this.movieService.getTheatreMovies(),
            this.movieService.getBestDramaMovies(),
            this.movieService.getPopularKidsMovies(),
            this.movieService.getPopularMovies()
        ])
    }
}