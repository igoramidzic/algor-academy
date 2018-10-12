import { Component, OnInit } from "@angular/core";
import { ProblemsService } from "../../services/problems.service";
import { Problem } from "../../models/problem";

@Component({
  selector: "app-main-problems-page",
  templateUrl: "./main-problems-page.component.html",
  styleUrls: ["./main-problems-page.component.scss"]
})
export class MainProblemsPageComponent implements OnInit {
  headerTitle: String;
  problems: Problem[];

  constructor(private problemsService: ProblemsService) {}

  ngOnInit() {
    this.headerTitle = "Problems";

    // Get all problems
    this.problemsService.problems.subscribe(problems => {
      this.problems = problems;
    });
  }
}
