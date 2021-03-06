import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MainNavbarComponent } from "./components/main-navbar/main-navbar.component";
import { MainProblemsPageComponent } from "./pages/main-problems-page/main-problems-page.component";
import { PageHeaderNavComponent } from "./components/page-header-nav/page-header-nav.component";
import { ProblemsListComponent } from "./pages/main-problems-page/problems-list/problems-list.component";
import { IndividualProblemPageComponent } from "./pages/individual-problem-page/individual-problem-page.component";
import { IndividualProblemComponent } from "./pages/individual-problem-page/individual-problem/individual-problem.component";
import { EditProblemComponent } from "./pages/edit-problem/edit-problem.component";
import { SubmitFormComponent } from "./pages/edit-problem/submit-form/submit-form.component";
import { P5sketchComponent } from './components/p5sketch/p5sketch.component';
import { Spinner1Component } from './components/spinners/spinner1/spinner1.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavbarComponent,
    MainProblemsPageComponent,
    PageHeaderNavComponent,
    ProblemsListComponent,
    IndividualProblemPageComponent,
    IndividualProblemComponent,
    EditProblemComponent,
    SubmitFormComponent,
    P5sketchComponent,
    Spinner1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
