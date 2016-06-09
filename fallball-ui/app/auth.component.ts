import { Router } from '@angular/router-deprecated';

import { Component } from '@angular/core';

@Component({
  selector: 'auth',
  templateUrl: 'app/templates/auth.component.html'
})
export class AuthComponent { 
  constructor(private router: Router) {
    
  }

  title = 'FallBall';
  header = 'User Control Panel';
  username = 'john';

  validate() {
    let link = ['ControlPanel'];
    this.router.navigate(link);
  }
}