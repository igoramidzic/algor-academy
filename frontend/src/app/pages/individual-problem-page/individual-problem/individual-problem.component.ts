import { Component, OnInit, Input } from "@angular/core";
import { Problem } from "../../../models/problem";
import * as showdown from "showdown";

declare var variableName: any;

@Component({
  selector: "app-individual-problem",
  templateUrl: "./individual-problem.component.html",
  styleUrls: ["./individual-problem.component.scss"]
})
export class IndividualProblemComponent implements OnInit {
  @Input("problem")
  problem: Problem;

  converter = new showdown.Converter({
    ghCompatibleHeaderId: true,
    simpleLineBreaks: true
  });

  constructor() {}

  ngOnInit() {
    this.convertMarkdown();
  }

  convertMarkdown() {
    var longDescriptionTarget = document.getElementById("longDescription");
    var wordSolutionTarget = document.getElementById("wordSolution");
    var pseudoCodeSolutionTarget = document.getElementById(
      "pseudoCodeSolution"
    );
    var codeSolutionTarget = document.getElementById("codeSolution");

    longDescriptionTarget.innerHTML = this.converter.makeHtml(
      this.problem.long_description
    );
    wordSolutionTarget.innerHTML = this.converter.makeHtml(
      this.problem.word_solution
    );
    pseudoCodeSolutionTarget.innerHTML = this.converter.makeHtml(
      this.problem.pseudo_code_solution
    );
    codeSolutionTarget.innerHTML = this.converter.makeHtml(
      this.problem.code_solution
    );
  }
}
