import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie-list.interface';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-page-profile',
  templateUrl: './page-profile.component.html',
  styleUrls: ['./page-profile.component.css']
})
export class PageProfileComponent implements OnInit {
  active = 1;
  movieList: Movie[] = [];
  pageNumber: number = 1;
  count: number = 0;
  currentPage: number = 1;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.loadNewPage();
  }
  loadNewPage() {
    this.accountService.getFavorites(this.pageNumber).subscribe(resp => {
      this.movieList = resp.results;
      this.count = resp.total_results;
    })
  }

  getUsername() {
    return localStorage.getItem('USERNAME');
  }
  getAvatar() {
    return localStorage.getItem('AVATAR');
  }
}
