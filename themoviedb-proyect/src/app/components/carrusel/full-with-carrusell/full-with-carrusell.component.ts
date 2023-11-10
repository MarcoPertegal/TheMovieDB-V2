import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie-list.interface';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-full-with-carrusell',
  templateUrl: './full-with-carrusell.component.html',
  styleUrls: ['./full-with-carrusell.component.css']
})
export class FullWithCarrusellComponent {

  @Input() movie!: Movie;

  images = '';

  getbackdropImage() {
    this.images = `https://image.tmdb.org/t/p/original/${this.movie.poster_path}`;
  }

}
