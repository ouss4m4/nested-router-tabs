import { NgModule } from "@angular/core";
import { FirstComponent } from "./first.component";
import { FirstDetailsComponent } from "./firstDetails.component";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { FirstRouting } from "./first.routing";

@NgModule({
  imports: [NativeScriptCommonModule, FirstRouting],
  exports: [FirstRouting],
  declarations: [FirstComponent, FirstDetailsComponent]
})
export class FirstModule {}
