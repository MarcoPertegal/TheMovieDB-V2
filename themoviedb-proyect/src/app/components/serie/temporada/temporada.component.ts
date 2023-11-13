import { Component, OnInit } from '@angular/core';
import { SeasonDetailsResponse } from 'src/app/models/serie-season.interface';
import { SerieService } from 'src/app/services/serie.service';

@Component({
  selector: 'app-temporada',
  templateUrl: './temporada.component.html',
  styleUrls: ['./temporada.component.css']
})
export class TemporadaComponent implements OnInit {

  season!: SeasonDetailsResponse;
  idSeason!: number;
  seasonNumber!: number;

  constructor(private service: SerieService) { }

  ngOnInit(): void {


  }

}
