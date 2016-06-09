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
var core_1 = require('@angular/core');
var AuthComponent = (function () {
    function AuthComponent() {
    }
    AuthComponent = __decorate([
        core_1.Component({
            selector: 'cp',
            template: "<h1>{{title}}</h1>\n             <h2>{{header}}</h2>\n             <div>Hi, John! welcome to File Sharing solution</div>.\n             <div>Currently, you use 7 out of 10 GB</div>\n             <div>In order to start share and collaborate with your documents download desktop client which is located <a href=\"static/binaries/fallball-installer.exe\">here.</a></div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AuthComponent);
    return AuthComponent;
}());
exports.AuthComponent = AuthComponent;
//# sourceMappingURL=cp.component.js.map