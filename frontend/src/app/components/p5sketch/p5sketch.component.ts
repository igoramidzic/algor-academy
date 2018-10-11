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

  constructor() {}

  ngOnInit() {
    this.loadAPI = new Promise(resolve => {
      this.loadScript(this.problem.script_link);
      resolve(true);
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
