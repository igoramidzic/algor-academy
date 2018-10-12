import { Injectable } from "@angular/core";
import { BehaviorSubject, SubscribableOrPromise, Subscribable } from "rxjs";
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

  getAllProblems(): Subscribable<any> {
    return this.http.get("http://localhost:3000/api/problems");
  }

  getProblemById(id): Subscribable<any> {
    return this.http.get("http://localhost:3000/api/problems/" + id);
  }

  updateProblemById(id, problem): Subscribable<any> {
    let headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    return this.http.put("http://localhost:3000/api/problems/" + id, problem, {
      headers
    });
  }
}
