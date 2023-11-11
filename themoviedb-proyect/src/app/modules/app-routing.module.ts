import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from '../ui/page-home/page-home.component';
import { PageNotFoundComponent } from '../ui/page-not-found/page-not-found.component';
import { PageMovieListComponent } from '../ui/page-movie-list/page-movie-list.component';
import { PagePeopleListComponent } from '../ui/page-people-list/page-people-list.component';
import { PageMovieDetailsComponent } from '../ui/page-movie-details/page-movie-details.component';
import { PageSerieListComponent } from '../ui/page-serie-list/page-serie-list.component';

const routes: Routes = [
  { path: 'page-home', component: PageHomeComponent },
  { path: 'page-movie-list', component: PageMovieListComponent },
  { path: 'page-actor-list', component: PagePeopleListComponent },
  { path: 'page-serie-list', component: PageSerieListComponent },
  { path: 'page-movie/:id', component: PageMovieDetailsComponent },
  { path: '', pathMatch: 'full', redirectTo: '/page-home' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
