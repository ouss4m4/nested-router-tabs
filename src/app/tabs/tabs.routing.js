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
            //i used loadchildre,  cuz  'path#name" didn't work for me
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5yb3V0aW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGFicy5yb3V0aW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLDZEQUFnRTtBQUNoRSxtREFBaUQ7QUFDakQsK0RBQTZEO0FBQzdELHNEQUFvRDtBQUVwRCxJQUFNLE1BQU0sR0FBVztJQUNyQjtRQUNFLElBQUksRUFBRSxNQUFNO1FBQ1osU0FBUyxFQUFFLDhCQUFhO1FBQ3hCLFFBQVEsRUFBRTtZQUNSLDBEQUEwRDtZQUMxRCxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLGNBQU0sT0FBQSwwQkFBVyxFQUFYLENBQVcsRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFO1lBQ3pFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsa0NBQWUsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFO1NBQ3ZFO0tBQ0Y7Q0FDRixDQUFDO0FBT0Y7SUFBQTtJQUFnQyxDQUFDO0lBQXBCLGlCQUFpQjtRQUw3QixlQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQywrQ0FBd0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEQsT0FBTyxFQUFFLENBQUMsK0NBQXdCLENBQUM7WUFDbkMsWUFBWSxFQUFFLEVBQUU7U0FDakIsQ0FBQztPQUNXLGlCQUFpQixDQUFHO0lBQUQsd0JBQUM7Q0FBQSxBQUFqQyxJQUFpQztBQUFwQiw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XHJcbmltcG9ydCB7IFRhYnNDb21wb25lbnQgfSBmcm9tIFwiLi90YWJzLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBTZWNvbmRDb21wb25lbnQgfSBmcm9tIFwiLi4vc2Vjb25kL3NlY29uZC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRmlyc3RNb2R1bGUgfSBmcm9tIFwiLi4vZmlyc3QvZmlyc3QubW9kdWxlXCI7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICB7XHJcbiAgICBwYXRoOiBcInRhYnNcIixcclxuICAgIGNvbXBvbmVudDogVGFic0NvbXBvbmVudCxcclxuICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgIC8vaSB1c2VkIGxvYWRjaGlsZHJlLCAgY3V6ICAncGF0aCNuYW1lXCIgZGlkbid0IHdvcmsgZm9yIG1lXHJcbiAgICAgIHsgcGF0aDogXCJmaXJzdFwiLCBsb2FkQ2hpbGRyZW46ICgpID0+IEZpcnN0TW9kdWxlLCBvdXRsZXQ6IFwiZmlyc3RPdXRsZXRcIiB9LFxyXG4gICAgICB7IHBhdGg6IFwic2Vjb25kXCIsIGNvbXBvbmVudDogU2Vjb25kQ29tcG9uZW50LCBvdXRsZXQ6IFwic2Vjb25kT3V0bGV0XCIgfVxyXG4gICAgXVxyXG4gIH1cclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcclxuICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYWJzUm91dGluZ01vZHVsZSB7fVxyXG4iXX0=