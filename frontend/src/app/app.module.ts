import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MainNavbarComponent } from "./components/main-navbar/main-navbar.component";
import { MainProblemsPageComponent } from "./pages/main-problems-page/main-problems-page.component";
import { PageHeaderNavComponent } from "./components/page-header-nav/page-header-nav.component";
import { ProblemsListComponent } from './pages/main-problems-page/problems-list/problems-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavbarComponent,
    MainProblemsPageComponent,
    PageHeaderNavComponent,
    ProblemsListComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
