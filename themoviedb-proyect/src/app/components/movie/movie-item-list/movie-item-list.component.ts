import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movie-list.interface';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-movie-item-list',
  templateUrl: './movie-item-list.component.html',
  styleUrls: ['./movie-item-list.component.css']
})
export class MovieItemListComponent implements OnInit {
  @Input() movie!: Movie;
  id!: number;
  favoriteIds!: string | null;
  isFavoriteMovie: boolean = false;

  constructor(private router: Router, private accountService: AccountService) { }
  ngOnInit() {
    this.favoriteIds = localStorage.getItem('FAVORITE_IDS');
    const arrayFavoriteIds = this.favoriteIds!.split(',');
    this.isFavoriteMethod(arrayFavoriteIds);
  }

  getImage() {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${this.movie.poster_path}`
  }

  movieDetails(id: number) {
    this.router.navigate([`/page-movie-details/${id}`]);
  }

  addToFavorites(id: number) {
    this.accountService.addMovieToFovorites(id).subscribe();
  }

  isFavoriteMethod(arrayFavoriteIds: string[]) {
    this.isFavoriteMovie = arrayFavoriteIds.includes(this.movie.id.toString());
  }
}
