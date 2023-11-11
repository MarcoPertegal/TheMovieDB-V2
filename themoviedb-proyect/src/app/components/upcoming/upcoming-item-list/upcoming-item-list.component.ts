import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie-list.interface';

@Component({
  selector: 'app-upcoming-item-list',
  templateUrl: './upcoming-item-list.component.html',
  styleUrls: ['./upcoming-item-list.component.css']
})
export class UpcomingItemListComponent {
  @Input() movie!: Movie;

  getImage() {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${this.movie.poster_path}`
  }

}
