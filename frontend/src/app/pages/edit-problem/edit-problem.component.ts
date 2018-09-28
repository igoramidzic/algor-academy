import { Component, OnInit } from "@angular/core";
import { Problem } from "../../models/problem";
import { ActivatedRoute } from "@angular/router";
import { ProblemsService } from "../../services/problems.service";
import * as showdown from "showdown";

@Component({
  selector: "app-edit-problem",
  templateUrl: "./edit-problem.component.html",
  styleUrls: ["./edit-problem.component.scss"]
})
export class EditProblemComponent implements OnInit {
  problem: Problem;
  text: String;
  target;
  converter = new showdown.Converter();
  html;

  constructor(
    private route: ActivatedRoute,
    private problemsService: ProblemsService
  ) {}

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.problemsService
          .getProblemById(params.id)
          .subscribe((problem: Problem) => {
            this.problem = problem;
          });
      })
      .unsubscribe();
  }

  updateMarkdownPreview() {
    this.target = document.getElementById("markdown-preview");
    this.html = this.converter.makeHtml(this.text);
    this.target.innerHTML = this.html;
  }
}
