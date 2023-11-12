import { Component, OnInit, SecurityContext, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieDetailsResponse } from 'src/app/models/movie-details.interface';
import { Video } from 'src/app/models/movie-trailer.interface';
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

  constructor(private service: MovieService){ 
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.service.getMovieId(this.id).subscribe(resp => {
      this.movieDetails = resp;
    });
  }

  getCartelera(){
    return `https://www.themoviedb.org/t/p/w533_and_h300_bestv2/${this.movieDetails.backdrop_path}`
  }

  rating(){
    this.currentRate = this.movieDetails.popularity;
  }

  trailer() {
    this.service.getVideoById(this.id).subscribe(resp => {
     const trailer = resp.results.filter((v : Video) => v.type === 'Trailer');
      const youtubeUrl = `https://www.youtube.com/watch?v=${trailer[0].key}`;
      window.open(youtubeUrl, '_blank');
    });
  }

}
