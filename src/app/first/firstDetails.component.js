"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var nativescript_angular_1 = require("nativescript-angular");
var FirstDetailsComponent = /** @class */ (function () {
    function FirstDetailsComponent(activatedRoute, routerExtensions) {
        this.activatedRoute = activatedRoute;
        this.routerExtensions = routerExtensions;
    }
    FirstDetailsComponent.prototype.ngOnInit = function () {
        console.log("FirstDetails url : ");
    };
    FirstDetailsComponent.prototype.goBack = function () {
        this.routerExtensions.back();
    };
    FirstDetailsComponent.prototype.canGoBack = function () {
        alert(this.routerExtensions.canGoBack());
    };
    FirstDetailsComponent.prototype.canGoBackPrevious = function () {
        alert(this.routerExtensions.canGoBackToPreviousPage());
    };
    FirstDetailsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "app-first-details",
            templateUrl: "firstDetails.component.html"
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            nativescript_angular_1.RouterExtensions])
    ], FirstDetailsComponent);
    return FirstDetailsComponent;
}());
exports.FirstDetailsComponent = FirstDetailsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyc3REZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpcnN0RGV0YWlscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQXlEO0FBQ3pELDZEQUF3RDtBQU94RDtJQUNFLCtCQUNVLGNBQThCLEVBQzlCLGdCQUFrQztRQURsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUN6QyxDQUFDO0lBQ0osd0NBQVEsR0FBUjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBQ00sc0NBQU0sR0FBYjtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBQ00seUNBQVMsR0FBaEI7UUFDRSxLQUFLLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUNNLGlEQUFpQixHQUF4QjtRQUNFLEtBQUssQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsdUJBQXVCLEVBQUUsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFoQlUscUJBQXFCO1FBTGpDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixXQUFXLEVBQUUsNkJBQTZCO1NBQzNDLENBQUM7eUNBRzBCLHVCQUFjO1lBQ1osdUNBQWdCO09BSGpDLHFCQUFxQixDQWlCakM7SUFBRCw0QkFBQztDQUFBLEFBakJELElBaUJDO0FBakJZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogXCJhcHAtZmlyc3QtZGV0YWlsc1wiLFxyXG4gIHRlbXBsYXRlVXJsOiBcImZpcnN0RGV0YWlscy5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGaXJzdERldGFpbHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnNcclxuICApIHt9XHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkZpcnN0RGV0YWlscyB1cmwgOiBcIik7XHJcbiAgfVxyXG4gIHB1YmxpYyBnb0JhY2soKSB7XHJcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFjaygpO1xyXG4gIH1cclxuICBwdWJsaWMgY2FuR29CYWNrKCkge1xyXG4gICAgYWxlcnQodGhpcy5yb3V0ZXJFeHRlbnNpb25zLmNhbkdvQmFjaygpKTtcclxuICB9XHJcbiAgcHVibGljIGNhbkdvQmFja1ByZXZpb3VzKCkge1xyXG4gICAgYWxlcnQodGhpcy5yb3V0ZXJFeHRlbnNpb25zLmNhbkdvQmFja1RvUHJldmlvdXNQYWdlKCkpO1xyXG4gIH1cclxufVxyXG4iXX0=