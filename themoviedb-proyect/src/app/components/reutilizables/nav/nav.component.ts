import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AccountService } from 'src/app/services/account.service';
import { AccountDetailsResponse } from 'src/app/models/account-details.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  success!: string | null;

  constructor(private authenticationService: AuthenticationService, private accountService: AccountService, private router: Router) { }
  ngOnInit() {
    this.success = localStorage.getItem('SUCCESS');
    console.log(localStorage.getItem('USERNAME'));
  }

  doLogin() {
    this.authenticationService.getRequestToken().subscribe(resp => {
      localStorage.setItem('REQUEST_TOKEN', resp.request_token);
      window.location.href = `https://www.themoviedb.org/authenticate/${localStorage.getItem('REQUEST_TOKEN')}?redirect_to=http://localhost:4200/approved`;
      //si no lo guardo en el local storage cuando redirija a la home page succes volverá a tomar
      //el valor false por defecto
      localStorage.setItem('SUCCESS', resp.success.toString());
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

  isActive(route: string): boolean {
    return this.router.isActive(route, true);
  }
}
