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
        //this Work but doesn't allow the use of back button
        this.routerExtensions.navigate([
            "tabs",
            { outlets: { firstOutlet: ["first", "main", "7"] } }
        ]);
        /*  @todo: add relativeTo
       this.routerExtensions.navigate(
          [{ outlets: { firstOutlet: ["first", "main", "7"] } }],
          { relativeTo: this.activatedRoute }
        );
        
        */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmlyc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF5RDtBQUN6RCxzREFBK0Q7QUFPL0Q7SUFFRSx3QkFDVSxNQUFjLEVBQ2QsY0FBOEIsRUFDOUIsZ0JBQWtDO1FBRmxDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUpyQyxXQUFNLEdBQVUsRUFBRSxDQUFDO0lBS3ZCLENBQUM7SUFFSixpQ0FBUSxHQUFSO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELHNCQUFXLGlDQUFLO2FBQWhCO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQzs7O09BQUE7SUFFRCxrQ0FBUyxHQUFULFVBQVUsS0FBVTtRQUNsQixvREFBb0Q7UUFDcEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQztZQUM3QixNQUFNO1lBQ04sRUFBRSxPQUFPLEVBQUUsRUFBRSxXQUFXLEVBQUUsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUU7U0FDckQsQ0FBQyxDQUFDO1FBRUg7Ozs7OztVQU1FO0lBQ0osQ0FBQztJQUNELGtDQUFTLEdBQVQ7UUFDRSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLFdBQVMsQ0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ25ELENBQUM7SUFDSCxDQUFDO0lBcENVLGNBQWM7UUFMMUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsV0FBVztZQUNyQixXQUFXLEVBQUUsc0JBQXNCO1NBQ3BDLENBQUM7eUNBSWtCLGVBQU07WUFDRSx1QkFBYztZQUNaLHlCQUFnQjtPQUxqQyxjQUFjLENBcUMxQjtJQUFELHFCQUFDO0NBQUEsQUFyQ0QsSUFxQ0M7QUFyQ1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiBcImFwcC1maXJzdFwiLFxyXG4gIHRlbXBsYXRlVXJsOiBgZmlyc3QuY29tcG9uZW50Lmh0bWxgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGaXJzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgcHVibGljIF9pdGVtczogYW55W10gPSBbXTtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9uc1xyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImZpcnN0IHVybCBcIiArIHRoaXMucm91dGVyLnVybCk7XHJcbiAgICB0aGlzLmxvYWRJdGVtcygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBpdGVtcygpIHtcclxuICAgIHJldHVybiB0aGlzLl9pdGVtcztcclxuICB9XHJcblxyXG4gIG9uSXRlbVRhcChldmVudDogYW55KSB7XHJcbiAgICAvL3RoaXMgV29yayBidXQgZG9lc24ndCBhbGxvdyB0aGUgdXNlIG9mIGJhY2sgYnV0dG9uXHJcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1xyXG4gICAgICBcInRhYnNcIixcclxuICAgICAgeyBvdXRsZXRzOiB7IGZpcnN0T3V0bGV0OiBbXCJmaXJzdFwiLCBcIm1haW5cIiwgXCI3XCJdIH0gfVxyXG4gICAgXSk7XHJcblxyXG4gICAgLyogIEB0b2RvOiBhZGQgcmVsYXRpdmVUbyBcclxuICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFxyXG4gICAgICBbeyBvdXRsZXRzOiB7IGZpcnN0T3V0bGV0OiBbXCJmaXJzdFwiLCBcIm1haW5cIiwgXCI3XCJdIH0gfV0sXHJcbiAgICAgIHsgcmVsYXRpdmVUbzogdGhpcy5hY3RpdmF0ZWRSb3V0ZSB9XHJcbiAgICApO1xyXG4gICAgXHJcbiAgICAqL1xyXG4gIH1cclxuICBsb2FkSXRlbXMoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDIwOyBpKyspIHtcclxuICAgICAgdGhpcy5faXRlbXMucHVzaCh7IHRpdGxlOiBgaXRlbXMgJHtpfWAsIGlkOiBpIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=