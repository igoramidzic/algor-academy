import { Component, OnInit } from "@angular/core";
import { Problem } from "../../models/problem";
import { ProblemsService } from "../../services/problems.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-individual-problem-page",
  templateUrl: "./individual-problem-page.component.html",
  styleUrls: ["./individual-problem-page.component.scss"]
})
export class IndividualProblemPageComponent implements OnInit {
  problem: Problem;

  constructor(
    private problemsService: ProblemsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
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
}
