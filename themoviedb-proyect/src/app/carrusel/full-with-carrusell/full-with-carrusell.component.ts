import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie-list.interface';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-full-with-carrusell',
  templateUrl: './full-with-carrusell.component.html',
  styleUrls: ['./full-with-carrusell.component.css']
})
export class FullWithCarrusellComponent implements OnInit {
  /*Bootstrapejemplo*/images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  //PARA SACAR IMAGEN DEL CACRRUSEL
  //faltaria hacer el backdrop imagen que se saca de esta url https://image.tmdb.org/t/p/original/f2t4JbUvQIjUF5FstG1zZFAp02N.jpg
  //la ruta viene en backdrop_path de https://api.themoviedb.org/3/movie/5?api_key=18c6dd9c77bfcc97e862001655abfba9



  movieList: Movie[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies() {
    this.movieService.getPopularList().subscribe(resp => {
      this.movieList = resp.results;
    })
  }

  getbackdropImage() {
    return 'https://image.tmdb.org/t/p/original/${this.movie.poster_path}';
  }
}
