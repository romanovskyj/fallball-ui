import { Component } from '@angular/core';

import { UserService } from './user.service';
import { AuthComponent } from './auth.component';
import { ControlPanelComponent } from './control-panel.component';

import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    UserService
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
