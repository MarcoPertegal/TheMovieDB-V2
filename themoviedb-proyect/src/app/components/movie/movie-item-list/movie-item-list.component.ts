import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AddItemResponse } from 'src/app/models/add-item.interface';
import { Movie } from 'src/app/models/movie-list.interface';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-movie-item-list',
  templateUrl: './movie-item-list.component.html',
  styleUrls: ['./movie-item-list.component.css']
})
export class MovieItemListComponent {
  addItem!: AddItemResponse;
  @Input() movie!: Movie;
  id!: number

  constructor(private router: Router, private accountService: AccountService) { }


  getImage() {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${this.movie.poster_path}`
  }

  movieDetails(id: number) {
    this.router.navigate([`/page-movie-details/${id}`]);
  }

  addToFavorites(id: number, movie: Movie, favorite: true) {
    this.accountService.addFovorites(movie, id, favorite).subscribe(resp => {
      this.addItem = resp;
    })
  }

}
