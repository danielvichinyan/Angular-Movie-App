import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const appRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'movies'}, 
  { path: 'movies', component: MoviesComponent },
  { path: 'movies/:id', component: MovieDetailsComponent }
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
