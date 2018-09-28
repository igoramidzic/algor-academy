import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Problem } from "../models/problem";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ProblemsService {
  problems: BehaviorSubject<Problem[]> = new BehaviorSubject(null);

  constructor(private http: HttpClient) {
    this.getAllProblems().subscribe((problems: Problem[]) => {
      this.problems.next(problems);
    });
  }

  getAllProblems() {
    return this.http.get("http://localhost:3000/api/problems", {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    });
  }
}
