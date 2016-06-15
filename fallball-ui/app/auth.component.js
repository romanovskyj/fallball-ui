"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var router_deprecated_1 = require('@angular/router-deprecated');
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var user_1 = require('./user');
var AuthComponent = (function () {
    function AuthComponent(router, http) {
        this.router = router;
        this.http = http;
        this.model = new user_1.User('', '');
        this.valid_credentials = true;
        this.submitted = false;
    }
    AuthComponent.prototype.handleError = function (error) {
        console.error('An error occurred', error);
    };
    AuthComponent.prototype.onSubmit = function () {
        var _this = this;
        //encode credentials for basic authentication
        var credentials = this.model.name + ':' + this.model.password;
        var encoded_credentials = btoa(credentials);
        //send request to check if credentials are correct
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Basic ' + encoded_credentials);
        var url = 'http://localhost:8000/v1/users/';
        this.http.get(url, { headers: headers })
            .toPromise()
            .then(function (res) {
            // if credentials are valid
            (function (response) { return response.json().data; });
            console.log(res.json());
            //localStorage.setItem('user_data', JSON.stringify(res.json());
            var link = ['ControlPanel'];
            _this.router.navigate(link);
        }, function () {
            // if credentials are invalid
            _this.valid_credentials = false;
        })
            .catch(this.handleError);
    };
    AuthComponent = __decorate([
        core_1.Component({
            selector: 'auth',
            templateUrl: 'app/templates/auth.component.html',
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, http_1.Http])
    ], AuthComponent);
    return AuthComponent;
}());
exports.AuthComponent = AuthComponent;
//# sourceMappingURL=auth.component.js.map