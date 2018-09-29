import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-submit-form",
  templateUrl: "./submit-form.component.html",
  styleUrls: ["./submit-form.component.scss"]
})
export class SubmitFormComponent implements OnInit {
  @Output()
  onSaveProblem = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}
}
