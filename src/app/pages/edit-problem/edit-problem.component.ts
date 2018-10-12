import { Component, OnInit } from "@angular/core";
import { Problem } from "../../models/problem";
import { ActivatedRoute, Router } from "@angular/router";
import { ProblemsService } from "../../services/problems.service";
import * as showdown from "showdown";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-edit-problem",
  templateUrl: "./edit-problem.component.html",
  styleUrls: ["./edit-problem.component.scss"]
})
export class EditProblemComponent implements OnInit {
  problem: Problem;
  updateProblemForm: FormGroup;

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

            if (this.problem) {
              // Document is not loaded at this location in code yet.
              // 1ms solves this.. ?
              this.setFormValues();
              setTimeout(() => {
                this.updateLongDescription();
                this.updateWordSolution();
                this.updatePseudoCodeSolution();
                this.updateCodeSolution();
              }, 1);
              this.setFormChangeWatcher();
            }
          });
      })
      .unsubscribe();
  }

  setFormValues() {
    const {
      title,
      description,
      long_description,
      difficulty,
      link,
      word_solution,
      pseudo_code_solution,
      code_solution
    } = this.problem;

    this.updateProblemForm = new FormGroup({
      title: new FormControl(title, [Validators.required]),
      description: new FormControl(description, [Validators.required]),
      long_description: new FormControl(long_description, [
        Validators.required
      ]),
      difficulty: new FormControl(difficulty, [Validators.required]),
      link: new FormControl(link, [Validators.required]),
      word_solution: new FormControl(word_solution, [Validators.required]),
      pseudo_code_solution: new FormControl(pseudo_code_solution, [
        Validators.required
      ]),
      code_solution: new FormControl(code_solution, [Validators.required])
    });
  }

  setFormChangeWatcher() {
    this.updateProblemForm.valueChanges.subscribe(() => {
      this.updateLongDescription();
      this.updateWordSolution();
      this.updatePseudoCodeSolution();
      this.updateCodeSolution();
      console.log("hello");
    });
  }

  updateLongDescription() {
    var longDescriptionTarget = document.getElementById("longDescription");
    var markdown = this.updateProblemForm.get("long_description").value;
    longDescriptionTarget.innerHTML = this.converter.makeHtml(markdown);
  }

  updateWordSolution() {
    var wordSolutionTarget = document.getElementById("wordSolution");
    var markdown = this.updateProblemForm.get("word_solution").value;
    wordSolutionTarget.innerHTML = this.converter.makeHtml(markdown);
  }

  updatePseudoCodeSolution() {
    var pseudoCodeSolutionTarget = document.getElementById(
      "pseudoCodeSolution"
    );
    var markdown = this.updateProblemForm.get("pseudo_code_solution").value;
    pseudoCodeSolutionTarget.innerHTML = this.converter.makeHtml(markdown);
  }

  updateCodeSolution() {
    var codeSolutionTarget = document.getElementById("codeSolution");
    var markdown = this.updateProblemForm.get("code_solution").value;
    codeSolutionTarget.innerHTML = this.converter.makeHtml(markdown);
  }

  updateProblem() {
    if (this.updateProblemForm.valid) {
      this.problemsService
        .updateProblemById(this.problem._id, /**/ this.updateProblemForm.value)
        .subscribe(res => {
          // Route back to problem
          // Create success notification
          console.log(res);
        });
    }
  }
}
