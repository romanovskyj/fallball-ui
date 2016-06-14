import { Router } from '@angular/router-deprecated';
import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { User } from './user';

@Component({
  selector: 'auth',
  templateUrl: 'app/templates/auth.component.html'
})
export class AuthComponent { 
  constructor(private router: Router,
              private http: Http
  ) {

  }

  title = 'FallBall';
  header = 'User Control Panel';
  username = 'john';

  model = new User('','');
  valid_credentials = true;

  submitted = false;

  private handleError(error: any) {
    console.error('An error occurred', error);
  }

  private resolve() {
    
  }

  private reject() {

  }

  onSubmit() {
    //encode credentials for basic authentication
    let credentials = this.model.name + ':' + this.model.password;
    let encoded_credentials = btoa(credentials);

    //send request to check if credentials are correct
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Basic ' + encoded_credentials);
    let url = 'http://localhost:8000/v1/users/';

    this.http.get(url, { headers: headers })
    .toPromise()
      .then(() => { response => response.json().data; let link = ['ControlPanel']; this.router.navigate(link); }, () => { this.valid_credentials = false})
                       .catch(this.handleError);
  }
}