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
import { FullWithCarrusellComponent } from './carrusel/full-with-carrusell/full-with-carrusell.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    PageHomeComponent,
    PageNotFoundComponent,
    MovieItemListComponent,
    PageMovieListComponent,
    FullWithCarrusellComponent
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
