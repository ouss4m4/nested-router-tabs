"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var TabsComponent = /** @class */ (function () {
    function TabsComponent(router, activatedRouter, routerExtensions) {
        this.router = router;
        this.activatedRouter = activatedRouter;
        this.routerExtensions = routerExtensions;
    }
    TabsComponent.prototype.ngOnInit = function () {
        var _this = this;
        setInterval(function () {
            console.log(" tabsLog ---------- url : " + _this.router.url);
        }, 15000);
        this.routerExtensions.navigate([{ outlets: { firstOutlet: ["first"], secondOutlet: ["second"] } }], {
            relativeTo: this.activatedRouter
        });
    };
    TabsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "app-tabs",
            templateUrl: "tabs.component.html"
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_1.ActivatedRoute,
            router_2.RouterExtensions])
    ], TabsComponent);
    return TabsComponent;
}());
exports.TabsComponent = TabsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBeUQ7QUFDekQsc0RBQStEO0FBTy9EO0lBQ0UsdUJBQ1UsTUFBYyxFQUNkLGVBQStCLEVBQy9CLGdCQUFrQztRQUZsQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Qsb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBQy9CLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFDekMsQ0FBQztJQUNKLGdDQUFRLEdBQVI7UUFBQSxpQkFVQztRQVRDLFdBQVcsQ0FBQztZQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5RCxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDVixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUM1QixDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsWUFBWSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQ25FO1lBQ0UsVUFBVSxFQUFFLElBQUksQ0FBQyxlQUFlO1NBQ2pDLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFoQlUsYUFBYTtRQUx6QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSxxQkFBcUI7U0FDbkMsQ0FBQzt5Q0FHa0IsZUFBTTtZQUNHLHVCQUFjO1lBQ2IseUJBQWdCO09BSmpDLGFBQWEsQ0FpQnpCO0lBQUQsb0JBQUM7Q0FBQSxBQWpCRCxJQWlCQztBQWpCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6IFwiYXBwLXRhYnNcIixcclxuICB0ZW1wbGF0ZVVybDogYHRhYnMuY29tcG9uZW50Lmh0bWxgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYWJzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlcjogQWN0aXZhdGVkUm91dGUsXHJcbiAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnNcclxuICApIHt9XHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiIHRhYnNMb2cgLS0tLS0tLS0tLSB1cmwgOiBcIiArIHRoaXMucm91dGVyLnVybCk7XHJcbiAgICB9LCAxNTAwMCk7XHJcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoXHJcbiAgICAgIFt7IG91dGxldHM6IHsgZmlyc3RPdXRsZXQ6IFtcImZpcnN0XCJdLCBzZWNvbmRPdXRsZXQ6IFtcInNlY29uZFwiXSB9IH1dLFxyXG4gICAgICB7XHJcbiAgICAgICAgcmVsYXRpdmVUbzogdGhpcy5hY3RpdmF0ZWRSb3V0ZXJcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19