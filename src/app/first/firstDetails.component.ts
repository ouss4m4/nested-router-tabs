import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular";

@Component({
  moduleId: module.id,
  selector: "app-first-details",
  templateUrl: "firstDetails.component.html"
})
export class FirstDetailsComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private routerExtensions: RouterExtensions
  ) {}
  ngOnInit() {
    console.log("FirstDetails url : ");
  }
  public goBack() {
    this.routerExtensions.back();
  }
  public canGoBack() {
    alert(this.routerExtensions.canGoBack());
  }
  public canGoBackPrevious() {
    alert(this.routerExtensions.canGoBackToPreviousPage());
  }
}
