import { Component, enableProdMode } from '@angular/core';

import { AuthComponent } from './auth.component';
import { ControlPanelComponent } from './control-panel.component';

import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';

import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdToolbar} from '@angular2-material/toolbar';

enableProdMode();

@Component({
  directives: [ROUTER_DIRECTIVES,
               MD_CARD_DIRECTIVES,
               MdToolbar
  ],
  selector: 'my-app',
  template: `
  <md-toolbar color="primary"> 
      <h1>{{title}}</h1>
  </md-toolbar>
    <router-outlet></router-outlet>
  `,
  providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
  {
    path: '/auth',
    name: 'Authentication',
    component: AuthComponent,
    useAsDefault: true
  },
  {
    path: '/cp',
    name: 'ControlPanel',
    component: ControlPanelComponent
  }
])
export class AppComponent {
  title = 'FallBall';

}
