import { Component, Input } from '@angular/core';
import { Cast } from 'src/app/models/credits.interface';
import { People } from 'src/app/models/people-list.interface';

@Component({
  selector: 'app-cast-list',
  templateUrl: './cast-list.component.html',
  styleUrls: ['./cast-list.component.css']
})
export class CastListComponent {

  @Input() cast!: Cast;

  getImage(){
    return `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${this.cast.profile_path}`
  }
}
