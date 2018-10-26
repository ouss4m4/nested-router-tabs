import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
  moduleId: module.id,
  selector: "app-tabs",
  templateUrl: `tabs.component.html`
})
export class TabsComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private routerExtensions: RouterExtensions
  ) {}
  ngOnInit() {
    setTimeout(() => {
      console.log("---------- url : " + this.router.url);
    }, 1250);
    this.routerExtensions.navigate(
      [{ outlets: { firstOutlet: ["first"], secondOutlet: ["second"] } }],
      {
        relativeTo: this.activatedRouter
      }
    );
  }
}
