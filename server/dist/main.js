(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_main_problems_page_main_problems_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/main-problems-page/main-problems-page.component */ "./src/app/pages/main-problems-page/main-problems-page.component.ts");
/* harmony import */ var _pages_individual_problem_page_individual_problem_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/individual-problem-page/individual-problem-page.component */ "./src/app/pages/individual-problem-page/individual-problem-page.component.ts");
/* harmony import */ var _pages_edit_problem_edit_problem_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/edit-problem/edit-problem.component */ "./src/app/pages/edit-problem/edit-problem.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: "", pathMatch: "full", redirectTo: "problems" },
    { path: "problems", component: _pages_main_problems_page_main_problems_page_component__WEBPACK_IMPORTED_MODULE_2__["MainProblemsPageComponent"] },
    { path: "problems/:id", component: _pages_individual_problem_page_individual_problem_page_component__WEBPACK_IMPORTED_MODULE_3__["IndividualProblemPageComponent"] },
    { path: "problems/:id/edit", component: _pages_edit_problem_edit_problem_component__WEBPACK_IMPORTED_MODULE_4__["EditProblemComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main-navbar></app-main-navbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Nunito+Sans:300,400,600,700\");\n.center-container {\n  display: flex;\n  flex-direction: column;\n  height: auto; }\n.center-container .center-space-between-content {\n    align-items: center;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between; }\n.center-container .bottom-space-between-content {\n    align-items: baseline;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between; }\n.center-container .vertical-center-space-between-content {\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between; }\n.center-container .center-left-content {\n    align-items: center;\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start; }\n.center-container .center-left-top-content {\n    align-items: flex-start;\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start; }\nbutton {\n  outline: none; }\n.action-btn {\n  font-family: \"Nunito Sans\", sans-serif;\n  padding: 0 24px;\n  line-height: 1;\n  border: none;\n  font-weight: 700;\n  font-size: 16px;\n  height: 40px;\n  cursor: pointer; }\n.regular-action-btn {\n  box-shadow: 0 3px 10px 0 rgba(115, 143, 147, 0.3);\n  color: #0e141e; }\n.success-action-btn {\n  background-color: #1ba94c;\n  box-shadow: 0 3px 6px 0 rgba(27, 169, 76, 0.4);\n  color: #ffffff; }\n.slim-box-shadow {\n  background-color: #ffffff;\n  box-shadow: 0.1px 1px 4px 0 #e7eeef; }\n.fat-box-shadow {\n  box-shadow: rgba(115, 143, 147, 0.4) 0px 6px 16px 0px; }\n.dark-text {\n  color: #0e141e; }\n.max-page-width {\n  max-width: 1240px;\n  margin: auto; }\n.form-container {\n  font-family: \"Nunito Sans\", sans-serif; }\n.form-container .regular-label {\n    color: #0e141e;\n    font-size: 15px;\n    margin-bottom: 4px;\n    display: inline-block;\n    font-weight: 700; }\n.form-container .regular-text-box {\n    border: 1px solid #c2c7d0;\n    border-radius: 5px;\n    padding: 10px 14px;\n    line-height: 1;\n    outline: none;\n    color: #0e141e;\n    font-size: 16px;\n    width: 100%; }\n.form-container .regular-textarea {\n    border: 1px solid #c2c7d0;\n    border-radius: 5px;\n    padding: 10px 14px;\n    line-height: 1;\n    outline: none;\n    color: #0e141e;\n    font-size: 14px;\n    width: 100%;\n    min-height: 200px;\n    max-height: 400px; }\n@media only screen and (min-width: 768px) {\n  .hidden-desktop {\n    display: none !important; } }\n@media only screen and (max-width: 767px) {\n  .hidden-mobile {\n    display: none !important; } }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_main_navbar_main_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/main-navbar/main-navbar.component */ "./src/app/components/main-navbar/main-navbar.component.ts");
/* harmony import */ var _pages_main_problems_page_main_problems_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/main-problems-page/main-problems-page.component */ "./src/app/pages/main-problems-page/main-problems-page.component.ts");
/* harmony import */ var _components_page_header_nav_page_header_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/page-header-nav/page-header-nav.component */ "./src/app/components/page-header-nav/page-header-nav.component.ts");
/* harmony import */ var _pages_main_problems_page_problems_list_problems_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/main-problems-page/problems-list/problems-list.component */ "./src/app/pages/main-problems-page/problems-list/problems-list.component.ts");
/* harmony import */ var _pages_individual_problem_page_individual_problem_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/individual-problem-page/individual-problem-page.component */ "./src/app/pages/individual-problem-page/individual-problem-page.component.ts");
/* harmony import */ var _pages_individual_problem_page_individual_problem_individual_problem_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/individual-problem-page/individual-problem/individual-problem.component */ "./src/app/pages/individual-problem-page/individual-problem/individual-problem.component.ts");
/* harmony import */ var _pages_edit_problem_edit_problem_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/edit-problem/edit-problem.component */ "./src/app/pages/edit-problem/edit-problem.component.ts");
/* harmony import */ var _pages_edit_problem_submit_form_submit_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/edit-problem/submit-form/submit-form.component */ "./src/app/pages/edit-problem/submit-form/submit-form.component.ts");
/* harmony import */ var _components_p5sketch_p5sketch_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/p5sketch/p5sketch.component */ "./src/app/components/p5sketch/p5sketch.component.ts");
/* harmony import */ var _components_spinners_spinner1_spinner1_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/spinners/spinner1/spinner1.component */ "./src/app/components/spinners/spinner1/spinner1.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_main_navbar_main_navbar_component__WEBPACK_IMPORTED_MODULE_6__["MainNavbarComponent"],
                _pages_main_problems_page_main_problems_page_component__WEBPACK_IMPORTED_MODULE_7__["MainProblemsPageComponent"],
                _components_page_header_nav_page_header_nav_component__WEBPACK_IMPORTED_MODULE_8__["PageHeaderNavComponent"],
                _pages_main_problems_page_problems_list_problems_list_component__WEBPACK_IMPORTED_MODULE_9__["ProblemsListComponent"],
                _pages_individual_problem_page_individual_problem_page_component__WEBPACK_IMPORTED_MODULE_10__["IndividualProblemPageComponent"],
                _pages_individual_problem_page_individual_problem_individual_problem_component__WEBPACK_IMPORTED_MODULE_11__["IndividualProblemComponent"],
                _pages_edit_problem_edit_problem_component__WEBPACK_IMPORTED_MODULE_12__["EditProblemComponent"],
                _pages_edit_problem_submit_form_submit_form_component__WEBPACK_IMPORTED_MODULE_13__["SubmitFormComponent"],
                _components_p5sketch_p5sketch_component__WEBPACK_IMPORTED_MODULE_14__["P5sketchComponent"],
                _components_spinners_spinner1_spinner1_component__WEBPACK_IMPORTED_MODULE_15__["Spinner1Component"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/main-navbar/main-navbar.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/main-navbar/main-navbar.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-navbar-container\">\n  <div class=\"content-wrapper center-container max-page-width\">\n    <div class=\"center-space-between-content\">\n      <div class=\"left-container\">\n        <div class=\"center-container\">\n          <div class=\"vertical-center-space-between-content\">\n            <a [routerLink]=\"['']\" class=\"logo-link\">\n              <img class=\"logo-img\" src=\"assets/img/logo.png\" alt=\"Algor Academy\">\n            </a>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"right-container\">\n        <ul class=\"link-list\">\n          <li class=\"link-item\">\n            <a [routerLinkActive]=\"['active']\" [routerLink]=\"['problems']\" class=\"link\">Problems</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/main-navbar/main-navbar.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/main-navbar/main-navbar.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Nunito+Sans:300,400,600,700\");\n.center-container {\n  display: flex;\n  flex-direction: column;\n  height: auto; }\n.center-container .center-space-between-content {\n    align-items: center;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between; }\n.center-container .bottom-space-between-content {\n    align-items: baseline;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between; }\n.center-container .vertical-center-space-between-content {\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between; }\n.center-container .center-left-content {\n    align-items: center;\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start; }\n.center-container .center-left-top-content {\n    align-items: flex-start;\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start; }\nbutton {\n  outline: none; }\n.action-btn {\n  font-family: \"Nunito Sans\", sans-serif;\n  padding: 0 24px;\n  line-height: 1;\n  border: none;\n  font-weight: 700;\n  font-size: 16px;\n  height: 40px;\n  cursor: pointer; }\n.regular-action-btn {\n  box-shadow: 0 3px 10px 0 rgba(115, 143, 147, 0.3);\n  color: #0e141e; }\n.success-action-btn {\n  background-color: #1ba94c;\n  box-shadow: 0 3px 6px 0 rgba(27, 169, 76, 0.4);\n  color: #ffffff; }\n.slim-box-shadow {\n  background-color: #ffffff;\n  box-shadow: 0.1px 1px 4px 0 #e7eeef; }\n.fat-box-shadow {\n  box-shadow: rgba(115, 143, 147, 0.4) 0px 6px 16px 0px; }\n.dark-text {\n  color: #0e141e; }\n.max-page-width {\n  max-width: 1240px;\n  margin: auto; }\n.form-container {\n  font-family: \"Nunito Sans\", sans-serif; }\n.form-container .regular-label {\n    color: #0e141e;\n    font-size: 15px;\n    margin-bottom: 4px;\n    display: inline-block;\n    font-weight: 700; }\n.form-container .regular-text-box {\n    border: 1px solid #c2c7d0;\n    border-radius: 5px;\n    padding: 10px 14px;\n    line-height: 1;\n    outline: none;\n    color: #0e141e;\n    font-size: 16px;\n    width: 100%; }\n.form-container .regular-textarea {\n    border: 1px solid #c2c7d0;\n    border-radius: 5px;\n    padding: 10px 14px;\n    line-height: 1;\n    outline: none;\n    color: #0e141e;\n    font-size: 14px;\n    width: 100%;\n    min-height: 200px;\n    max-height: 400px; }\n@media only screen and (min-width: 768px) {\n  .hidden-desktop {\n    display: none !important; } }\n@media only screen and (max-width: 767px) {\n  .hidden-mobile {\n    display: none !important; } }\n.main-navbar-container {\n  font-family: \"Nunito Sans\", sans-serif;\n  background-color: #39424e; }\n.main-navbar-container .content-wrapper {\n    padding: 0 15px; }\n.main-navbar-container .left-container .logo-link {\n    margin: 0;\n    height: 60px; }\n.main-navbar-container .left-container .logo-link .logo-img {\n      height: 60px; }\n.main-navbar-container .right-container {\n    height: 60px; }\n.main-navbar-container .right-container .link-list {\n      margin: 0;\n      padding: 0;\n      list-style-type: none;\n      height: 60px; }\n.main-navbar-container .right-container .link-list .link-item {\n        display: inline-block;\n        margin-right: 30px; }\n.main-navbar-container .right-container .link-list .link-item:last-child {\n          margin: 0; }\n.main-navbar-container .right-container .link-list .link-item .link {\n          color: #b7c9cc;\n          display: inline-block;\n          font-size: 14px;\n          font-weight: 700;\n          height: 60px;\n          line-height: 60px;\n          text-transform: uppercase;\n          text-decoration: none; }\n.main-navbar-container .right-container .link-list .link-item .active {\n          border-bottom: 5px solid #1ba94c;\n          color: #ffffff; }\n"

/***/ }),

