"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_angular_1 = require("nativescript-angular");
var tabs_component_1 = require("./tabs.component");
var second_component_1 = require("../second/second.component");
var first_module_1 = require("../first/first.module");
var routes = [
    {
        path: "tabs",
        component: tabs_component_1.TabsComponent,
        children: [
            { path: "first", loadChildren: function () { return first_module_1.FirstModule; }, outlet: "firstOutlet" },
            { path: "second", component: second_component_1.SecondComponent, outlet: "secondOutlet" }
        ]
    }
];
var TabsRoutingModule = /** @class */ (function () {
    function TabsRoutingModule() {
    }
    TabsRoutingModule = __decorate([
        core_1.NgModule({
            imports: [nativescript_angular_1.NativeScriptRouterModule.forChild(routes)],
            exports: [nativescript_angular_1.NativeScriptRouterModule],
            declarations: []
        })
    ], TabsRoutingModule);
    return TabsRoutingModule;
}());
exports.TabsRoutingModule = TabsRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5yb3V0aW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGFicy5yb3V0aW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLDZEQUFnRTtBQUNoRSxtREFBaUQ7QUFDakQsK0RBQTZEO0FBQzdELHNEQUFvRDtBQUVwRCxJQUFNLE1BQU0sR0FBVztJQUNyQjtRQUNFLElBQUksRUFBRSxNQUFNO1FBQ1osU0FBUyxFQUFFLDhCQUFhO1FBQ3hCLFFBQVEsRUFBRTtZQUNSLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsY0FBTSxPQUFBLDBCQUFXLEVBQVgsQ0FBVyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUU7WUFDekUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxrQ0FBZSxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUU7U0FDdkU7S0FDRjtDQUNGLENBQUM7QUFPRjtJQUFBO0lBQWdDLENBQUM7SUFBcEIsaUJBQWlCO1FBTDdCLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLCtDQUF3QixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwRCxPQUFPLEVBQUUsQ0FBQywrQ0FBd0IsQ0FBQztZQUNuQyxZQUFZLEVBQUUsRUFBRTtTQUNqQixDQUFDO09BQ1csaUJBQWlCLENBQUc7SUFBRCx3QkFBQztDQUFBLEFBQWpDLElBQWlDO0FBQXBCLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcclxuaW1wb3J0IHsgVGFic0NvbXBvbmVudCB9IGZyb20gXCIuL3RhYnMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFNlY29uZENvbXBvbmVudCB9IGZyb20gXCIuLi9zZWNvbmQvc2Vjb25kLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBGaXJzdE1vZHVsZSB9IGZyb20gXCIuLi9maXJzdC9maXJzdC5tb2R1bGVcIjtcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gIHtcclxuICAgIHBhdGg6IFwidGFic1wiLFxyXG4gICAgY29tcG9uZW50OiBUYWJzQ29tcG9uZW50LFxyXG4gICAgY2hpbGRyZW46IFtcclxuICAgICAgeyBwYXRoOiBcImZpcnN0XCIsIGxvYWRDaGlsZHJlbjogKCkgPT4gRmlyc3RNb2R1bGUsIG91dGxldDogXCJmaXJzdE91dGxldFwiIH0sXHJcbiAgICAgIHsgcGF0aDogXCJzZWNvbmRcIiwgY29tcG9uZW50OiBTZWNvbmRDb21wb25lbnQsIG91dGxldDogXCJzZWNvbmRPdXRsZXRcIiB9XHJcbiAgICBdXHJcbiAgfVxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxyXG4gIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW11cclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYnNSb3V0aW5nTW9kdWxlIHt9XHJcbiJdfQ==