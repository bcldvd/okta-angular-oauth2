import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OktaCallbackComponent } from '@okta/okta-angular';
import { HomeComponent } from './home/home.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { OKTA_CONFIG, OktaAuthModule } from '@okta/okta-angular';
import { AuthInterceptor } from './auth/auth.interceptor';
import { environment } from 'src/environments/environment';
import { AuthGuardService } from './auth/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'implicit/callback',
    component: OktaCallbackComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  declarations: [HomeComponent, LoginComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    OktaAuthModule,
    MatButtonModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    { provide: OKTA_CONFIG, useValue: environment.oktaConfig },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