/***/ "./src/app/components/main-navbar/main-navbar.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/main-navbar/main-navbar.component.ts ***!
  \*****************************************************************/
/*! exports provided: MainNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavbarComponent", function() { return MainNavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainNavbarComponent = /** @class */ (function () {
    function MainNavbarComponent() {
    }
    MainNavbarComponent.prototype.ngOnInit = function () { };
    MainNavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-main-navbar",
            template: __webpack_require__(/*! ./main-navbar.component.html */ "./src/app/components/main-navbar/main-navbar.component.html"),
            styles: [__webpack_require__(/*! ./main-navbar.component.scss */ "./src/app/components/main-navbar/main-navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MainNavbarComponent);
    return MainNavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/p5sketch/p5sketch.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/p5sketch/p5sketch.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner-container\" *ngIf=\"loading\">\n  <app-spinner1></app-spinner1>\n</div>\n\n<div id=\"p5sketchLocation\"></div>\n"

/***/ }),

/***/ "./src/app/components/p5sketch/p5sketch.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/p5sketch/p5sketch.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/p5sketch/p5sketch.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/p5sketch/p5sketch.component.ts ***!
  \***********************************************************/
/*! exports provided: P5sketchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P5sketchComponent", function() { return P5sketchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! p5 */ "./node_modules/p5/lib/p5.js");
/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(p5__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var P5sketchComponent = /** @class */ (function () {
    function P5sketchComponent() {
        this.loading = true;
    }
    P5sketchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadAPI = new Promise(function (resolve) {
            _this.loadScript(_this.problem.script_link);
            var scripts = document.getElementsByTagName("script");
            var isFound = false;
            while (!isFound) {
                for (var i = 0; i < scripts.length; ++i) {
                    if (scripts[i].getAttribute("src") != null &&
                        scripts[i]
                            .getAttribute("src")
                            .includes(_this.problem.script_link)) {
                        isFound = true;
                        resolve(true);
                        break;
                    }
                }
            }
        }).then(function () {
            _this.loading = false;
        });
    };
    P5sketchComponent.prototype.loadScript = function (script) {
        var script = script;
        var node = document.createElement("script");
        node.src = script;
        node.type = "text/javascript";
        node.async = false;
        node.charset = "utf-8";
        document.getElementsByTagName("head")[0].appendChild(node);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("problem"),
        __metadata("design:type", Object)
    ], P5sketchComponent.prototype, "problem", void 0);
    P5sketchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-p5sketch",
            template: __webpack_require__(/*! ./p5sketch.component.html */ "./src/app/components/p5sketch/p5sketch.component.html"),
            styles: [__webpack_require__(/*! ./p5sketch.component.scss */ "./src/app/components/p5sketch/p5sketch.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], P5sketchComponent);
    return P5sketchComponent;
}());



/***/ }),

/***/ "./src/app/components/page-header-nav/page-header-nav.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/page-header-nav/page-header-nav.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-header-wrapper slim-box-shadow\">\n  <div class=\"main-header-container\">\n    <div class=\"header-content\">\n      <h1 class=\"header-title dark-text\">{{ headerTitle }}</h1>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/page-header-nav/page-header-nav.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/page-header-nav/page-header-nav.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Nunito+Sans:300,400,600,700\");\n.center-container {\n  display: flex;\n  flex-direction: column;\n  height: auto; }\n.center-container .center-space-between-content {\n    align-items: center;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between; }\n.center-container .bottom-space-between-content {\n    align-items: baseline;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between; }\n.center-container .vertical-center-space-between-content {\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between; }\n.center-container .center-left-content {\n    align-items: center;\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start; }\n.center-container .center-left-top-content {\n    align-items: flex-start;\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start; }\nbutton {\n  outline: none; }\n.action-btn {\n  font-family: \"Nunito Sans\", sans-serif;\n  padding: 0 24px;\n  line-height: 1;\n  border: none;\n  font-weight: 700;\n  font-size: 16px;\n  height: 40px;\n  cursor: pointer; }\n.regular-action-btn {\n  box-shadow: 0 3px 10px 0 rgba(115, 143, 147, 0.3);\n  color: #0e141e; }\n.success-action-btn {\n  background-color: #1ba94c;\n  box-shadow: 0 3px 6px 0 rgba(27, 169, 76, 0.4);\n  color: #ffffff; }\n.slim-box-shadow {\n  background-color: #ffffff;\n  box-shadow: 0.1px 1px 4px 0 #e7eeef; }\n.fat-box-shadow {\n  box-shadow: rgba(115, 143, 147, 0.4) 0px 6px 16px 0px; }\n.dark-text {\n  color: #0e141e; }\n.max-page-width {\n  max-width: 1240px;\n  margin: auto; }\n.form-container {\n  font-family: \"Nunito Sans\", sans-serif; }\n.form-container .regular-label {\n    color: #0e141e;\n    font-size: 15px;\n    margin-bottom: 4px;\n    display: inline-block;\n    font-weight: 700; }\n.form-container .regular-text-box {\n    border: 1px solid #c2c7d0;\n    border-radius: 5px;\n    padding: 10px 14px;\n    line-height: 1;\n    outline: none;\n    color: #0e141e;\n    font-size: 16px;\n    width: 100%; }\n.form-container .regular-textarea {\n    border: 1px solid #c2c7d0;\n    border-radius: 5px;\n    padding: 10px 14px;\n    line-height: 1;\n    outline: none;\n    color: #0e141e;\n    font-size: 14px;\n    width: 100%;\n    min-height: 200px;\n    max-height: 400px; }\n@media only screen and (min-width: 768px) {\n  .hidden-desktop {\n    display: none !important; } }\n@media only screen and (max-width: 767px) {\n  .hidden-mobile {\n    display: none !important; } }\n.main-header-wrapper {\n  background-color: #ffffff;\n  margin-bottom: 24px; }\n.main-header-wrapper .main-header-container {\n    max-width: 1240px;\n    margin: auto;\n    padding: 0 20px;\n    font-family: \"Nunito Sans\", sans-serif; }\n.main-header-wrapper .main-header-container .header-content {\n      padding: 20px 0; }\n.main-header-wrapper .main-header-container .header-content .header-title {\n        margin: 0;\n        font-weight: 600;\n        transition: .25s; }\n@media only screen and (min-width: 901px) {\n  .header-content .header-title {\n    font-size: 26px; } }\n@media only screen and (max-width: 900px) {\n  .header-content .header-title {\n    font-size: 22px; } }\n"

