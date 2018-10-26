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
    setInterval(() => {
      console.log(" tabsLog ---------- url : " + this.router.url);
    }, 15000);
    this.routerExtensions.navigate(
      [{ outlets: { firstOutlet: ["first"], secondOutlet: ["second"] } }],
      {
        relativeTo: this.activatedRouter
      }
    );
  }
}
