import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SerieDetailsResponse } from 'src/app/models/serie-details.interface';
import { Video } from 'src/app/models/serie-videos.interface';
import { SerieService } from 'src/app/services/serie.service';


@Component({
  selector: 'app-cartelera-serie',
  templateUrl: './cartelera-serie.component.html',
  styleUrls: ['./cartelera-serie.component.css']
})
export class CarteleraSerieComponent implements OnInit {

  serieDetails!: SerieDetailsResponse;
  id!: number;
  route: ActivatedRoute = inject(ActivatedRoute);
  currentRate!: number;

  constructor(private service: SerieService) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.service.getSerieId(this.id).subscribe(resp => {
      this.serieDetails = resp;
    });
  }

  getCartelera() {
    return `https://www.themoviedb.org/t/p/w533_and_h300_bestv2${this.serieDetails.backdrop_path}`;
  }

  rating() {
    this.currentRate = this.serieDetails.popularity;
  }

  trailer() {
    this.service.getVideoById(this.id).subscribe(resp => {
      const trailer = resp.results.filter((v: Video) => v.type === 'Trailer');
      const youtubeUrl = `https://www.youtube.com/watch?v=${trailer[0].key}`;
      window.open(youtubeUrl, '_blank');
    });
  }
}


