import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AccountService } from 'src/app/services/account.service';
import { AccountDetailsResponse } from 'src/app/models/account-details.interface';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  userDetails?: AccountDetailsResponse;
  success?: boolean;//esto sirbe para el ngIf

  constructor(private authenticationService: AuthenticationService, private accountService: AccountService) { }

  ngOnInit() {
    this.authenticationService.getRequestToken().subscribe(resp => {
      this.success = resp.success;
    });
  }

  doLogin() {
    this.authenticationService.getRequestToken().subscribe(resp => {
      localStorage.setItem('REQUEST_TOKEN', resp.request_token);

      window.location.href = `https://www.themoviedb.org/authenticate/${localStorage.getItem('REQUEST_TOKEN')}?redirect_to=http://localhost:4200/approved`;
    });

    this.accountService.getAccountDetails().subscribe(resp => {
      localStorage.setItem('USERNAME', resp.username);
      localStorage.setItem('AVATAR', `https://image.tmdb.org/t/p/w500${resp.avatar.tmdb.avatar_path}`)
    });
  }

  getUsername() {
    return localStorage.getItem('USERNAME');
  }
  getAvatar() {
    return localStorage.getItem('AVATAR');
  }
}