/***/ }),

/***/ "./src/app/components/page-header-nav/page-header-nav.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/page-header-nav/page-header-nav.component.ts ***!
  \*************************************************************************/
/*! exports provided: PageHeaderNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHeaderNavComponent", function() { return PageHeaderNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageHeaderNavComponent = /** @class */ (function () {
    function PageHeaderNavComponent() {
    }
    PageHeaderNavComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("headerTitle"),
        __metadata("design:type", Object)
    ], PageHeaderNavComponent.prototype, "headerTitle", void 0);
    PageHeaderNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-page-header-nav",
            template: __webpack_require__(/*! ./page-header-nav.component.html */ "./src/app/components/page-header-nav/page-header-nav.component.html"),
            styles: [__webpack_require__(/*! ./page-header-nav.component.scss */ "./src/app/components/page-header-nav/page-header-nav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PageHeaderNavComponent);
    return PageHeaderNavComponent;
}());



/***/ }),

/***/ "./src/app/components/spinners/spinner1/spinner1.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/spinners/spinner1/spinner1.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"lds-ellipsis\">\n  <div></div>\n  <div></div>\n  <div></div>\n  <div></div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/spinners/spinner1/spinner1.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/components/spinners/spinner1/spinner1.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".lds-ellipsis {\n  display: inline-block;\n  position: relative;\n  width: 64px;\n  height: 64px; }\n\n.lds-ellipsis div {\n  position: absolute;\n  top: 27px;\n  width: 11px;\n  height: 11px;\n  border-radius: 50%;\n  background: #dfc;\n  -webkit-animation-timing-function: cubic-bezier(0, 1, 1, 0);\n          animation-timing-function: cubic-bezier(0, 1, 1, 0); }\n\n.lds-ellipsis div:nth-child(1) {\n  left: 6px;\n  -webkit-animation: lds-ellipsis1 0.6s infinite;\n          animation: lds-ellipsis1 0.6s infinite; }\n\n.lds-ellipsis div:nth-child(2) {\n  left: 6px;\n  -webkit-animation: lds-ellipsis2 0.6s infinite;\n          animation: lds-ellipsis2 0.6s infinite; }\n\n.lds-ellipsis div:nth-child(3) {\n  left: 26px;\n  -webkit-animation: lds-ellipsis2 0.6s infinite;\n          animation: lds-ellipsis2 0.6s infinite; }\n\n.lds-ellipsis div:nth-child(4) {\n  left: 45px;\n  -webkit-animation: lds-ellipsis3 0.6s infinite;\n          animation: lds-ellipsis3 0.6s infinite; }\n\n@-webkit-keyframes lds-ellipsis1 {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@keyframes lds-ellipsis1 {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@-webkit-keyframes lds-ellipsis3 {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  100% {\n    -webkit-transform: scale(0);\n            transform: scale(0); } }\n\n@keyframes lds-ellipsis3 {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  100% {\n    -webkit-transform: scale(0);\n            transform: scale(0); } }\n\n@-webkit-keyframes lds-ellipsis2 {\n  0% {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0); }\n  100% {\n    -webkit-transform: translate(19px, 0);\n            transform: translate(19px, 0); } }\n\n@keyframes lds-ellipsis2 {\n  0% {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0); }\n  100% {\n    -webkit-transform: translate(19px, 0);\n            transform: translate(19px, 0); } }\n"

/***/ }),

/***/ "./src/app/components/spinners/spinner1/spinner1.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/spinners/spinner1/spinner1.component.ts ***!
  \********************************************************************/
/*! exports provided: Spinner1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spinner1Component", function() { return Spinner1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Spinner1Component = /** @class */ (function () {
    function Spinner1Component() {
    }
    Spinner1Component.prototype.ngOnInit = function () {
    };
    Spinner1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-spinner1',
            template: __webpack_require__(/*! ./spinner1.component.html */ "./src/app/components/spinners/spinner1/spinner1.component.html"),
            styles: [__webpack_require__(/*! ./spinner1.component.scss */ "./src/app/components/spinners/spinner1/spinner1.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Spinner1Component);
    return Spinner1Component;
}());



/***/ }),

