import { Component } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
  moduleId: module.id,
  selector: "app-login",
  templateUrl: `login.component.html`
})

export class LoginComponent {
  constructor(
    private routerExtensions: RouterExtensions,
    private activatedRouter: ActivatedRoute
  ) {}
  login() {
    // @todo : check why Djenkov uses [nsrouterlinks] & activate outlets & it worked
    this.routerExtensions.navigate(["tabs"]);
  }
}
