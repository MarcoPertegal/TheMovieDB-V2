import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  //userDetails: AccountDetails | undefined; NECESITO UN model de acount details
  success?: boolean;

  constructor(private authenticationService: AuthenticationService, private accountService: AccountService) { }

  ngOnInit() {
    this.authenticationService.getRequestToken().subscribe(resp => {
      this.success = resp.success;
    });
    this.getAccountDetails();
  }
  getAccountDetails() {
    this.accountService.getAccountDetails().subscribe(resp => {

      //console.log('Datos de la cuenta:', resp);
    });
  }

  doLogin() {
    this.authenticationService.getRequestToken().subscribe(resp => {
      localStorage.setItem('REQUEST_TOKEN', resp.request_token);

      window.location.href = `https://www.themoviedb.org/authenticate/${localStorage.getItem('REQUEST_TOKEN')}?redirect_to=http://localhost:4200/approved`;
    });
  }
}