/***/ "./src/app/pages/edit-problem/edit-problem.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/edit-problem/edit-problem.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-header-nav [headerTitle]=\"problem?.title || 'Enter a title'\"></app-page-header-nav>\n\n<div class=\"max-page-width\" *ngIf=\"problem\">\n  <div class=\"everything-container\">\n    <app-submit-form (onSaveProblem)=\"updateProblem()\"></app-submit-form>\n\n    <div class=\"edit-problem-wrapper\">\n      <div class=\"edit-problem-container fat-box-shadow\" *ngIf=\"problem\">\n        <form class=\"form-container\" [formGroup]=\"updateProblemForm\">\n          <div class=\"form-group\">\n            <label for=\"problem-title\" class=\"regular-label\">Title</label>\n            <input type=\"text\" formControlName=\"title\" maxlength=\"50\" name=\"problem-title\" class=\"regular-text-box\">\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"description\" class=\"regular-label\">Description</label>\n            <input type=\"text\" formControlName=\"description\" maxlength=\"125\" name=\"description\" class=\"regular-text-box\">\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"difficulty\" class=\"regular-label\">Difficulty</label>\n            <div class=\"difficulty-container\">\n              <button (click)=\"updateProblemForm.controls['difficulty'].setValue(1)\" [ngClass]=\"{ 'active-easy': updateProblemForm.controls['difficulty'].value == 1 }\"\n                class=\"option-btn\">Easy</button>\n              <button (click)=\"updateProblemForm.controls['difficulty'].setValue(2)\" [ngClass]=\"{ 'active-medium': updateProblemForm.controls['difficulty'].value == 2 }\"\n                class=\"option-btn\">Medium</button>\n              <button (click)=\"updateProblemForm.controls['difficulty'].setValue(3)\" [ngClass]=\"{ 'active-hard': updateProblemForm.controls['difficulty'].value == 3 }\"\n                class=\"option-btn\">Hard</button>\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"hackerrank-link\" class=\"regular-label\">HackerRank Link</label>\n            <input type=\"text\" formControlName=\"link\" maxlength=\"300\" name=\"hackerrank-link\" class=\"regular-text-box\">\n          </div>\n\n          <div class=\"long-description-container\">\n            <div class=\"grid-container grid-system-1\">\n              <div class=\"form-group\">\n                <div class=\"center-container\">\n                  <div class=\"bottom-space-between-content\">\n                    <label for=\"long-description\" class=\"regular-label\">Long Description</label>\n                    <label for=\"long-description\" class=\"meta-data-label\">Markdown</label>\n                  </div>\n                </div>\n                <textarea formControlName=\"long_description\" name=\"long-description\" class=\"regular-textarea\"></textarea>\n              </div>\n\n              <div class=\"markdown-preview-container\">\n                <div class=\"form-group\">\n                  <label for=\"markdown-preview\" class=\"regular-label\">Markdown Preview</label>\n                  <div id=\"longDescription\" class=\"markdown-body markdown-preview-outlet\" name=\"markdown-preview\">\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"word-solution-container\">\n            <div class=\"grid-container grid-system-1\">\n              <div class=\"form-group\">\n                <div class=\"center-container\">\n                  <div class=\"bottom-space-between-content\">\n                    <label for=\"word-solution\" class=\"regular-label\">Word Solution</label>\n                    <label for=\"word-solution\" class=\"meta-data-label\">Markdown</label>\n                  </div>\n                </div>\n                <textarea formControlName=\"word_solution\" name=\"word-solution\" class=\"regular-textarea\"></textarea>\n              </div>\n\n              <div class=\"markdown-preview-container\">\n                <div class=\"form-group\">\n                  <label for=\"markdown-preview\" class=\"regular-label\">Markdown Preview</label>\n                  <div id=\"wordSolution\" class=\"markdown-body markdown-preview-outlet\" name=\"markdown-preview\">\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"pseudo-code-solution-container\">\n            <div class=\"grid-container grid-system-1\">\n              <div class=\"form-group\">\n                <div class=\"center-container\">\n                  <div class=\"bottom-space-between-content\">\n                    <label for=\"pseudo-code-solution\" class=\"regular-label\">Pseudo Code Solution</label>\n                    <label for=\"pseudo-code-solution\" class=\"meta-data-label\">Markdown</label>\n                  </div>\n                </div>\n                <textarea formControlName=\"pseudo_code_solution\" name=\"pseudo-code-solution\" class=\"regular-textarea\"></textarea>\n              </div>\n\n              <div class=\"markdown-preview-container\">\n                <div class=\"form-group\">\n                  <label for=\"markdown-preview\" class=\"regular-label\">Markdown Preview</label>\n                  <div id=\"pseudoCodeSolution\" class=\"markdown-body markdown-preview-outlet\" name=\"markdown-preview\">\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"code-solution-container\">\n            <div class=\"grid-container grid-system-1\">\n              <div class=\"form-group\">\n                <div class=\"center-container\">\n                  <div class=\"bottom-space-between-content\">\n                    <label for=\"code-solution\" class=\"regular-label\">Code Solution</label>\n                    <label for=\"code-solution\" class=\"meta-data-label\">Markdown</label>\n                  </div>\n                </div>\n                <textarea formControlName=\"code_solution\" name=\"code-solution\" class=\"regular-textarea\"></textarea>\n              </div>\n\n              <div class=\"markdown-preview-container\">\n                <div class=\"form-group\">\n                  <label for=\"markdown-preview\" class=\"regular-label\">Markdown Preview</label>\n                  <div id=\"codeSolution\" class=\"markdown-body markdown-preview-outlet\" name=\"markdown-preview\">\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n\n    <app-submit-form (onSaveProblem)=\"updateProblem()\"></app-submit-form>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/pages/edit-problem/edit-problem.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/edit-problem/edit-problem.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Nunito+Sans:300,400,600,700\");\n.center-container {\n  display: flex;\n  flex-direction: column;\n  height: auto; }\n.center-container .center-space-between-content {\n    align-items: center;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between; }\n.center-container .bottom-space-between-content {\n    align-items: baseline;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between; }\n.center-container .vertical-center-space-between-content {\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between; }\n.center-container .center-left-content {\n    align-items: center;\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start; }\n.center-container .center-left-top-content {\n    align-items: flex-start;\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start; }\nbutton {\n  outline: none; }\n.action-btn {\n  font-family: \"Nunito Sans\", sans-serif;\n  padding: 0 24px;\n  line-height: 1;\n  border: none;\n  font-weight: 700;\n  font-size: 16px;\n  height: 40px;\n  cursor: pointer; }\n.regular-action-btn {\n  box-shadow: 0 3px 10px 0 rgba(115, 143, 147, 0.3);\n  color: #0e141e; }\n.success-action-btn {\n  background-color: #1ba94c;\n  box-shadow: 0 3px 6px 0 rgba(27, 169, 76, 0.4);\n  color: #ffffff; }\n.slim-box-shadow {\n  background-color: #ffffff;\n  box-shadow: 0.1px 1px 4px 0 #e7eeef; }\n.fat-box-shadow {\n  box-shadow: rgba(115, 143, 147, 0.4) 0px 6px 16px 0px; }\n.dark-text {\n  color: #0e141e; }\n.max-page-width {\n  max-width: 1240px;\n  margin: auto; }\n.form-container {\n  font-family: \"Nunito Sans\", sans-serif; }\n.form-container .regular-label {\n    color: #0e141e;\n    font-size: 15px;\n    margin-bottom: 4px;\n    display: inline-block;\n    font-weight: 700; }\n.form-container .regular-text-box {\n    border: 1px solid #c2c7d0;\n    border-radius: 5px;\n    padding: 10px 14px;\n    line-height: 1;\n    outline: none;\n    color: #0e141e;\n    font-size: 16px;\n    width: 100%; }\n.form-container .regular-textarea {\n    border: 1px solid #c2c7d0;\n    border-radius: 5px;\n    padding: 10px 14px;\n    line-height: 1;\n    outline: none;\n    color: #0e141e;\n    font-size: 14px;\n    width: 100%;\n    min-height: 200px;\n    max-height: 400px; }\n@media only screen and (min-width: 768px) {\n  .hidden-desktop {\n    display: none !important; } }\n@media only screen and (max-width: 767px) {\n  .hidden-mobile {\n    display: none !important; } }\n.everything-container {\n  margin-bottom: 100px; }\n.edit-problem-wrapper {\n  padding: 24px 0;\n  font-family: \"Nunito Sans\", sans-serif; }\n.edit-problem-wrapper .edit-problem-container {\n    padding: 30px;\n    background-color: #ffffff; }\n.edit-problem-wrapper .form-container {\n    letter-spacing: 0.5px; }\n.edit-problem-wrapper .form-container .form-group {\n      margin-bottom: 16px; }\n.edit-problem-wrapper .form-container .form-group .meta-data-label {\n        font-size: 12px;\n        text-align: right;\n        margin-bottom: 4px;\n        float: right; }\n.edit-problem-wrapper .difficulty-container .option-btn {\n    border: none;\n    font-size: 15px;\n    padding: 8px 12px;\n    cursor: pointer; }\n.edit-problem-wrapper .difficulty-container .option-btn:hover {\n      background-color: #f3f7f7; }\n.edit-problem-wrapper .difficulty-container .option-btn:last-child {\n      margin-right: 0; }\n.edit-problem-wrapper .difficulty-container .active-easy {\n    background-color: #1ba94c !important;\n    color: #ffffff; }\n.edit-problem-wrapper .difficulty-container .active-medium {\n    background-color: #db7100 !important;\n    color: #ffffff; }\n.edit-problem-wrapper .difficulty-container .active-hard {\n    background-color: #db2644 !important;\n    color: #ffffff; }\n.edit-problem-wrapper .markdown-preview-container {\n    box-sizing: border-box;\n    min-width: 100%;\n    max-width: 100%;\n    margin: 0 auto; }\n.edit-problem-wrapper .markdown-preview-container .markdown-preview-outlet {\n      border: 1px solid #c2c7d0;\n      border-radius: 5px;\n      padding: 15px;\n      max-height: calc(100vh - 90px);\n      overflow-y: scroll; }\n.edit-problem-wrapper .grid-container {\n    display: -ms-grid;\n    display: grid;\n    grid-column-gap: 12px; }\n@media only screen and (min-width: 941px) {\n  .everything-container {\n    padding: 0 15px; }\n  .edit-problem-wrapper .edit-problem-container {\n    padding: 30px; }\n  .grid-system-1 {\n    -ms-grid-columns: 3fr 4fr;\n        grid-template-columns: 3fr 4fr; } }\n@media only screen and (max-width: 940px) {\n  .edit-problem-wrapper .edit-problem-container {\n    padding: 24px 15px; }\n  .grid-system-1 {\n    -ms-grid-columns: 1fr;\n        grid-template-columns: 1fr; } }\n"

/***/ }),

/***/ "./src/app/pages/edit-problem/edit-problem.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/edit-problem/edit-problem.component.ts ***!
  \**************************************************************/
