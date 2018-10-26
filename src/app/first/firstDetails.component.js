"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var FirstDetailsComponent = /** @class */ (function () {
    function FirstDetailsComponent(activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.id = this.activatedRoute.snapshot.params.id;
    }
    FirstDetailsComponent.prototype.ngOnInit = function () {
        console.log("details url : " + this.router.url);
    };
    FirstDetailsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "app-first-details",
            template: "\n    <StackLayout>\n      <Label text=\"item \"></Label>\n    </StackLayout>\n  "
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router])
    ], FirstDetailsComponent);
    return FirstDetailsComponent;
}());
exports.FirstDetailsComponent = FirstDetailsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyc3REZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpcnN0RGV0YWlscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQXlEO0FBV3pEO0lBRUUsK0JBQW9CLGNBQThCLEVBQVUsTUFBYztRQUF0RCxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRG5FLE9BQUUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO0lBQzBCLENBQUM7SUFDOUUsd0NBQVEsR0FBUjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBTFUscUJBQXFCO1FBVGpDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixRQUFRLEVBQUUsbUZBSVQ7U0FDRixDQUFDO3lDQUdvQyx1QkFBYyxFQUFrQixlQUFNO09BRi9ELHFCQUFxQixDQU1qQztJQUFELDRCQUFDO0NBQUEsQUFORCxJQU1DO0FBTlksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogXCJhcHAtZmlyc3QtZGV0YWlsc1wiLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8U3RhY2tMYXlvdXQ+XHJcbiAgICAgIDxMYWJlbCB0ZXh0PVwiaXRlbSBcIj48L0xhYmVsPlxyXG4gICAgPC9TdGFja0xheW91dD5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGaXJzdERldGFpbHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHB1YmxpYyBpZCA9IHRoaXMuYWN0aXZhdGVkUm91dGUuc25hcHNob3QucGFyYW1zLmlkO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7fVxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgY29uc29sZS5sb2coXCJkZXRhaWxzIHVybCA6IFwiICsgdGhpcy5yb3V0ZXIudXJsKTtcclxuICB9XHJcbn1cclxuIl19