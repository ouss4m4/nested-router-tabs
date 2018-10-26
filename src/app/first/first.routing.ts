import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular";
import { FirstComponent } from "./first.component";
import { FirstDetailsComponent } from "./firstDetails.component";

const routes: Routes = [
  { path: "", redirectTo: "main", pathMatch: "full" },
  ////before i implemented lazy loading ,  the back button worked 
  
  {
    path: "main",
    component: FirstComponent
  },
  //i couldn't activate the /:id route, while it was a child of path
  // try it , i couldn't Route to it
  {
    path: "main/:id",
    component: FirstDetailsComponent
  }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
  declarations: []
})
export class FirstRouting {}
