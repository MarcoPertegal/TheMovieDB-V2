import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AccountService } from 'src/app/services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isLoggedIn = false;

  constructor(private authenticationService: AuthenticationService, private accountService: AccountService, private router: Router) { }
  ngOnInit() {
    this.accountService.getAccountDetails().subscribe(resp => {
      localStorage.setItem('USERNAME', resp.username);
      localStorage.setItem('ACCOUNT_ID', resp.id.toString());
      localStorage.setItem('AVATAR', `https://image.tmdb.org/t/p/w500${resp.avatar.tmdb.avatar_path}`)
      this.isLoggedIn = true;
    });
   
  }

  doLogin() {
    this.authenticationService.getRequestToken().subscribe(resp => {
      localStorage.setItem('REQUEST_TOKEN', resp.request_token);
      window.location.href = `https://www.themoviedb.org/authenticate/${localStorage.getItem('REQUEST_TOKEN')}?redirect_to=http://localhost:4200/approved`;
    });
  }

  getUsername() {
    return localStorage.getItem('USERNAME');
  }
  getAvatar() {
    return localStorage.getItem('AVATAR');
  }

  isActive(route: string): boolean {
    return this.router.isActive(route, true);
  }
}
