import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
  moduleId: module.id,
  selector: "app-first",
  templateUrl: `first.component.html`
})
export class FirstComponent implements OnInit {
  public _items: any[] = [];
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private routerExtensions: RouterExtensions
  ) {}

  ngOnInit() {
    console.log("first url " + this.router.url);
    this.loadItems();
  }

  public get items() {
    return this._items;
  }

  onItemTap(event: any) {
    this.routerExtensions.navigateByUrl(
      "/tabs/(firstOutlet:2//secondOutlet:second)"
    );
  }
  loadItems() {
    for (let i = 0; i < 20; i++) {
      this._items.push({ title: `items ${i}`, id: i });
    }
  }
}