/*! exports provided: EditProblemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProblemComponent", function() { return EditProblemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_problems_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/problems.service */ "./src/app/services/problems.service.ts");
/* harmony import */ var showdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! showdown */ "./node_modules/showdown/dist/showdown.js");
/* harmony import */ var showdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(showdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditProblemComponent = /** @class */ (function () {
    function EditProblemComponent(route, problemsService, router) {
        this.route = route;
        this.problemsService = problemsService;
        this.router = router;
        this.converter = new showdown__WEBPACK_IMPORTED_MODULE_3__["Converter"]({
            ghCompatibleHeaderId: true,
            simpleLineBreaks: true
        });
    }
    EditProblemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.problemsService
                .getProblemById(params.id)
                .subscribe(function (problem) {
                _this.problem = problem;
                if (_this.problem) {
                    // Document is not loaded at this location in code yet.
                    // 1ms solves this.. ?
                    _this.setFormValues();
                    setTimeout(function () {
                        _this.updateLongDescription();
                        _this.updateWordSolution();
                        _this.updatePseudoCodeSolution();
                        _this.updateCodeSolution();
                    }, 1);
                    _this.setFormChangeWatcher();
                }
            });
        })
            .unsubscribe();
    };
    EditProblemComponent.prototype.setFormValues = function () {
        var _a = this.problem, title = _a.title, description = _a.description, long_description = _a.long_description, difficulty = _a.difficulty, link = _a.link, word_solution = _a.word_solution, pseudo_code_solution = _a.pseudo_code_solution, code_solution = _a.code_solution;
        this.updateProblemForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](title, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](description, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            long_description: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](long_description, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
            ]),
            difficulty: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](difficulty, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            link: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](link, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            word_solution: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](word_solution, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            pseudo_code_solution: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](pseudo_code_solution, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
            ]),
            code_solution: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](code_solution, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])
        });
    };
    EditProblemComponent.prototype.setFormChangeWatcher = function () {
        var _this = this;
        this.updateProblemForm.valueChanges.subscribe(function () {
            _this.updateLongDescription();
            _this.updateWordSolution();
            _this.updatePseudoCodeSolution();
            _this.updateCodeSolution();
            console.log("hello");
        });
    };
    EditProblemComponent.prototype.updateLongDescription = function () {
        var longDescriptionTarget = document.getElementById("longDescription");
        var markdown = this.updateProblemForm.get("long_description").value;
        longDescriptionTarget.innerHTML = this.converter.makeHtml(markdown);
    };
    EditProblemComponent.prototype.updateWordSolution = function () {
        var wordSolutionTarget = document.getElementById("wordSolution");
        var markdown = this.updateProblemForm.get("word_solution").value;
        wordSolutionTarget.innerHTML = this.converter.makeHtml(markdown);
    };
    EditProblemComponent.prototype.updatePseudoCodeSolution = function () {
        var pseudoCodeSolutionTarget = document.getElementById("pseudoCodeSolution");
        var markdown = this.updateProblemForm.get("pseudo_code_solution").value;
        pseudoCodeSolutionTarget.innerHTML = this.converter.makeHtml(markdown);
    };
    EditProblemComponent.prototype.updateCodeSolution = function () {
        var codeSolutionTarget = document.getElementById("codeSolution");
        var markdown = this.updateProblemForm.get("code_solution").value;
        codeSolutionTarget.innerHTML = this.converter.makeHtml(markdown);
    };
    EditProblemComponent.prototype.updateProblem = function () {
        if (this.updateProblemForm.valid) {
            this.problemsService
                .updateProblemById(this.problem._id, /**/ this.updateProblemForm.value)
                .subscribe(function (res) {
                // Route back to problem
                // Create success notification
                console.log(res);
            });
        }
    };
    EditProblemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-edit-problem",
            template: __webpack_require__(/*! ./edit-problem.component.html */ "./src/app/pages/edit-problem/edit-problem.component.html"),
            styles: [__webpack_require__(/*! ./edit-problem.component.scss */ "./src/app/pages/edit-problem/edit-problem.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_problems_service__WEBPACK_IMPORTED_MODULE_2__["ProblemsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], EditProblemComponent);
    return EditProblemComponent;
}());



/***/ }),

/***/ "./src/app/pages/edit-problem/submit-form/submit-form.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/pages/edit-problem/submit-form/submit-form.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"submit-form-container max-page-width\">\n  <div class=\"btn-group\">\n    <button [routerLink]=\"['../']\" class=\"cancel-btn action-btn regular-action-btn\">Cancel</button>\n    <button (click)=\"onSaveProblem.emit()\" class=\"save-btn action-btn success-action-btn\">Save</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/edit-problem/submit-form/submit-form.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/edit-problem/submit-form/submit-form.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Nunito+Sans:300,400,600,700\");\n.center-container {\n  display: flex;\n  flex-direction: column;\n  height: auto; }\n.center-container .center-space-between-content {\n    align-items: center;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between; }\n.center-container .bottom-space-between-content {\n    align-items: baseline;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between; }\n.center-container .vertical-center-space-between-content {\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between; }\n.center-container .center-left-content {\n    align-items: center;\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start; }\n.center-container .center-left-top-content {\n    align-items: flex-start;\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start; }\nbutton {\n  outline: none; }\n.action-btn {\n  font-family: \"Nunito Sans\", sans-serif;\n  padding: 0 24px;\n  line-height: 1;\n  border: none;\n  font-weight: 700;\n  font-size: 16px;\n  height: 40px;\n  cursor: pointer; }\n.regular-action-btn {\n  box-shadow: 0 3px 10px 0 rgba(115, 143, 147, 0.3);\n  color: #0e141e; }\n.success-action-btn {\n  background-color: #1ba94c;\n  box-shadow: 0 3px 6px 0 rgba(27, 169, 76, 0.4);\n  color: #ffffff; }\n.slim-box-shadow {\n  background-color: #ffffff;\n  box-shadow: 0.1px 1px 4px 0 #e7eeef; }\n.fat-box-shadow {\n  box-shadow: rgba(115, 143, 147, 0.4) 0px 6px 16px 0px; }\n.dark-text {\n  color: #0e141e; }\n.max-page-width {\n  max-width: 1240px;\n  margin: auto; }\n.form-container {\n  font-family: \"Nunito Sans\", sans-serif; }\n.form-container .regular-label {\n    color: #0e141e;\n    font-size: 15px;\n    margin-bottom: 4px;\n    display: inline-block;\n    font-weight: 700; }\n.form-container .regular-text-box {\n    border: 1px solid #c2c7d0;\n    border-radius: 5px;\n    padding: 10px 14px;\n    line-height: 1;\n    outline: none;\n    color: #0e141e;\n    font-size: 16px;\n    width: 100%; }\n.form-container .regular-textarea {\n    border: 1px solid #c2c7d0;\n    border-radius: 5px;\n    padding: 10px 14px;\n    line-height: 1;\n    outline: none;\n    color: #0e141e;\n    font-size: 14px;\n    width: 100%;\n    min-height: 200px;\n    max-height: 400px; }\n@media only screen and (min-width: 768px) {\n  .hidden-desktop {\n    display: none !important; } }\n@media only screen and (max-width: 767px) {\n  .hidden-mobile {\n    display: none !important; } }\n.submit-form-container {\n  padding: 0 15px; }\n.submit-form-container .btn-group {\n    text-align: right; }\n.submit-form-container .btn-group .action-btn {\n      margin-right: 16px; }\n.submit-form-container .btn-group .action-btn:last-child {\n        margin-right: 0; }\n"

/***/ }),

/***/ "./src/app/pages/edit-problem/submit-form/submit-form.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/edit-problem/submit-form/submit-form.component.ts ***!
  \*************************************************************************/
/*! exports provided: SubmitFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitFormComponent", function() { return SubmitFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SubmitFormComponent = /** @class */ (function () {
    function SubmitFormComponent() {
        this.onSaveProblem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SubmitFormComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SubmitFormComponent.prototype, "onSaveProblem", void 0);
    SubmitFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-submit-form",
            template: __webpack_require__(/*! ./submit-form.component.html */ "./src/app/pages/edit-problem/submit-form/submit-form.component.html"),
            styles: [__webpack_require__(/*! ./submit-form.component.scss */ "./src/app/pages/edit-problem/submit-form/submit-form.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SubmitFormComponent);
    return SubmitFormComponent;
}());



/***/ }),

/***/ "./src/app/pages/individual-problem-page/individual-problem-page.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/individual-problem-page/individual-problem-page.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-header-nav [headerTitle]=\"problem?.title\"></app-page-header-nav>\n<div class=\"individual-problem-wrapper max-page-width\">\n  <div class=\"everything-container\">\n    <app-individual-problem [problem]=\"problem\" *ngIf=\"problem\"></app-individual-problem>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/individual-problem-page/individual-problem-page.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/individual-problem-page/individual-problem-page.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Nunito+Sans:300,400,600,700\");\n.center-container {\n  display: flex;\n  flex-direction: column;\n  height: auto; }\n.center-container .center-space-between-content {\n    align-items: center;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between; }\n.center-container .bottom-space-between-content {\n    align-items: baseline;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between; }\n.center-container .vertical-center-space-between-content {\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between; }\n.center-container .center-left-content {\n    align-items: center;\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start; }\n.center-container .center-left-top-content {\n    align-items: flex-start;\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start; }\nbutton {\n  outline: none; }\n.action-btn {\n  font-family: \"Nunito Sans\", sans-serif;\n  padding: 0 24px;\n  line-height: 1;\n  border: none;\n  font-weight: 700;\n  font-size: 16px;\n  height: 40px;\n  cursor: pointer; }\n.regular-action-btn {\n  box-shadow: 0 3px 10px 0 rgba(115, 143, 147, 0.3);\n  color: #0e141e; }\n.success-action-btn {\n  background-color: #1ba94c;\n  box-shadow: 0 3px 6px 0 rgba(27, 169, 76, 0.4);\n  color: #ffffff; }\n.slim-box-shadow {\n  background-color: #ffffff;\n  box-shadow: 0.1px 1px 4px 0 #e7eeef; }\n.fat-box-shadow {\n  box-shadow: rgba(115, 143, 147, 0.4) 0px 6px 16px 0px; }\n.dark-text {\n  color: #0e141e; }\n.max-page-width {\n  max-width: 1240px;\n  margin: auto; }\n.form-container {\n  font-family: \"Nunito Sans\", sans-serif; }\n.form-container .regular-label {\n    color: #0e141e;\n    font-size: 15px;\n    margin-bottom: 4px;\n    display: inline-block;\n    font-weight: 700; }\n.form-container .regular-text-box {\n    border: 1px solid #c2c7d0;\n    border-radius: 5px;\n    padding: 10px 14px;\n    line-height: 1;\n    outline: none;\n    color: #0e141e;\n    font-size: 16px;\n    width: 100%; }\n.form-container .regular-textarea {\n    border: 1px solid #c2c7d0;\n    border-radius: 5px;\n    padding: 10px 14px;\n    line-height: 1;\n    outline: none;\n    color: #0e141e;\n    font-size: 14px;\n    width: 100%;\n    min-height: 200px;\n    max-height: 400px; }\n@media only screen and (min-width: 768px) {\n  .hidden-desktop {\n    display: none !important; } }\n@media only screen and (max-width: 767px) {\n  .hidden-mobile {\n    display: none !important; } }\n.individual-problem-wrapper {\n  margin-bottom: 500px; }\n@media only screen and (min-width: 941px) {\n  .everything-container {\n    padding: 0 15px; }\n  .individual-problem-wrapper .edit-problem-container {\n    padding: 30px; } }\n@media only screen and (max-width: 940px) {\n  .individual-problem-wrapper .edit-problem-container {\n    padding: 24px 15px; } }\n"

