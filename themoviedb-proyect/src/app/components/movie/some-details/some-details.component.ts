import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cast, CreditsResponse } from 'src/app/models/credits.interface';
import { MovieDetailsResponse } from 'src/app/models/movie-details.interface';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-some-details',
  templateUrl: './some-details.component.html',
  styleUrls: ['./some-details.component.css']
})
export class SomeDetailsComponent implements OnInit {

  @Input() movie!: MovieDetailsResponse;
  id!: number;
  route: ActivatedRoute = inject(ActivatedRoute);
  director: Cast | undefined;

  constructor(private service: MovieService) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.service.getMovieId(this.id).subscribe(resp => {
      this.movie = resp;

      this.service.getCast(this.id).subscribe(creditsResp => {
        this.director = creditsResp.crew.find((member: Cast) => member.job === 'Director');
      });
    });
  
  }
  
  getCartelera(){
    return `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${this.director?.profile_path}`
  }
}
