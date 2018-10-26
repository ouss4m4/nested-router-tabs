import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  moduleId: module.id,
  selector: "app-first-details",
  template: `
    <StackLayout>
      <Label text="item "></Label>
    </StackLayout>
  `
})
export class FirstDetailsComponent implements OnInit {
  public id = this.activatedRoute.snapshot.params.id;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}
  ngOnInit() {
    console.log("details url : " + this.router.url);
  }
}
