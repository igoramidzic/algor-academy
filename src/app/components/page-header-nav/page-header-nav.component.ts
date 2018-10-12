import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-page-header-nav",
  templateUrl: "./page-header-nav.component.html",
  styleUrls: ["./page-header-nav.component.scss"]
})
export class PageHeaderNavComponent implements OnInit {
  @Input("headerTitle")
  headerTitle;

  constructor() {}

  ngOnInit() {}
}
