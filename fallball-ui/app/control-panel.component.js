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
var ControlPanelComponent = (function () {
    function ControlPanelComponent(router) {
        this.router = router;
        this.title = 'FallBall';
        this.header = 'User Control Panel';
        var user_data = JSON.parse(localStorage.getItem('user_data'));
        this.username = user_data.id;
        this.usage = user_data.storage.usage;
        this.limit = user_data.storage.limit;
    }
    ControlPanelComponent.prototype.signOut = function () {
        var link = ['Authentication'];
        this.router.navigate(link);
    };
    ControlPanelComponent = __decorate([
        core_1.Component({
            selector: 'cp',
            templateUrl: 'app/templates/control-panel.component.html'
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router])
    ], ControlPanelComponent);
    return ControlPanelComponent;
}());
exports.ControlPanelComponent = ControlPanelComponent;
//# sourceMappingURL=control-panel.component.js.map