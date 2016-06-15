/*
  User control panel
*/

import { Router } from '@angular/router-deprecated';
import { Component } from '@angular/core';

@Component({
  selector: 'cp',
  templateUrl: 'app/templates/control-panel.component.html'
})
export class ControlPanelComponent {
  constructor(private router: Router) {
    //get data from localstorage and parse it to show in template
    let user_data = JSON.parse(localStorage.getItem('user_data'));
    this.username = user_data.id;
    this.usage = user_data.storage.usage 
    this.limit = user_data.storage.limit
  }
  title = 'FallBall';
  header = 'User Control Panel';
  
  // user data
  username;
  usage;
  limit;

  signOut() {
    let link = ['Authentication'];
    this.router.navigate(link);
  }
}