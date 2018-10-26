"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var first_component_1 = require("./first.component");
var firstDetails_component_1 = require("./firstDetails.component");
var common_1 = require("nativescript-angular/common");
var first_routing_1 = require("./first.routing");
var FirstModule = /** @class */ (function () {
    function FirstModule() {
    }
    FirstModule = __decorate([
        core_1.NgModule({
            imports: [common_1.NativeScriptCommonModule, first_routing_1.FirstRouting],
            exports: [first_routing_1.FirstRouting],
            declarations: [first_component_1.FirstComponent, firstDetails_component_1.FirstDetailsComponent]
        })
    ], FirstModule);
    return FirstModule;
}());
exports.FirstModule = FirstModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyc3QubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmlyc3QubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBQ3pDLHFEQUFtRDtBQUNuRCxtRUFBaUU7QUFDakUsc0RBQXVFO0FBQ3ZFLGlEQUErQztBQU8vQztJQUFBO0lBQTBCLENBQUM7SUFBZCxXQUFXO1FBTHZCLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixFQUFFLDRCQUFZLENBQUM7WUFDakQsT0FBTyxFQUFFLENBQUMsNEJBQVksQ0FBQztZQUN2QixZQUFZLEVBQUUsQ0FBQyxnQ0FBYyxFQUFFLDhDQUFxQixDQUFDO1NBQ3RELENBQUM7T0FDVyxXQUFXLENBQUc7SUFBRCxrQkFBQztDQUFBLEFBQTNCLElBQTJCO0FBQWQsa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZpcnN0Q29tcG9uZW50IH0gZnJvbSBcIi4vZmlyc3QuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEZpcnN0RGV0YWlsc0NvbXBvbmVudCB9IGZyb20gXCIuL2ZpcnN0RGV0YWlscy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBGaXJzdFJvdXRpbmcgfSBmcm9tIFwiLi9maXJzdC5yb3V0aW5nXCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsIEZpcnN0Um91dGluZ10sXHJcbiAgZXhwb3J0czogW0ZpcnN0Um91dGluZ10sXHJcbiAgZGVjbGFyYXRpb25zOiBbRmlyc3RDb21wb25lbnQsIEZpcnN0RGV0YWlsc0NvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEZpcnN0TW9kdWxlIHt9XHJcbiJdfQ==