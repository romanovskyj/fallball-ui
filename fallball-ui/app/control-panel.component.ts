/*
  User control panel
*/

import { Router } from '@angular/router-deprecated';
import { Component } from '@angular/core';

import {MD_CARD_DIRECTIVES} from '@angular2-material/card';

@Component({
  selector: 'cp',
  templateUrl: 'app/templates/control-panel.component.html',
  directives: [MD_CARD_DIRECTIVES]
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
    let user_data = JSON.parse(localStorage.getItem('user_data'));
      if (user_data == null) {
        let link = ['Authentication'];
        this.router.navigate(link);
      } else {
      
      this.username = user_data.id;
      this.usage = user_data.storage.usage 
      this.limit = user_data.storage.limit
      
      }
  }
  
  signOut() {
    localStorage.removeItem('user_data');

    let link = ['Authentication'];
    this.router.navigate(link);
  }
}