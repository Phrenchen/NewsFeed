import { Injectable } from '@angular/core';
import * as OktaSignIn from '@okta/okta-signin-widget';

@Injectable({
  providedIn: 'root'
})
export class OktaService {

  private widget: OktaSignIn;

  constructor() {
    this.widget = new OktaSignIn({
      baseUrl: 'https://meows-feed.herokuapp.com',
      clientId: '0oagjltlqwYgGURwR0h7',
      redirectUri: 'http://localhost:4200',
      authParams: {
        issuer: 'default'
      }
    });
  }

  public getWidget(): void {
    return this.widget;
  }
}
