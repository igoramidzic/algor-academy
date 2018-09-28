import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainProblemsPageComponent } from "./pages/main-problems-page/main-problems-page.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "problems" },
  { path: "problems", component: MainProblemsPageComponent },
  { path: "problems/:id", component: MainProblemsPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
