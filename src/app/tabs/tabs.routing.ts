import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular";
import { TabsComponent } from "./tabs.component";
import { SecondComponent } from "../second/second.component";
import { FirstModule } from "../first/first.module";

const routes: Routes = [
  {
    path: "tabs",
    component: TabsComponent,
    children: [
      { path: "first", loadChildren: () => FirstModule, outlet: "firstOutlet" },
      { path: "second", component: SecondComponent, outlet: "secondOutlet" }
    ]
  }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
  declarations: []
})
export class TabsRoutingModule {}
