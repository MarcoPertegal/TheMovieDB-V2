import { Component, Input } from '@angular/core';
import { Serie } from 'src/app/models/serie-list.interface';

@Component({
  selector: 'app-serie-item-list',
  templateUrl: './serie-item-list.component.html',
  styleUrls: ['./serie-item-list.component.css']
})
export class SerieItemListComponent {
  @Input() serie!: Serie;

  getImage() {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${this.serie.poster_path}`
  }
}
