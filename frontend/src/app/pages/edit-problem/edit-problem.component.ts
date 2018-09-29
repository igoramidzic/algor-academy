import { Component, OnInit } from "@angular/core";
import { Problem } from "../../models/problem";
import { ActivatedRoute, Router } from "@angular/router";
import { ProblemsService } from "../../services/problems.service";
import * as showdown from "showdown";

@Component({
  selector: "app-edit-problem",
  templateUrl: "./edit-problem.component.html",
  styleUrls: ["./edit-problem.component.scss"]
})
export class EditProblemComponent implements OnInit {
  problem: Problem;
  updatedProblem: Problem;

  wordSolutionTarget;
  pseudoCodeSolutionTarget;
  codeSolutionTarget;
  converter = new showdown.Converter({
    ghCompatibleHeaderId: true,
    simpleLineBreaks: true
  });

  constructor(
    private route: ActivatedRoute,
    private problemsService: ProblemsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.problemsService
          .getProblemById(params.id)
          .subscribe((problem: Problem) => {
            this.problem = problem;
            this.updatedProblem = problem;

            console.log(this.problem);
            if (this.problem) {
              // Document is not loaded at this location in code yet.
              // 1ms solves this.. ?
              setTimeout(() => {
                this.updateWordSolution();
                this.updatePseudoCodeSolution();
                this.updateCodeSolution();
              }, 1);
            }
          });
      })
      .unsubscribe();
  }

  updateWordSolution() {
    this.wordSolutionTarget = document.getElementById("wordSolution");
    this.wordSolutionTarget.innerHTML = this.converter.makeHtml(
      this.updatedProblem.word_solution
    );
  }

  updatePseudoCodeSolution() {
    this.pseudoCodeSolutionTarget = document.getElementById(
      "pseudoCodeSolution"
    );
    this.pseudoCodeSolutionTarget.innerHTML = this.converter.makeHtml(
      this.updatedProblem.pseudo_code_solution
    );
  }

  updateCodeSolution() {
    this.codeSolutionTarget = document.getElementById("codeSolution");
    this.codeSolutionTarget.innerHTML = this.converter.makeHtml(
      this.updatedProblem.code_solution
    );
  }

  updateProblem() {
    var problem = {
      title: this.updatedProblem.title,
      description: this.updatedProblem.description,
      word_solution: this.updatedProblem.word_solution,
      pseudo_code_solution: this.updatedProblem.pseudo_code_solution,
      code_solution: this.updatedProblem.code_solution
    };
    this.problemsService
      .updateProblemById(this.problem._id, problem)
      .subscribe(res => {
        // Route back to problem
        // Create success notification
      });
  }
}
