import { Component, enableProdMode } from '@angular/core';

import { AuthComponent } from './auth.component';
import { ControlPanelComponent } from './control-panel.component';

import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';

import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';

enableProdMode();

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
    <md-toolbar>
      <h1>{{title}}</h1>
    </md-toolbar>
    <router-outlet></router-outlet>
    </div>
  `,
  directives: [ROUTER_DIRECTIVES
  ],
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
