/*
  Authorization form component
*/
import { Router } from '@angular/router-deprecated';
import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';

//material2 components
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';

import 'rxjs/add/operator/toPromise';

import { User } from './user';

@Component({
  selector: 'auth',
  templateUrl: 'app/templates/auth.component.html',
  directives: [MD_INPUT_DIRECTIVES,
               MD_CARD_DIRECTIVES,
               MD_BUTTON_DIRECTIVES
  ]
})
export class AuthComponent { 
  header = 'Sign in'
  //representation of fallball clienuser model
  model = new User('', '');
  submitted = false;
  //variable for showing wrong alerts mechanism
  valid_credentials = true;

  constructor(private router: Router,
              private http: Http
  ) {

  }

  private handleError(error: any) {
    console.error('An error occurred', error);
  }

  onSubmit() {
    //encode credentials for basic authentication
    let credentials = this.model.name + ':' + this.model.password;
    let encoded_credentials = btoa(credentials);

    //prepare request
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Basic ' + encoded_credentials);
    let url = 'http://localhost:8000/v1/users/';

    //send request to check if credentials are correct
    this.http.get(url, { headers: headers })
             .toPromise()
             .then((res) => { 
                           // if credentials are valid keep user data inside local storage
                           response => response.json().data; 
                           console.log(res.json());
                           localStorage.setItem('user_data', JSON.stringify(res.json()));
                           let link = ['ControlPanel']; 
                           this.router.navigate(link); 
                         }, 
                   () => { 
                           // if credentials are invalid
                           this.valid_credentials = false
                         }
                  )
             .catch(this.handleError);
  }
}