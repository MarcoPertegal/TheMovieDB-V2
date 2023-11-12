import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './components/reutilizables/nav/nav.component';
import { FooterComponent } from './components/reutilizables/footer/footer.component';
import { PageHomeComponent } from './ui/page-home/page-home.component';
import { PageNotFoundComponent } from './ui/page-not-found/page-not-found.component';
import { MovieItemListComponent } from './components/movie/movie-item-list/movie-item-list.component';
import { PageMovieListComponent } from './ui/page-movie-list/page-movie-list.component';
import { FullWithCarrusellComponent } from './components/carrusel/full-with-carrusell/full-with-carrusell.component';
import { PeopleItemListComponent } from './components/people/people-item-list/people-item-list.component';
import { PagePeopleListComponent } from './ui/page-people-list/page-people-list.component';
import { CarteleraComponent } from './components/movie/cartelera/cartelera.component';
import { PageMovieDetailsComponent } from './ui/page-movie-details/page-movie-details.component';
import { SerieItemListComponent } from './components/serie/serie-item-list/serie-item-list.component';
import { PageSerieListComponent } from './ui/page-serie-list/page-serie-list.component';
import { UpcomingItemListComponent } from './components/upcoming/upcoming-item-list/upcoming-item-list.component';
import { PageUpcomingListComponent } from './ui/page-upcoming-list/page-upcoming-list.component';
import { CastListComponent } from './components/cast/cast-list/cast-list.component';
import { PagePeopleDetailsComponent } from './ui/page-people-details/page-people-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    PageHomeComponent,
    PageNotFoundComponent,
    MovieItemListComponent,
    PageMovieListComponent,
    FullWithCarrusellComponent,
    PeopleItemListComponent,
    PagePeopleListComponent,
    CarteleraComponent,
    PageMovieDetailsComponent,
    SerieItemListComponent,
    PageSerieListComponent,
    UpcomingItemListComponent,
    PageUpcomingListComponent,
    CastListComponent,
    PagePeopleDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
