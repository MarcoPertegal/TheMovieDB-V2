import { Component, OnInit } from '@angular/core';
import { People } from 'src/app/models/people-list.interface';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-page-people-list',
  templateUrl: './page-people-list.component.html',
  styleUrls: ['./page-people-list.component.css']
})
export class PagePeopleListComponent implements OnInit {

  actorList: People[] = [];
  pageNumber: number = 1;
  count: number = 0;
  currentPage: number = 1;


  constructor(private service: PeopleService) { }

  ngOnInit(): void {
    this.service.getActorList().subscribe(resp => {
      this.actorList = resp.results;
      this.loadNewPage();
    });
  }

  loadNewPage() {
    this.service.getActors(this.pageNumber).subscribe(resp => {
      this.actorList = resp.results;
      this.count = resp.total_results;
    });
  }
}