/***/ }),

/***/ "./src/app/pages/individual-problem-page/individual-problem-page.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/individual-problem-page/individual-problem-page.component.ts ***!
  \************************************************************************************/
/*! exports provided: IndividualProblemPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndividualProblemPageComponent", function() { return IndividualProblemPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_problems_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/problems.service */ "./src/app/services/problems.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IndividualProblemPageComponent = /** @class */ (function () {
    function IndividualProblemPageComponent(problemsService, route) {
        this.problemsService = problemsService;
        this.route = route;
    }
    IndividualProblemPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.problemsService
                .getProblemById(params.id)
                .subscribe(function (problem) {
                _this.problem = problem;
            });
        })
            .unsubscribe();
    };
    IndividualProblemPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-individual-problem-page",
            template: __webpack_require__(/*! ./individual-problem-page.component.html */ "./src/app/pages/individual-problem-page/individual-problem-page.component.html"),
            styles: [__webpack_require__(/*! ./individual-problem-page.component.scss */ "./src/app/pages/individual-problem-page/individual-problem-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_problems_service__WEBPACK_IMPORTED_MODULE_1__["ProblemsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], IndividualProblemPageComponent);
    return IndividualProblemPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/individual-problem-page/individual-problem/individual-problem.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/individual-problem-page/individual-problem/individual-problem.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"individual-problem-wrapper\">\n  <div class=\"individual-problem-container fat-box-shadow\">\n    <div class=\"problem-content\">\n      <div class=\"description-container\">\n        <p class=\"description\">{{ problem.description }}</p>\n      </div>\n\n      <div class=\"long-description-container\">\n        <div id=\"longDescription\" class=\"markdown-body\" name=\"long-description\">\n        </div>\n      </div>\n\n      <hr class=\"divider\">\n\n      <div class=\"word-solution-container\">\n        <label for=\"wordSolution\" class=\"header\">Word Solution</label>\n        <span *ngIf=\"!hidden1\" class=\"blur-warning\">Click solution to remove blur</span>\n        <div (click)=\"hidden1 = true\" [ngClass]=\"{ 'hidden-text': !hidden1 }\" id=\"wordSolution\" class=\"markdown-body\"\n          name=\"word-solution\">\n        </div>\n      </div>\n\n      <hr class=\"divider\">\n\n      <div class=\"pseudo-code-solution-container\">\n        <label for=\"pseudoCodeSolution\" class=\"header\">Pseudo Code Solution</label>\n        <span *ngIf=\"!hidden2\" class=\"blur-warning\">Click solution to remove blur</span>\n        <div (click)=\"hidden2 = true\" [ngClass]=\"{ 'hidden-text': !hidden2 }\" id=\"pseudoCodeSolution\" class=\"markdown-body\"\n          name=\"pseudo-code-solution\">\n        </div>\n      </div>\n\n      <hr class=\"divider\">\n\n      <div class=\"code-solution-container\">\n        <label for=\"codeSolution\" class=\"header\">Code Solution</label>\n        <span *ngIf=\"!hidden3\" class=\"blur-warning\">Click solution to remove blur</span>\n        <div (click)=\"hidden3 = true\" [ngClass]=\"{ 'hidden-text': !hidden3 }\" id=\"codeSolution\" class=\"markdown-body\"\n          name=\"code-solution\">\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div [ngClass]=\"{ 'clickable': !showAnimation }\" class=\"animation-container fat-box-shadow\" (click)=\"showAnimation = true\">\n    <div class=\"show-animation-notif-container\" *ngIf=\"!showAnimation\">\n      <h3 class=\"header\">Click to show animation</h3>\n    </div>\n    <div class=\"p5-container\">\n      <app-p5sketch *ngIf=\"showAnimation\" [problem]=\"problem\"></app-p5sketch>\n    </div>\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/pages/individual-problem-page/individual-problem/individual-problem.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/individual-problem-page/individual-problem/individual-problem.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Nunito+Sans:300,400,600,700\");\n.center-container {\n  display: flex;\n  flex-direction: column;\n  height: auto; }\n.center-container .center-space-between-content {\n    align-items: center;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between; }\n.center-container .bottom-space-between-content {\n    align-items: baseline;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between; }\n.center-container .vertical-center-space-between-content {\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between; }\n.center-container .center-left-content {\n    align-items: center;\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start; }\n.center-container .center-left-top-content {\n    align-items: flex-start;\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start; }\nbutton {\n  outline: none; }\n.action-btn {\n  font-family: \"Nunito Sans\", sans-serif;\n  padding: 0 24px;\n  line-height: 1;\n  border: none;\n  font-weight: 700;\n  font-size: 16px;\n  height: 40px;\n  cursor: pointer; }\n.regular-action-btn {\n  box-shadow: 0 3px 10px 0 rgba(115, 143, 147, 0.3);\n  color: #0e141e; }\n.success-action-btn {\n  background-color: #1ba94c;\n  box-shadow: 0 3px 6px 0 rgba(27, 169, 76, 0.4);\n  color: #ffffff; }\n.slim-box-shadow {\n  background-color: #ffffff;\n  box-shadow: 0.1px 1px 4px 0 #e7eeef; }\n.fat-box-shadow {\n  box-shadow: rgba(115, 143, 147, 0.4) 0px 6px 16px 0px; }\n.dark-text {\n  color: #0e141e; }\n.max-page-width {\n  max-width: 1240px;\n  margin: auto; }\n.form-container {\n  font-family: \"Nunito Sans\", sans-serif; }\n.form-container .regular-label {\n    color: #0e141e;\n    font-size: 15px;\n    margin-bottom: 4px;\n    display: inline-block;\n    font-weight: 700; }\n.form-container .regular-text-box {\n    border: 1px solid #c2c7d0;\n    border-radius: 5px;\n    padding: 10px 14px;\n    line-height: 1;\n    outline: none;\n    color: #0e141e;\n    font-size: 16px;\n    width: 100%; }\n.form-container .regular-textarea {\n    border: 1px solid #c2c7d0;\n    border-radius: 5px;\n    padding: 10px 14px;\n    line-height: 1;\n    outline: none;\n    color: #0e141e;\n    font-size: 14px;\n    width: 100%;\n    min-height: 200px;\n    max-height: 400px; }\n@media only screen and (min-width: 768px) {\n  .hidden-desktop {\n    display: none !important; } }\n@media only screen and (max-width: 767px) {\n  .hidden-mobile {\n    display: none !important; } }\n.hidden-text {\n  cursor: pointer;\n  color: transparent;\n  transition: 0.25s;\n  text-shadow: 0 0 5px rgba(0, 0, 0, 0.8);\n  -webkit-filter: blur(4.5px);\n          filter: blur(4.5px);\n  -webkit-touch-callout: none;\n  /* iOS Safari */\n  -webkit-user-select: none;\n  /* Safari */\n  /* Konqueror HTML */\n  -moz-user-select: none;\n  /* Firefox */\n  -ms-user-select: none;\n  /* Internet Explorer/Edge */\n  user-select: none;\n  /* Non-prefixed version, currently\n                            supported by Chrome and Opera */ }\n.hidden-text:hover {\n    -webkit-filter: blur(2.5px) !important;\n            filter: blur(2.5px) !important; }\n.individual-problem-wrapper .clickable {\n  cursor: pointer;\n  transition: 0.25s; }\n.individual-problem-wrapper .clickable:hover {\n    background-color: #f7f7f7; }\n.individual-problem-wrapper .individual-problem-container,\n.individual-problem-wrapper .animation-container {\n  background-color: #ffffff;\n  font-family: \"Nunito Sans\", sans-serif;\n  margin-bottom: 40px; }\n.individual-problem-wrapper .individual-problem-container:last-child,\n  .individual-problem-wrapper .animation-container:last-child {\n    margin-bottom: 0; }\n.individual-problem-wrapper .individual-problem-container .show-animation-notif-container .header,\n  .individual-problem-wrapper .animation-container .show-animation-notif-container .header {\n    font-size: 18px;\n    color: #576871;\n    text-align: center; }\n.individual-problem-wrapper .individual-problem-container .problem-content,\n  .individual-problem-wrapper .animation-container .problem-content {\n    font-size: 14px; }\n.individual-problem-wrapper .individual-problem-container .problem-content .divider,\n    .individual-problem-wrapper .animation-container .problem-content .divider {\n      border: none;\n      border-top: 1px solid #e7eeef;\n      margin: 62px 0; }\n.individual-problem-wrapper .individual-problem-container .problem-content .header,\n    .individual-problem-wrapper .animation-container .problem-content .header {\n      font-weight: 600;\n      margin-bottom: 24px;\n      display: inline-block;\n      padding-bottom: 4px;\n      border-bottom: 1px solid #e7eeef; }\n.individual-problem-wrapper .individual-problem-container .problem-content .blur-warning,\n    .individual-problem-wrapper .animation-container .problem-content .blur-warning {\n      margin-left: 12px;\n      font-size: 12px;\n      color: #1ba94c;\n      cursor: default; }\n.individual-problem-wrapper .individual-problem-container .problem-content .description-container,\n    .individual-problem-wrapper .animation-container .problem-content .description-container {\n      margin: 0 0 24px 0;\n      position: relative; }\n.individual-problem-wrapper .individual-problem-container .problem-content .description-container .description,\n      .individual-problem-wrapper .animation-container .problem-content .description-container .description {\n        margin: 0; }\n@media only screen and (min-width: 781px) {\n  .individual-problem-container,\n  .animation-container {\n    padding: 30px; }\n    .individual-problem-container .header,\n    .animation-container .header {\n      font-size: 18px; } }\n@media only screen and (max-width: 780px) {\n  .individual-problem-container,\n  .animation-container {\n    padding: 30px 15px; }\n    .individual-problem-container .header,\n    .animation-container .header {\n      font-size: 16px; } }\n"

