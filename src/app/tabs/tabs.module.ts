import { NgModule } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { TabsComponent } from "../tabs/tabs.component";
import { SecondComponent } from "../second/second.component";

import { TabsRoutingModule } from "./tabs.routing";
import { FirstModule } from "../first/first.module";

@NgModule({
  imports: [NativeScriptCommonModule, TabsRoutingModule],
  declarations: [TabsComponent, SecondComponent],
  providers: []
})
export class TabsModule {}
