import { Component, Input, OnInit, SecurityContext, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieDetailsResponse } from 'src/app/models/movie-details.interface';
import { Movie } from 'src/app/models/movie-list.interface';
import { Video } from 'src/app/models/movie-trailer.interface';
import { AccountService } from 'src/app/services/account.service';
import { MovieService } from 'src/app/services/movie.service';


@Component({
  selector: 'app-cartelera',
  templateUrl: './cartelera.component.html',
  styleUrls: ['./cartelera.component.css']
})
export class CarteleraComponent implements OnInit {
  movieDetails!: MovieDetailsResponse;
  id!: number;
  route: ActivatedRoute = inject(ActivatedRoute);
  currentRate!: number;
  watchListsIds!: string | null;
  isWatchLists: boolean = false;

  // arrayWatchLists: string[] = [];

  constructor(private service: MovieService, private accountService: AccountService) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.service.getMovieId(this.id).subscribe(resp => {
      this.movieDetails = resp;
      this.watchListsIds = localStorage.getItem('WATCHLISTS_IDS');
      const arrayWatchLists = this.watchListsIds!.split(',');
      console.log(arrayWatchLists)
      this.isWatchListAdd(arrayWatchLists);
    });
  }
 
  getCartelera() {
    return `https://www.themoviedb.org/t/p/w533_and_h300_bestv2/${this.movieDetails.backdrop_path}`
  }

  rating() {
    this.currentRate = this.movieDetails.popularity;
  }

  trailer() {
    this.service.getVideoById(this.id).subscribe(resp => {
      const trailer = resp.results.filter((v: Video) => v.type === 'Trailer');
      const youtubeUrl = `https://www.youtube.com/watch?v=${trailer[0].key}`;
      window.open(youtubeUrl, '_blank');
    });
  }

  addWatchListMovies(id: number) {
    this.accountService.addWatchListsMovies(id).subscribe();
  }

  isWatchListAdd(arrayWatchLists: string[]) {
    this.isWatchLists = arrayWatchLists.includes(this.movieDetails.id.toString());
  }

  removeWatchListMovies(id: number) {
    const arrayWatchLists = this.watchListsIds ? this.watchListsIds.split(',') : [];
    const updatedArray = arrayWatchLists.filter(item => item !== id.toString());
    this.updateWatchList(updatedArray);
  }

  updateWatchList(arrayWatchLists: string[]) {
    this.watchListsIds = arrayWatchLists.join(',');
    localStorage.setItem('WATCHLISTS_IDS', this.watchListsIds);
    this.isWatchListAdd(arrayWatchLists);
    console.log(arrayWatchLists)

  }

}
