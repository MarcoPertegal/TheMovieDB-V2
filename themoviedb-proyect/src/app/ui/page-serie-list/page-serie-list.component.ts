import { Component, OnInit } from '@angular/core';
import { Serie } from 'src/app/models/serie-list.interface';
import { SerieService } from 'src/app/services/serie.service';

@Component({
  selector: 'app-page-serie-list',
  templateUrl: './page-serie-list.component.html',
  styleUrls: ['./page-serie-list.component.css']
})
export class PageSerieListComponent implements OnInit {

  movieList: Serie[] = [];
  pageNumber: number = 1;
  count: number = 0;
  currentPage: number = 1;

  constructor(private service: SerieService) { }

  ngOnInit(): void {
    this.service.getPopularList().subscribe(resp => {
      this.movieList = resp.results;
      //this.loadNewPage();
    });
  }

}
