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
import { MovieListComponent } from './components/movie/movie-list/movie-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    PageHomeComponent,
    PageNotFoundComponent,
    MovieListComponent
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
