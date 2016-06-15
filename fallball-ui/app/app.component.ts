import { Component } from '@angular/core';

import { AuthComponent } from './auth.component';
import { ControlPanelComponent } from './control-panel.component';

import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';

import { MdToolbar } from '@angular2-material/toolbar';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
    <md-toolbar color="primary">{{title}}</md-toolbar>
    <router-outlet></router-outlet>
    </div>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    MdToolbar
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
