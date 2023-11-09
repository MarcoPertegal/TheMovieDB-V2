import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from '../ui/page-home/page-home.component';
import { PageNotFoundComponent } from '../ui/page-not-found/page-not-found.component';
import { PageMovieListComponent } from '../ui/page-movie-list/page-movie-list.component';

const routes: Routes = [
  { path: 'page-home', component: PageHomeComponent },
  { path: 'page-movie-list', component: PageMovieListComponent },
  { path: '', pathMatch: 'full', redirectTo: '/page-home' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
