import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cast } from 'src/app/models/credits.interface';
import { MovieService } from 'src/app/services/movie.service';


@Component({
  selector: 'app-page-movie-details',
  templateUrl: './page-movie-details.component.html',
  styleUrls: ['./page-movie-details.component.css']
})
export class PageMovieDetailsComponent implements OnInit{
  castList: Cast [] = [];
  id!: number;
  route: ActivatedRoute = inject(ActivatedRoute);


  constructor(private service: MovieService){ 
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.service.getCast(this.id).subscribe(resp =>{
      this.castList = resp.cast;
    })
  }

}
