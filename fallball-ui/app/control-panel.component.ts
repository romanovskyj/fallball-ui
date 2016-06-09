import { Router } from '@angular/router-deprecated';

import { Component } from '@angular/core';

@Component({
  selector: 'cp',
  templateUrl: 'app/templates/control-panel.component.html'
})
export class ControlPanelComponent {
  constructor(private router: Router) {

  }
  title = 'FallBall';
  header = 'User Control Panel';
  username = 'john';

  signOut() {
    let link = ['Authentication'];
    this.router.navigate(link);
  }
}