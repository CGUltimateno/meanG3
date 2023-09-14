import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieComponent } from './movie/movie.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TvComponent } from './tv/tv.component';
import {TvseriesDetailsComponent} from "./tvseries-details/tvseries-details.component";

const routes: Routes = [
  // /home
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'movies', component: MovieComponent },
  { path: 'tvseriesdetails/:id', component: TvseriesDetailsComponent},
  { path: 'moviesdetails/:id', component: MovieDetailsComponent },
  { path: 'tv', component: TvComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
