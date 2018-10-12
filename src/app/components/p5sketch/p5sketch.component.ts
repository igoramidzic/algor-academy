import { Component, OnInit, Input } from "@angular/core";

import "p5";
import { Problem } from "src/app/models/problem";

@Component({
  selector: "app-p5sketch",
  templateUrl: "./p5sketch.component.html",
  styleUrls: ["./p5sketch.component.scss"]
})
export class P5sketchComponent implements OnInit {
  @Input("problem")
  problem: Problem;
  loadAPI: Promise<any>;
  loading: boolean = true;

  constructor() {}

  ngOnInit() {
    this.loadAPI = new Promise(resolve => {
      this.loadScript(<string>this.problem.script_link);
      var scripts = document.getElementsByTagName("script");
      var isFound = false;
      while (!isFound) {
        for (var i = 0; i < scripts.length; ++i) {
          if (
            scripts[i].getAttribute("src") != null &&
            scripts[i]
              .getAttribute("src")
              .includes(<string>this.problem.script_link)
          ) {
            isFound = true;
            resolve(true);
            break;
          }
        }
      }
    }).then(() => {
      this.loading = false;
    });
  }

  public loadScript(script) {
    var script = script;

    let node = document.createElement("script");
    node.src = script;
    node.type = "text/javascript";
    node.async = false;
    node.charset = "utf-8";
    document.getElementsByTagName("head")[0].appendChild(node);
  }
}
