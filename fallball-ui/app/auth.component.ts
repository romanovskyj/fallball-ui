import { Router } from '@angular/router-deprecated';
import { Component } from '@angular/core';

import { User } from './user';

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

  model = new User('','');

  submitted = false;

  onSubmit() {
    
    if (this.model.name == 'john' && this.model.name == 'john') {
      let link = ['ControlPanel'];
      this.router.navigate(link);
    }

  }
}