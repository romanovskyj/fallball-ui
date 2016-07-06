/*
  Authorization form component
*/
import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router-deprecated';

import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';

import 'rxjs/add/operator/toPromise';

import { User } from './user';


@Component({
  selector: 'auth',
  templateUrl: 'templates/auth.component.html',
  directives: [MD_INPUT_DIRECTIVES,
               MD_CARD_DIRECTIVES,
               MD_BUTTON_DIRECTIVES,
  ]
})
export class AuthComponent {
  header = 'Sign in';
  model = new User('', '');
  submitted = false;
  validCredentials = true;
  myUrl;

  constructor(private router: Router,
              private http: Http
  ) {}

  private handleError(error: any) {
    console.error('An error occurred', error);
  }

  onSubmit() {
    let credentials = this.model.name + ':' + this.model.password;
    let encodedCredentials = btoa(credentials);

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Basic ' + encodedCredentials);

    this.http.get('config.json')
      .toPromise()
      .then((res) => {
              response => response.json().data;
              this.myUrl = res.json().apiBaseUrl;

              this.http.get(this.myUrl, { headers: headers })
                .toPromise()
                .then((res) => {
                           response => response.json().data;
                           localStorage.setItem('userData', JSON.stringify(res.json()));
                           let link = ['ControlPanel'];
                           this.router.navigate(link);
                         },
                      () => {
                           this.validCredentials = false;
                })
                .catch(this.handleError);
            },
            () => {})
      .catch();
  }
}