/***/ }),

/***/ "./src/app/pages/individual-problem-page/individual-problem/individual-problem.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/individual-problem-page/individual-problem/individual-problem.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: IndividualProblemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndividualProblemComponent", function() { return IndividualProblemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var showdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! showdown */ "./node_modules/showdown/dist/showdown.js");
/* harmony import */ var showdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(showdown__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IndividualProblemComponent = /** @class */ (function () {
    function IndividualProblemComponent() {
        this.converter = new showdown__WEBPACK_IMPORTED_MODULE_1__["Converter"]({
            ghCompatibleHeaderId: true,
            simpleLineBreaks: true
        });
    }
    IndividualProblemComponent.prototype.ngOnInit = function () {
        this.convertMarkdown();
    };
    // ..
    IndividualProblemComponent.prototype.convertMarkdown = function () {
        var longDescriptionTarget = document.getElementById("longDescription");
        var wordSolutionTarget = document.getElementById("wordSolution");
        var pseudoCodeSolutionTarget = document.getElementById("pseudoCodeSolution");
        var codeSolutionTarget = document.getElementById("codeSolution");
        longDescriptionTarget.innerHTML = this.converter.makeHtml(this.problem.long_description);
        wordSolutionTarget.innerHTML = this.converter.makeHtml(this.problem.word_solution);
        pseudoCodeSolutionTarget.innerHTML = this.converter.makeHtml(this.problem.pseudo_code_solution);
        codeSolutionTarget.innerHTML = this.converter.makeHtml(this.problem.code_solution);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("problem"),
        __metadata("design:type", Object)
    ], IndividualProblemComponent.prototype, "problem", void 0);
    IndividualProblemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-individual-problem",
            template: __webpack_require__(/*! ./individual-problem.component.html */ "./src/app/pages/individual-problem-page/individual-problem/individual-problem.component.html"),
            styles: [__webpack_require__(/*! ./individual-problem.component.scss */ "./src/app/pages/individual-problem-page/individual-problem/individual-problem.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], IndividualProblemComponent);
    return IndividualProblemComponent;
}());



/***/ }),

/***/ "./src/app/pages/main-problems-page/main-problems-page.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/main-problems-page/main-problems-page.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-header-nav [headerTitle]=\"headerTitle\"></app-page-header-nav>\n<div class=\"problems-list-wrapper max-page-width\">\n  <app-problems-list [problems]=\"problems\"></app-problems-list>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/main-problems-page/main-problems-page.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/main-problems-page/main-problems-page.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Nunito+Sans:300,400,600,700\");\n.center-container {\n  display: flex;\n  flex-direction: column;\n  height: auto; }\n.center-container .center-space-between-content {\n    align-items: center;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between; }\n.center-container .bottom-space-between-content {\n    align-items: baseline;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between; }\n.center-container .vertical-center-space-between-content {\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between; }\n.center-container .center-left-content {\n    align-items: center;\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start; }\n.center-container .center-left-top-content {\n    align-items: flex-start;\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start; }\nbutton {\n  outline: none; }\n.action-btn {\n  font-family: \"Nunito Sans\", sans-serif;\n  padding: 0 24px;\n  line-height: 1;\n  border: none;\n  font-weight: 700;\n  font-size: 16px;\n  height: 40px;\n  cursor: pointer; }\n.regular-action-btn {\n  box-shadow: 0 3px 10px 0 rgba(115, 143, 147, 0.3);\n  color: #0e141e; }\n.success-action-btn {\n  background-color: #1ba94c;\n  box-shadow: 0 3px 6px 0 rgba(27, 169, 76, 0.4);\n  color: #ffffff; }\n.slim-box-shadow {\n  background-color: #ffffff;\n  box-shadow: 0.1px 1px 4px 0 #e7eeef; }\n.fat-box-shadow {\n  box-shadow: rgba(115, 143, 147, 0.4) 0px 6px 16px 0px; }\n.dark-text {\n  color: #0e141e; }\n.max-page-width {\n  max-width: 1240px;\n  margin: auto; }\n.form-container {\n  font-family: \"Nunito Sans\", sans-serif; }\n.form-container .regular-label {\n    color: #0e141e;\n    font-size: 15px;\n    margin-bottom: 4px;\n    display: inline-block;\n    font-weight: 700; }\n.form-container .regular-text-box {\n    border: 1px solid #c2c7d0;\n    border-radius: 5px;\n    padding: 10px 14px;\n    line-height: 1;\n    outline: none;\n    color: #0e141e;\n    font-size: 16px;\n    width: 100%; }\n.form-container .regular-textarea {\n    border: 1px solid #c2c7d0;\n    border-radius: 5px;\n    padding: 10px 14px;\n    line-height: 1;\n    outline: none;\n    color: #0e141e;\n    font-size: 14px;\n    width: 100%;\n    min-height: 200px;\n    max-height: 400px; }\n@media only screen and (min-width: 768px) {\n  .hidden-desktop {\n    display: none !important; } }\n@media only screen and (max-width: 767px) {\n  .hidden-mobile {\n    display: none !important; } }\n.problems-list-wrapper {\n  margin-bottom: 100px; }\n"

/***/ }),

/***/ "./src/app/pages/main-problems-page/main-problems-page.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/main-problems-page/main-problems-page.component.ts ***!
  \**************************************************************************/
