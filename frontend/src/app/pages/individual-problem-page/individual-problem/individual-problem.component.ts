import { Component, OnInit, Input } from "@angular/core";
import { Problem } from "../../../models/problem";

@Component({
  selector: "app-individual-problem",
  templateUrl: "./individual-problem.component.html",
  styleUrls: ["./individual-problem.component.scss"]
})
export class IndividualProblemComponent implements OnInit {
  @Input("problem")
  problem: Problem;

  constructor() {}

  ngOnInit() {}
}
