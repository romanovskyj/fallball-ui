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
var user_1 = require('./user');
var AuthComponent = (function () {
    function AuthComponent(router) {
        this.router = router;
        this.title = 'FallBall';
        this.header = 'User Control Panel';
        this.username = 'john';
        this.model = new user_1.User('', '');
        this.submitted = false;
    }
    AuthComponent.prototype.onSubmit = function () {
        if (this.model.name == 'john' && this.model.name == 'john') {
            var link = ['ControlPanel'];
            this.router.navigate(link);
        }
    };
    AuthComponent = __decorate([
        core_1.Component({
            selector: 'auth',
            templateUrl: 'app/templates/auth.component.html'
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router])
    ], AuthComponent);
    return AuthComponent;
}());
exports.AuthComponent = AuthComponent;
//# sourceMappingURL=auth.component.js.map