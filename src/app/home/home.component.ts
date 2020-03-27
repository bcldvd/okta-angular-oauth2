import { Component, OnInit } from '@angular/core';
import { OktaAuthService, UserClaims } from '@okta/okta-angular';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isAuthenticated: boolean;
  user: UserClaims | undefined;

  constructor(public oktaAuth: OktaAuthService) {}

  async ngOnInit() {
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    // Subscribe to authentication state changes
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean) => (this.isAuthenticated = isAuthenticated),
    );
    if (this.isAuthenticated) {
      this.user = await this.oktaAuth.getUser();
    }
  }
}
