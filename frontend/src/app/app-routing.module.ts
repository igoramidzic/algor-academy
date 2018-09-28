import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainProblemsPageComponent } from "./pages/main-problems-page/main-problems-page.component";
import { IndividualProblemPageComponent } from "./pages/individual-problem-page/individual-problem-page.component";
import { EditProblemComponent } from "./pages/edit-problem/edit-problem.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "problems" },
  { path: "problems", component: MainProblemsPageComponent },
  { path: "problems/:id", component: IndividualProblemPageComponent },
  { path: "problems/:id/edit", component: EditProblemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
