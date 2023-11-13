import { Component } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-authentication-approved',
  templateUrl: './authentication-approved.component.html',
  styleUrls: ['./authentication-approved.component.css']
})
export class AuthenticationApprovedComponent {

  constructor(private authenticationService: AuthenticationService, private accountService: AccountService) { }

  ngOnInit(): void {
    // STEP 3: Create Session ID
    let token = localStorage.getItem('REQUEST_TOKEN');
    this.authenticationService.createSession(token!).subscribe(resp => {
      // STEP 4: Guardamos el Session ID y solicitamos la información del usuario
      localStorage.setItem('SESSION_ID', resp.session_id);
      this.accountService.getAccountDetails().subscribe(resp => {
        console.log(resp);
      });
    });
  }
}
