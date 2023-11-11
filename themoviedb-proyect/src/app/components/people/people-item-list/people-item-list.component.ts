import { Component, Input } from '@angular/core';
import { People } from 'src/app/models/people-list.interface';

@Component({
  selector: 'app-people-item-list',
  templateUrl: './people-item-list.component.html',
  styleUrls: ['./people-item-list.component.css']
})
export class PeopleItemListComponent {

  @Input() actor!: People;

  getImage(){
    return `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${this.actor.profile_path}`
  }

}
