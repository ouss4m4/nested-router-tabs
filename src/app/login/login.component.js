"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var router_2 = require("@angular/router");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(routerExtensions, activatedRouter) {
        this.routerExtensions = routerExtensions;
        this.activatedRouter = activatedRouter;
    }
    LoginComponent.prototype.login = function () {
        // @todo : check why Djenkov uses [nsrouterlinks] & activate outlets & it worked
        this.routerExtensions.navigate(["tabs"]);
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "app-login",
            templateUrl: "login.component.html"
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions,
            router_2.ActivatedRoute])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLHNEQUErRDtBQUMvRCwwQ0FBaUQ7QUFRakQ7SUFDRSx3QkFDVSxnQkFBa0MsRUFDbEMsZUFBK0I7UUFEL0IscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7SUFDdEMsQ0FBQztJQUNKLDhCQUFLLEdBQUw7UUFDRSxnRkFBZ0Y7UUFDaEYsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQVJVLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsV0FBVztZQUNyQixXQUFXLEVBQUUsc0JBQXNCO1NBQ3BDLENBQUM7eUNBSTRCLHlCQUFnQjtZQUNqQix1QkFBYztPQUg5QixjQUFjLENBUzFCO0lBQUQscUJBQUM7Q0FBQSxBQVRELElBU0M7QUFUWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogXCJhcHAtbG9naW5cIixcclxuICB0ZW1wbGF0ZVVybDogYGxvZ2luLmNvbXBvbmVudC5odG1sYFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGVyOiBBY3RpdmF0ZWRSb3V0ZVxyXG4gICkge31cclxuICBsb2dpbigpIHtcclxuICAgIC8vIEB0b2RvIDogY2hlY2sgd2h5IERqZW5rb3YgdXNlcyBbbnNyb3V0ZXJsaW5rc10gJiBhY3RpdmF0ZSBvdXRsZXRzICYgaXQgd29ya2VkXHJcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1widGFic1wiXSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==