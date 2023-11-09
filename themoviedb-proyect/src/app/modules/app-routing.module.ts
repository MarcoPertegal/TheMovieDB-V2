import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageMovieListComponent } from '../ui/page-movie-list/page-movie-list.component';

const routes: Routes = [
  { path: 'list', component: PageMovieListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
