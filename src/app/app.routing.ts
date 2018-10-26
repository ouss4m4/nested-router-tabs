import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  //routing for login,
  { path: "", redirectTo: "/login", pathMatch: "full" },
  {
    path: "login",
    component: LoginComponent
  }
  //routing for tabs is in tabs.routing.ts ,  not lazy loaded,  just imported (forchild())
  /*{
    path: 'tabs', component ....
  }*/
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {}
