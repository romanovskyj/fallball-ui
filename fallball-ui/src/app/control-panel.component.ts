/*
  User control panel
*/

import { Router } from '@angular/router-deprecated';
import { Component } from '@angular/core';

import {MD_CARD_DIRECTIVES} from '@angular2-material/card';

@Component({
  selector: 'cp',
  templateUrl: 'templates/control-panel.component.html',
  directives: [MD_CARD_DIRECTIVES],
})
export class ControlPanelComponent {
  header = 'User Control Panel';
  title = 'FallBall';

  // user data
  limit;
  usage;
  username;

  constructor(private router: Router) {
    //get data from localstorage and parse it to show in template
    let userData = JSON.parse(localStorage.getItem('userData'));
      if (userData === null) {
        let link = ['Authentication'];
        this.router.navigate(link);
      } else {
      
      this.username = userData.id;
      this.usage = userData.storage.usage;
      this.limit = userData.storage.limit;
      
      }
  }
  
  signOut() {
    localStorage.removeItem('userData');

    let link = ['Authentication'];
    this.router.navigate(link);
  }
}
