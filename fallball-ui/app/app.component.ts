import { Component } from '@angular/core';

import { AuthComponent } from './auth.component';
import { ControlPanelComponent } from './control-panel.component';

import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';

import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button;

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
    <h1>{{title}}</h1>
    <router-outlet></router-outlet>
    </div>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    MD_CARD_DIRECTIVES, 
    MD_BUTTON_DIRECTIVES
  ]
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
