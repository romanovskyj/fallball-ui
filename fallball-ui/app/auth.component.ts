import { Router } from '@angular/router-deprecated';
import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { User } from './user';
import { BazService } from './user-data';

@Component({
  selector: 'auth',
  templateUrl: 'app/templates/auth.component.html',
})
export class AuthComponent { 
  constructor(private router: Router,
              private http: Http
  ) {

  }

  model = new User('','');
  valid_credentials = true;

  submitted = false;

  private handleError(error: any) {
    console.error('An error occurred', error);
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
             .then((res) => { 
                           // if credentials are valid
                           response => response.json().data; 
                           console.log(res.json());
                           //localStorage.setItem('user_data', JSON.stringify(res.json());
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