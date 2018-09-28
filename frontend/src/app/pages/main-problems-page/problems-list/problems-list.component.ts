import { Component, OnInit, Input } from "@angular/core";
import { Problem } from "../../../models/problem";

@Component({
  selector: "app-problems-list",
  templateUrl: "./problems-list.component.html",
  styleUrls: ["./problems-list.component.scss"]
})
export class ProblemsListComponent implements OnInit {
  @Input("problems")
  problems: Problem[];

  constructor() {}

  ngOnInit() {}
}
