import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie-list.interface';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-full-with-carrusell',
  templateUrl: './full-with-carrusell.component.html',
  styleUrls: ['./full-with-carrusell.component.css']
})
export class FullWithCarrusellComponent implements OnInit {
prueba() {
console.log('funciona')
}

  // movie!: Movie;
  // movieList: Movie[] = [];
  // movies: Movie[] = [];

  constructor(private service: MovieService) { }

  bannerResult: any = [];

  ngOnInit(): void {
    // this.service.getPopularList().subscribe(resp =>{
    //   this.movieList = resp.results;
    //    this.movies = this.movieList.slice(0, 4);
    //    console.log(this.movies) 
    // });
    this.bannerData();
  }

  bannerData() {
    this.service.banner().subscribe(resp => {
      console.log(resp);
      this.bannerResult = resp.results;
    });
  }
  // ImgCarousel() {
  //   return `https://www.themoviedb.org/t/p/w533_and_h300_bestv2/${this.movie.backdrop_path}`
  // }

}
