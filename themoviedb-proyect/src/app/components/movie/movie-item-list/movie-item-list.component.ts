import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movie-list.interface';

@Component({
  selector: 'app-movie-item-list',
  templateUrl: './movie-item-list.component.html',
  styleUrls: ['./movie-item-list.component.css']
})
export class MovieItemListComponent {

  @Input() movie!: Movie;
  id!: number

  constructor(private router: Router) { }


  getImage() {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${this.movie.poster_path}`
  }

  movieDetails(id: number) {
    console.log(this.movie.id);
    this.router.navigate([`/page-movie-details/${id}`]);
  }

}
