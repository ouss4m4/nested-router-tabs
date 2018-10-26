import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular";
import { FirstComponent } from "./first.component";
import { FirstDetailsComponent } from "./firstDetails.component";

const routes: Routes = [
  { path: "", component: FirstComponent },
  {
    path: "/:id",
    component: FirstDetailsComponent
  }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
  declarations: []
})
export class FirstRouting {}
