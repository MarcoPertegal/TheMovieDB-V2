import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cast } from 'src/app/models/credits.interface';
import { MovieService } from 'src/app/services/movie.service';
import { SerieService } from 'src/app/services/serie.service';

@Component({
  selector: 'app-page-serie-details',
  templateUrl: './page-serie-details.component.html',
  styleUrls: ['./page-serie-details.component.css']
})
export class PageSerieDetailsComponent implements OnInit {

  castList: Cast[] = [];
  id!: number;
  route: ActivatedRoute = inject(ActivatedRoute);

  constructor(private service: SerieService) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.service.getCast(this.id).subscribe(resp => {
      this.castList = resp.cast;
    });
  }
}
