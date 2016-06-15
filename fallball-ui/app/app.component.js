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
var auth_component_1 = require('./auth.component');
var control_panel_component_1 = require('./control-panel.component');
var router_deprecated_1 = require('@angular/router-deprecated');
var toolbar_1 = require('@angular2-material/toolbar');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'FallBall';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <div class=\"container\">\n    <md-toolbar color=\"primary\">{{title}}</md-toolbar>\n    <router-outlet></router-outlet>\n    </div>\n  ",
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [
                router_deprecated_1.ROUTER_PROVIDERS,
                toolbar_1.MdToolbar
            ]
        }),
        router_deprecated_1.RouteConfig([
            {
                path: '/auth',
                name: 'Authentication',
                component: auth_component_1.AuthComponent,
                useAsDefault: true
            },
            {
                path: '/cp',
                name: 'ControlPanel',
                component: control_panel_component_1.ControlPanelComponent
            }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map