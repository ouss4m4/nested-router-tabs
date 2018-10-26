"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var FirstComponent = /** @class */ (function () {
    function FirstComponent(router, activatedRoute, routerExtensions) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.routerExtensions = routerExtensions;
        this._items = [];
    }
    FirstComponent.prototype.ngOnInit = function () {
        console.log("first url " + this.router.url);
        this.loadItems();
    };
    Object.defineProperty(FirstComponent.prototype, "items", {
        get: function () {
            return this._items;
        },
        enumerable: true,
        configurable: true
    });
    FirstComponent.prototype.onItemTap = function (event) {
        this.routerExtensions.navigateByUrl("/tabs/(firstOutlet:2//secondOutlet:second)");
    };
    FirstComponent.prototype.loadItems = function () {
        for (var i = 0; i < 20; i++) {
            this._items.push({ title: "items " + i, id: i });
        }
    };
    FirstComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "app-first",
            templateUrl: "first.component.html"
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_1.ActivatedRoute,
            router_2.RouterExtensions])
    ], FirstComponent);
    return FirstComponent;
}());
exports.FirstComponent = FirstComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmlyc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF5RDtBQUN6RCxzREFBK0Q7QUFPL0Q7SUFFRSx3QkFDVSxNQUFjLEVBQ2QsY0FBOEIsRUFDOUIsZ0JBQWtDO1FBRmxDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUpyQyxXQUFNLEdBQVUsRUFBRSxDQUFDO0lBS3ZCLENBQUM7SUFFSixpQ0FBUSxHQUFSO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELHNCQUFXLGlDQUFLO2FBQWhCO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQzs7O09BQUE7SUFFRCxrQ0FBUyxHQUFULFVBQVUsS0FBVTtRQUNsQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUNqQyw0Q0FBNEMsQ0FDN0MsQ0FBQztJQUNKLENBQUM7SUFDRCxrQ0FBUyxHQUFUO1FBQ0UsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxXQUFTLENBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNuRCxDQUFDO0lBQ0gsQ0FBQztJQTFCVSxjQUFjO1FBTDFCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFdBQVc7WUFDckIsV0FBVyxFQUFFLHNCQUFzQjtTQUNwQyxDQUFDO3lDQUlrQixlQUFNO1lBQ0UsdUJBQWM7WUFDWix5QkFBZ0I7T0FMakMsY0FBYyxDQTJCMUI7SUFBRCxxQkFBQztDQUFBLEFBM0JELElBMkJDO0FBM0JZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogXCJhcHAtZmlyc3RcIixcclxuICB0ZW1wbGF0ZVVybDogYGZpcnN0LmNvbXBvbmVudC5odG1sYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmlyc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHB1YmxpYyBfaXRlbXM6IGFueVtdID0gW107XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnNcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgY29uc29sZS5sb2coXCJmaXJzdCB1cmwgXCIgKyB0aGlzLnJvdXRlci51cmwpO1xyXG4gICAgdGhpcy5sb2FkSXRlbXMoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgaXRlbXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faXRlbXM7XHJcbiAgfVxyXG5cclxuICBvbkl0ZW1UYXAoZXZlbnQ6IGFueSkge1xyXG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlQnlVcmwoXHJcbiAgICAgIFwiL3RhYnMvKGZpcnN0T3V0bGV0OjIvL3NlY29uZE91dGxldDpzZWNvbmQpXCJcclxuICAgICk7XHJcbiAgfVxyXG4gIGxvYWRJdGVtcygpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjA7IGkrKykge1xyXG4gICAgICB0aGlzLl9pdGVtcy5wdXNoKHsgdGl0bGU6IGBpdGVtcyAke2l9YCwgaWQ6IGkgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==