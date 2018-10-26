"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var tabs_component_1 = require("../tabs/tabs.component");
var second_component_1 = require("../second/second.component");
var tabs_routing_1 = require("./tabs.routing");
var TabsModule = /** @class */ (function () {
    function TabsModule() {
    }
    TabsModule = __decorate([
        core_1.NgModule({
            imports: [common_1.NativeScriptCommonModule, tabs_routing_1.TabsRoutingModule],
            declarations: [tabs_component_1.TabsComponent, second_component_1.SecondComponent],
            providers: []
        })
    ], TabsModule);
    return TabsModule;
}());
exports.TabsModule = TabsModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWJzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzREFBdUU7QUFFdkUseURBQXVEO0FBQ3ZELCtEQUE2RDtBQUU3RCwrQ0FBbUQ7QUFRbkQ7SUFBQTtJQUF5QixDQUFDO0lBQWIsVUFBVTtRQUx0QixlQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsRUFBRSxnQ0FBaUIsQ0FBQztZQUN0RCxZQUFZLEVBQUUsQ0FBQyw4QkFBYSxFQUFFLGtDQUFlLENBQUM7WUFDOUMsU0FBUyxFQUFFLEVBQUU7U0FDZCxDQUFDO09BQ1csVUFBVSxDQUFHO0lBQUQsaUJBQUM7Q0FBQSxBQUExQixJQUEwQjtBQUFiLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XHJcblxyXG5pbXBvcnQgeyBUYWJzQ29tcG9uZW50IH0gZnJvbSBcIi4uL3RhYnMvdGFicy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgU2Vjb25kQ29tcG9uZW50IH0gZnJvbSBcIi4uL3NlY29uZC9zZWNvbmQuY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBUYWJzUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL3RhYnMucm91dGluZ1wiO1xyXG5pbXBvcnQgeyBGaXJzdE1vZHVsZSB9IGZyb20gXCIuLi9maXJzdC9maXJzdC5tb2R1bGVcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW05hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSwgVGFic1JvdXRpbmdNb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW1RhYnNDb21wb25lbnQsIFNlY29uZENvbXBvbmVudF0sXHJcbiAgcHJvdmlkZXJzOiBbXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFic01vZHVsZSB7fVxyXG4iXX0=