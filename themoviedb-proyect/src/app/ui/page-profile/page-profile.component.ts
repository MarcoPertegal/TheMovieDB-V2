import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie-list.interface';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-page-profile',
  templateUrl: './page-profile.component.html',
  styleUrls: ['./page-profile.component.css']
})
export class PageProfileComponent implements OnInit {
  active = 1;
  movieListFavorite: Movie[] = [];
  movieListWatchList: Movie[] = [];
  pageNumberFavorite: number = 1;
  pageNumberWatchList: number = 1;
  countFavorite: number = 0;
  countWatchList: number = 0;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.accountService.getFavorites().subscribe(resp => {
      this.movieListFavorite = resp.results;
    });
    this.accountService.getWatchListMovies().subscribe(resp => {
      this.movieListWatchList = resp.results
    });
  }

  getUsername() {
    return localStorage.getItem('USERNAME');
  }
  getAvatar() {
    return localStorage.getItem('AVATAR');
  }
}
