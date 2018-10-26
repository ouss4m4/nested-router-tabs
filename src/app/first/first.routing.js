"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_angular_1 = require("nativescript-angular");
var first_component_1 = require("./first.component");
var firstDetails_component_1 = require("./firstDetails.component");
var routes = [
    { path: "", redirectTo: "main", pathMatch: "full" },
    ////before i implemented lazy loading ,  the back button worked 
    {
        path: "main",
        component: first_component_1.FirstComponent
    },
    //i couldn't activate the /:id route, while it was a child of path
    // try it , i couldn't Route to it
    {
        path: "main/:id",
        component: firstDetails_component_1.FirstDetailsComponent
    }
];
var FirstRouting = /** @class */ (function () {
    function FirstRouting() {
    }
    FirstRouting = __decorate([
        core_1.NgModule({
            imports: [nativescript_angular_1.NativeScriptRouterModule.forChild(routes)],
            exports: [nativescript_angular_1.NativeScriptRouterModule],
            declarations: []
        })
    ], FirstRouting);
    return FirstRouting;
}());
exports.FirstRouting = FirstRouting;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyc3Qucm91dGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpcnN0LnJvdXRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFFekMsNkRBQWdFO0FBQ2hFLHFEQUFtRDtBQUNuRCxtRUFBaUU7QUFFakUsSUFBTSxNQUFNLEdBQVc7SUFDckIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtJQUNuRCxnRUFBZ0U7SUFFaEU7UUFDRSxJQUFJLEVBQUUsTUFBTTtRQUNaLFNBQVMsRUFBRSxnQ0FBYztLQUMxQjtJQUNELGtFQUFrRTtJQUNsRSxrQ0FBa0M7SUFDbEM7UUFDRSxJQUFJLEVBQUUsVUFBVTtRQUNoQixTQUFTLEVBQUUsOENBQXFCO0tBQ2pDO0NBQ0YsQ0FBQztBQU9GO0lBQUE7SUFBMkIsQ0FBQztJQUFmLFlBQVk7UUFMeEIsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMsK0NBQXdCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BELE9BQU8sRUFBRSxDQUFDLCtDQUF3QixDQUFDO1lBQ25DLFlBQVksRUFBRSxFQUFFO1NBQ2pCLENBQUM7T0FDVyxZQUFZLENBQUc7SUFBRCxtQkFBQztDQUFBLEFBQTVCLElBQTRCO0FBQWYsb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XHJcbmltcG9ydCB7IEZpcnN0Q29tcG9uZW50IH0gZnJvbSBcIi4vZmlyc3QuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEZpcnN0RGV0YWlsc0NvbXBvbmVudCB9IGZyb20gXCIuL2ZpcnN0RGV0YWlscy5jb21wb25lbnRcIjtcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCJtYWluXCIsIHBhdGhNYXRjaDogXCJmdWxsXCIgfSxcclxuICAvLy8vYmVmb3JlIGkgaW1wbGVtZW50ZWQgbGF6eSBsb2FkaW5nICwgIHRoZSBiYWNrIGJ1dHRvbiB3b3JrZWQgXHJcbiAgXHJcbiAge1xyXG4gICAgcGF0aDogXCJtYWluXCIsXHJcbiAgICBjb21wb25lbnQ6IEZpcnN0Q29tcG9uZW50XHJcbiAgfSxcclxuICAvL2kgY291bGRuJ3QgYWN0aXZhdGUgdGhlIC86aWQgcm91dGUsIHdoaWxlIGl0IHdhcyBhIGNoaWxkIG9mIHBhdGhcclxuICAvLyB0cnkgaXQgLCBpIGNvdWxkbid0IFJvdXRlIHRvIGl0XHJcbiAge1xyXG4gICAgcGF0aDogXCJtYWluLzppZFwiLFxyXG4gICAgY29tcG9uZW50OiBGaXJzdERldGFpbHNDb21wb25lbnRcclxuICB9XHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXHJcbiAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmlyc3RSb3V0aW5nIHt9XHJcbiJdfQ==