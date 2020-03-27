import { skipWhile, take } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { OktaAuthService } from '@okta/okta-angular';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private oktaAuth: OktaAuthService, private router: Router) {}

  public async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Promise<boolean> {
    const authenticated: boolean = await this.oktaAuth.isAuthenticated();

    if (!authenticated) {
      this.router.navigate(['login']);
    }

    return authenticated;
  }
}
