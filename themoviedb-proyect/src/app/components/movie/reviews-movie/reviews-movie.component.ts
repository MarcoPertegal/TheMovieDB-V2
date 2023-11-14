import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cast } from 'src/app/models/credits.interface';
import { AuthorDetails, Reviews } from 'src/app/models/reviews.interface';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-reviews-movie',
  templateUrl: './reviews-movie.component.html',
  styleUrls: ['./reviews-movie.component.css']
})
export class ReviewsMovieComponent {

  @Input() review!: Reviews;
  mostrar: boolean = true
  id!: number;
  route: ActivatedRoute = inject(ActivatedRoute);


  constructor(private service: MovieService) {
    this.id = this.route.snapshot.params['id'];
  }

  getImage() {
    return `https://www.themoviedb.org/t/p/w45_and_h45_face${this.review.author_details.avatar_path}`
  }

}