/*! exports provided: MainProblemsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainProblemsPageComponent", function() { return MainProblemsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_problems_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/problems.service */ "./src/app/services/problems.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainProblemsPageComponent = /** @class */ (function () {
    function MainProblemsPageComponent(problemsService) {
        this.problemsService = problemsService;
    }
    MainProblemsPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.headerTitle = "Problems";
        // Get all problems
        this.problemsService.problems.subscribe(function (problems) {
            _this.problems = problems;
        });
    };
    MainProblemsPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-main-problems-page",
            template: __webpack_require__(/*! ./main-problems-page.component.html */ "./src/app/pages/main-problems-page/main-problems-page.component.html"),
            styles: [__webpack_require__(/*! ./main-problems-page.component.scss */ "./src/app/pages/main-problems-page/main-problems-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_problems_service__WEBPACK_IMPORTED_MODULE_1__["ProblemsService"]])
    ], MainProblemsPageComponent);
    return MainProblemsPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/main-problems-page/problems-list/problems-list.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/main-problems-page/problems-list/problems-list.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"problems-list-wrapper\">\n  <div class=\"problems-list-container fat-box-shadow\">\n    <ul class=\"problems-list\">\n      <li class=\"problems-item\" *ngFor=\"let problem of problems\">\n        <a [routerLink]=\"['', 'problems', problem._id]\" class=\"link-wrapper\">\n          <div class=\"problem-content center-container\">\n            <div class=\"center-space-between-content\">\n              <div class=\"problems-item-container\">\n                <h3 class=\"title\">{{ problem.title }}</h3>\n                <p class=\"difficulty easy\" *ngIf=\"problem.difficulty == 1\">Easy</p>\n                <p class=\"difficulty medium\" *ngIf=\"problem.difficulty == 2\">Medium</p>\n                <p class=\"difficulty hard\" *ngIf=\"problem.difficulty == 3\">Hard</p>\n                <p class=\"description\">{{ problem.description }}</p>\n              </div>\n\n              <div class=\"solution-link-container\">\n                <a [routerLink]=\"['', 'problems', problem._id]\" class=\"solution-link\">View solution</a>\n              </div>\n            </div>\n          </div>\n        </a>\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/main-problems-page/problems-list/problems-list.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/main-problems-page/problems-list/problems-list.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Nunito+Sans:300,400,600,700\");\n.center-container {\n  display: flex;\n  flex-direction: column;\n  height: auto; }\n.center-container .center-space-between-content {\n    align-items: center;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between; }\n.center-container .bottom-space-between-content {\n    align-items: baseline;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between; }\n.center-container .vertical-center-space-between-content {\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between; }\n.center-container .center-left-content {\n    align-items: center;\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start; }\n.center-container .center-left-top-content {\n    align-items: flex-start;\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start; }\nbutton {\n  outline: none; }\n.action-btn {\n  font-family: \"Nunito Sans\", sans-serif;\n  padding: 0 24px;\n  line-height: 1;\n  border: none;\n  font-weight: 700;\n  font-size: 16px;\n  height: 40px;\n  cursor: pointer; }\n.regular-action-btn {\n  box-shadow: 0 3px 10px 0 rgba(115, 143, 147, 0.3);\n  color: #0e141e; }\n.success-action-btn {\n  background-color: #1ba94c;\n  box-shadow: 0 3px 6px 0 rgba(27, 169, 76, 0.4);\n  color: #ffffff; }\n.slim-box-shadow {\n  background-color: #ffffff;\n  box-shadow: 0.1px 1px 4px 0 #e7eeef; }\n.fat-box-shadow {\n  box-shadow: rgba(115, 143, 147, 0.4) 0px 6px 16px 0px; }\n.dark-text {\n  color: #0e141e; }\n.max-page-width {\n  max-width: 1240px;\n  margin: auto; }\n.form-container {\n  font-family: \"Nunito Sans\", sans-serif; }\n.form-container .regular-label {\n    color: #0e141e;\n    font-size: 15px;\n    margin-bottom: 4px;\n    display: inline-block;\n    font-weight: 700; }\n.form-container .regular-text-box {\n    border: 1px solid #c2c7d0;\n    border-radius: 5px;\n    padding: 10px 14px;\n    line-height: 1;\n    outline: none;\n    color: #0e141e;\n    font-size: 16px;\n    width: 100%; }\n.form-container .regular-textarea {\n    border: 1px solid #c2c7d0;\n    border-radius: 5px;\n    padding: 10px 14px;\n    line-height: 1;\n    outline: none;\n    color: #0e141e;\n    font-size: 14px;\n    width: 100%;\n    min-height: 200px;\n    max-height: 400px; }\n@media only screen and (min-width: 768px) {\n  .hidden-desktop {\n    display: none !important; } }\n@media only screen and (max-width: 767px) {\n  .hidden-mobile {\n    display: none !important; } }\n.problems-list-wrapper {\n  font-family: \"Nunito Sans\", sans-serif; }\n.problems-list-wrapper .problems-list-container {\n    background-color: #ffffff; }\n.problems-list-wrapper .problems-list-container .problems-list {\n      list-style-type: none;\n      margin: 0;\n      padding: 0; }\n.problems-list-wrapper .problems-list-container .problems-list .problems-item {\n        border-bottom: 1px solid #e7eeef;\n        outline: none;\n        cursor: pointer; }\n.problems-list-wrapper .problems-list-container .problems-list .problems-item .link-wrapper {\n          text-decoration: none; }\n.problems-list-wrapper .problems-list-container .problems-list .problems-item .problem-content {\n          padding: 30px; }\n.problems-list-wrapper .problems-list-container .problems-list .problems-item .problems-item-container .title {\n          color: #0e141e;\n          margin: 0 0 5px 0;\n          font-weight: 400;\n          font-size: 20px; }\n.problems-list-wrapper .problems-list-container .problems-list .problems-item .problems-item-container .difficulty {\n          color: #576871;\n          font-size: 12px;\n          font-weight: 400;\n          margin: 0 0 5px 0; }\n.problems-list-wrapper .problems-list-container .problems-list .problems-item .problems-item-container .easy {\n          color: #1ba94c; }\n.problems-list-wrapper .problems-list-container .problems-list .problems-item .problems-item-container .medium {\n          color: #db7100; }\n.problems-list-wrapper .problems-list-container .problems-list .problems-item .problems-item-container .hard {\n          color: #db2644; }\n.problems-list-wrapper .problems-list-container .problems-list .problems-item .problems-item-container .description {\n          color: #576871;\n          font-size: 12px;\n          font-weight: 400;\n          margin: 0; }\n.problems-list-wrapper .problems-list-container .problems-list .problems-item .problems-item-container:last-child {\n          border: none; }\n.problems-list-wrapper .problems-list-container .problems-list .problems-item .solution-link-container {\n          margin-left: 8px; }\n.problems-list-wrapper .problems-list-container .problems-list .problems-item .solution-link-container .solution-link {\n            border: 1px solid #1ba94c;\n            font-weight: 300;\n            text-decoration: none;\n            color: #1ba94c;\n            display: block;\n            width: 100%; }\n.problems-list-wrapper .problems-list-container .problems-list .problems-item .solution-link-container .solution-link:hover {\n              background-color: #1ba94c;\n              color: #ffffff; }\n.problems-list-wrapper .problems-list-container .problems-list .problems-item:hover {\n          background-color: #f3f7f7; }\n.problems-list-wrapper .problems-list-container .problems-list .problems-item:hover .title {\n            color: #1ba94c; }\n@media only screen and (min-width: 781px) {\n  .solution-link {\n    border: 1px solid #1ba94c;\n    padding: 8px 16px;\n    font-weight: 300;\n    font-size: 16px;\n    text-decoration: none;\n    color: #1ba94c;\n    display: block;\n    width: 100%;\n    min-width: 130px; }\n    .solution-link:hover {\n      background-color: #1ba94c;\n      color: #ffffff; } }\n@media only screen and (max-width: 780px) {\n  .solution-link {\n    padding: 8px 12px;\n    font-size: 14px;\n    min-width: 110px; }\n    .solution-link:hover {\n      background-color: #1ba94c;\n      color: #ffffff; } }\n"

/***/ }),

/***/ "./src/app/pages/main-problems-page/problems-list/problems-list.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/main-problems-page/problems-list/problems-list.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ProblemsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProblemsListComponent", function() { return ProblemsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProblemsListComponent = /** @class */ (function () {
    function ProblemsListComponent() {
    }
    ProblemsListComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("problems"),
        __metadata("design:type", Array)
    ], ProblemsListComponent.prototype, "problems", void 0);
    ProblemsListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-problems-list",
            template: __webpack_require__(/*! ./problems-list.component.html */ "./src/app/pages/main-problems-page/problems-list/problems-list.component.html"),
            styles: [__webpack_require__(/*! ./problems-list.component.scss */ "./src/app/pages/main-problems-page/problems-list/problems-list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProblemsListComponent);
    return ProblemsListComponent;
}());



/***/ }),

/***/ "./src/app/services/problems.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/problems.service.ts ***!
  \**********************************************/
/*! exports provided: ProblemsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProblemsService", function() { return ProblemsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProblemsService = /** @class */ (function () {
    function ProblemsService(http) {
        var _this = this;
        this.http = http;
        this.problems = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.getAllProblems().subscribe(function (problems) {
            _this.problems.next(problems);
        });
    }
    ProblemsService.prototype.getAllProblems = function () {
        return this.http.get("http://localhost:3000/api/problems");
    };
    ProblemsService.prototype.getProblemById = function (id) {
        return this.http.get("http://localhost:3000/api/problems/" + id);
    };
    ProblemsService.prototype.updateProblemById = function (id, problem) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "Content-Type": "application/json"
        });
        return this.http.put("http://localhost:3000/api/problems/" + id, problem, {
            headers: headers
        });
    };
    ProblemsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProblemsService);
    return ProblemsService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/igoramidzic/code/nodejs/algor-academy/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map