import { Component, OnInit } from '@angular/core';
import { Movie, MovieListResponse } from 'src/app/models/movie-list.interface';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movieList: Movie[] = [];

  constructor(private service: MovieService) { }

  ngOnInit(): void {
    this.service.getPopularList().subscribe(resp => {
      this.movieList = resp.results;
    });
  }



}
