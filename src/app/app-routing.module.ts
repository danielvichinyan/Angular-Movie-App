import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { SingleMovieResolver } from './services/resolvers/single-movie.resolver';
import { MovieSearchComponent } from './components/movie-search/movie-search.component';
import { MovieListResolver } from './services/resolvers/movie-list.resolver';

const appRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'movies'},

  { path: 'movies/search', 
    component: MovieSearchComponent 
  },
   
  { path: 'movies', 
    component: MoviesComponent,
    resolve: { movies: MovieListResolver }
  },

  { path: 'movies/:id', 
    component: MovieDetailsComponent, 
    resolve: { singleMovie: SingleMovieResolver 
    } 
  }
]; 

@NgModule({
 declarations: [

 ],

 imports: [
   RouterModule.forRoot(appRoutes)
 ],

 exports: [
   RouterModule
 ]
})

export class AppRoutingModule {  }
