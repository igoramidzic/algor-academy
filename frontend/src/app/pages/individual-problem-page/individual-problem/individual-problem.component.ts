import { Component, OnInit, Input } from "@angular/core";
import { Problem } from "../../../models/problem";
import * as showdown from "showdown";

@Component({
  selector: "app-individual-problem",
  templateUrl: "./individual-problem.component.html",
  styleUrls: ["./individual-problem.component.scss"]
})
export class IndividualProblemComponent implements OnInit {
  @Input("problem")
  problem: Problem;
  text: String;

  constructor() {}

  ngOnInit() {}
}
