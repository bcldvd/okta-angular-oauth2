import { Component, OnInit } from '@angular/core';
import { OktaAuthService, UserClaims } from '@okta/okta-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  user: UserClaims | undefined;

  constructor(public oktaAuth: OktaAuthService) {}

  async ngOnInit() {
    this.user = await this.oktaAuth.getUser();
  }
}
