import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie-list.interface';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-page-movie-list',
  templateUrl: './page-movie-list.component.html',
  styleUrls: ['./page-movie-list.component.css']
})
export class PageMovieListComponent implements OnInit {

  movieList: Movie[] = [];

  constructor(private service: MovieService) { }

  ngOnInit(): void {
    this.service.getPopularList().subscribe(resp => {
      this.movieList = resp.results;
    });
  }

}
