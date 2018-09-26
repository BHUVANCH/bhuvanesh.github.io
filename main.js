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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
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

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n  font-size: 25px;\r\n  margin:0 3vw;\r\n  height:10vh;\r\n  padding:1.5%;\r\n  color:white;\r\n  background-color: rgb(2, 26, 49);\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n.menu{\r\n    margin:0 4vw;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n</div>\n<nav class=\"navbar navbar-default menu\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>                        \n      </button>\n      <!-- <a class=\"navbar-brand\" href=\"#\">WebSiteName</a> -->\n    </div>\n    <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n      <ul class=\"nav navbar-nav\">\n        <li><a routerLink='/home'>Home</a></li>\n        <!-- <li class=\"dropdown\">\n          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Page 1 <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">Page 1-1</a></li>\n            <li><a href=\"#\">Page 1-2</a></li>\n            <li><a href=\"#\">Page 1-3</a></li>\n          </ul>\n        </li> -->\n        <li><a routerLink='/about'>About</a></li>\n        <li><a routerLink='/blog-create'>Post a Blog</a></li>\n      </ul>\n      <!-- <ul class=\"nav navbar-nav navbar-right\">\n        <li><a href=\"#\"><span class=\"glyphicon glyphicon-user\"></span> Sign Up</a></li>\n        <li><a href=\"#\"><span class=\"glyphicon glyphicon-log-in\"></span> Login</a></li>\n      </ul> -->\n    </div>\n  </div>\n</nav>\n\n<router-outlet></router-outlet>"

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
        this.title = 'edwisor Blog';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _blog_view_blog_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blog-view/blog-view.component */ "./src/app/blog-view/blog-view.component.ts");
/* harmony import */ var _blog_create_blog_create_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blog-create/blog-create.component */ "./src/app/blog-create/blog-create.component.ts");
/* harmony import */ var _blog_edit_blog_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blog-edit/blog-edit.component */ "./src/app/blog-edit/blog-edit.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _blog_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./blog.service */ "./src/app/blog.service.ts");
/* harmony import */ var _blog_http_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./blog-http.service */ "./src/app/blog-http.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _blogedit_blogedit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./blogedit/blogedit.component */ "./src/app/blogedit/blogedit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//include Router Module










// include blog service


//import toaster
//  import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//  import {ToastModule} from 'ng2-toastr/ng2-toastr';




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _blog_view_blog_view_component__WEBPACK_IMPORTED_MODULE_7__["BlogViewComponent"],
                _blog_create_blog_create_component__WEBPACK_IMPORTED_MODULE_8__["BlogCreateComponent"],
                _blog_edit_blog_edit_component__WEBPACK_IMPORTED_MODULE_9__["BlogEditComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__["NotFoundComponent"],
                _blogedit_blogedit_component__WEBPACK_IMPORTED_MODULE_17__["BlogeditComponent"]
                //Root
            ],
            imports: [
                // ToastModule.forRoot(),
                _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_16__["ToastrModule"].forRoot(),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                // BrowserAnimationsModule,
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: 'blog/:blogId', component: _blog_view_blog_view_component__WEBPACK_IMPORTED_MODULE_7__["BlogViewComponent"] },
                    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"] },
                    { path: 'blog-create', component: _blog_create_blog_create_component__WEBPACK_IMPORTED_MODULE_8__["BlogCreateComponent"] },
                    { path: 'edit/:blogId', component: _blogedit_blogedit_component__WEBPACK_IMPORTED_MODULE_17__["BlogeditComponent"] },
                    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__["NotFoundComponent"] }
                ])
            ],
            providers: [_blog_service__WEBPACK_IMPORTED_MODULE_12__["BlogService"], _blog_http_service__WEBPACK_IMPORTED_MODULE_13__["BlogHttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/blog-create/blog-create.component.css":
/*!*******************************************************!*\
  !*** ./src/app/blog-create/blog-create.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\r\n    border-left: 5px solid #42A948; /* green */\r\n  }\r\n  \r\n  .ng-invalid:not(form)  {\r\n    border-left: 5px solid #a94442; /* red */\r\n  }"

/***/ }),

/***/ "./src/app/blog-create/blog-create.component.html":
/*!********************************************************!*\
  !*** ./src/app/blog-create/blog-create.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"/node_modules/angular2-toaster/toaster.min.css\" />\n    <div class=\"row\" style=\"text-align:left\">\n      <div class=\"col-md-12\">\n        <form #createBlogForm=\"ngForm\" (ngSubmit)=\"createBlog()\">\n  \n          <div class=\"form-group\">\n            \n  \n  \n            <label>Blog Title</label>\n            <input type=\"text\" name=\"blogTitle\" [(ngModel)]=\"blogTitle\" #title=\"ngModel\" class=\"form-control\" placeholder=\"Enter blog Title\"\n              required>\n  \n          </div>\n          <div [hidden]=\"title.valid || title.pristine\" class=\"alert alert-danger\">\n           Blog Title is required \n          </div>\n  \n          <div class=\"form-group\">\n            <label>Description</label>\n            <input type=\"text\" name=\"blogDescription\" [(ngModel)]=\"blogDescription\" #description=\"ngModel\" class=\"form-control\" placeholder=\"Enter Description\"\n              required>\n          </div>\n          <div class=\"form-group\">\n            <label>Enter the blog body</label>\n            <textarea name=\"blogBodyHtml\" [(ngModel)]=\"blogBodyHtml\" #bodyHtml=\"ngModel\" class=\"form-control\" rows=\"3\" required></textarea>\n          </div>\n          <div class=\"form-group\">\n            <label>Category</label>\n            <select [(ngModel)]=\"blogCategory\" #category=\"ngModel\" name=\"blogCategory\" class=\"form-control\" id=\"category\" required>\n                  <option *ngFor=\"let category of possibleCategories\" [value]=\"category\">{{category}}</option>\n                </select>\n          </div>\n  \n  \n          <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!createBlogForm.form.valid\">Post the blog</button>\n        </form>\n      </div>\n  \n    </div>\n  \n  </div>"

/***/ }),

/***/ "./src/app/blog-create/blog-create.component.ts":
/*!******************************************************!*\
  !*** ./src/app/blog-create/blog-create.component.ts ***!
  \******************************************************/
/*! exports provided: BlogCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogCreateComponent", function() { return BlogCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _blog_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blog-http.service */ "./src/app/blog-http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//  import { ToastsManager } from 'ng2-toastr/ng2-toastr';

var BlogCreateComponent = /** @class */ (function () {
    function BlogCreateComponent(blogHttpservice, _route, router, toastr) {
        this.blogHttpservice = blogHttpservice;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
        this.possibleCategories = ["humour", "comedy", "Technical"];
    }
    BlogCreateComponent.prototype.ngOnInit = function () {
    };
    BlogCreateComponent.prototype.createBlog = function () {
        var _this = this;
        var blogData = {
            title: this.blogTitle,
            description: this.blogDescription,
            category: this.blogCategory,
            blogBody: this.blogBodyHtml
        };
        console.log(blogData);
        this.blogHttpservice.createBlog(blogData).subscribe(function (data) {
            console.log("blog created sucessufully");
            console.log(data);
            setTimeout(function () {
                _this.router.navigate(['/blog', data.data.blogId]);
            }, 1000);
            // this.toastr.success("blog Posted sucessufully","success");
            _this.toastr.success('blog Posted sucessufully"', 'Toastr fun!');
        }, function (error) {
            console.log("error found in blog creation");
            console.log(error.errorMessage);
            // this.toastr.error("some error occured", 'Oops!');
            _this.toastr.error('error found in blog creation', 'Major Error', {
                timeOut: 3000
            });
        });
    };
    BlogCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog-create',
            template: __webpack_require__(/*! ./blog-create.component.html */ "./src/app/blog-create/blog-create.component.html"),
            styles: [__webpack_require__(/*! ./blog-create.component.css */ "./src/app/blog-create/blog-create.component.css")]
        }),
        __metadata("design:paramtypes", [_blog_http_service__WEBPACK_IMPORTED_MODULE_1__["BlogHttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], BlogCreateComponent);
    return BlogCreateComponent;
}());



/***/ }),

/***/ "./src/app/blog-edit/blog-edit.component.css":
/*!***************************************************!*\
  !*** ./src/app/blog-edit/blog-edit.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/blog-edit/blog-edit.component.html":
/*!****************************************************!*\
  !*** ./src/app/blog-edit/blog-edit.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  blog-edit works!\n</p>\n"

/***/ }),

/***/ "./src/app/blog-edit/blog-edit.component.ts":
/*!**************************************************!*\
  !*** ./src/app/blog-edit/blog-edit.component.ts ***!
  \**************************************************/
/*! exports provided: BlogEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogEditComponent", function() { return BlogEditComponent; });
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

var BlogEditComponent = /** @class */ (function () {
    function BlogEditComponent() {
    }
    BlogEditComponent.prototype.ngOnInit = function () {
    };
    BlogEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog-edit',
            template: __webpack_require__(/*! ./blog-edit.component.html */ "./src/app/blog-edit/blog-edit.component.html"),
            styles: [__webpack_require__(/*! ./blog-edit.component.css */ "./src/app/blog-edit/blog-edit.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogEditComponent);
    return BlogEditComponent;
}());



/***/ }),

/***/ "./src/app/blog-http.service.ts":
/*!**************************************!*\
  !*** ./src/app/blog-http.service.ts ***!
  \**************************************/
/*! exports provided: BlogHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogHttpService", function() { return BlogHttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//importing http client to make requests

// import observable related code

//import { BehaviorSubject, Subject, Observable, of } from 'rxjs';


//import { map, switchMap, catchError, mergeMap } from 'rxjs/operators';
var BlogHttpService = /** @class */ (function () {
    function BlogHttpService(_http) {
        this._http = _http;
        this.baseurl = 'https://blogapp.edwisor.com/api/v1/blogs';
        this.token = '?authToken=ODAwMTBlMDAwMjQ4ZDM0YTFiNTc2YzRlNjMwZDliNTEzYmIwNTc4M2JhOTBjMzMzZTJjY2EyM2Y4Y2I1MGZiN2VkZGUzNmM5Y2MyMTliMzkzNDFiZDNkMzRjZmRhZThkMjVmMGE0MjFjNjIyZDhhNGExOTdhNDJiYzVjY2Y2N2U1Zg==';
        console.log("blog-http service constructor is called");
    }
    //error handling 
    BlogHttpService.prototype.handleError = function (error) {
        console.log("Handle error Http calls");
        console.log(error.message);
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error.message);
    };
    BlogHttpService.prototype.createBlog = function (blogData) {
        var myResponse = this._http.post(this.baseurl + '/create' + this.token, blogData);
        console.log("service*********************");
        console.log(myResponse);
        return myResponse;
    };
    ;
    BlogHttpService.prototype.editBlog = function (blogId, blogData) {
        var myResponse = this._http.put(this.baseurl + '/' + blogId + '/edit' + this.token, blogData);
        console.log(myResponse);
        return myResponse;
    };
    ;
    BlogHttpService.prototype.deleteBlog = function (blogId) {
        var data;
        var myResponse = this._http.post(this.baseurl + "/" + blogId + "/delete" + this.token, data);
        console.log(myResponse);
        return myResponse;
    };
    ;
    //method to return all Blogs
    BlogHttpService.prototype.getallBlogs = function () {
        var myResponse = this._http.get(this.baseurl + '/all' + this.token);
        //https://blogapp.edwisor.com/api/v1/blogs/all?authToken=ODAwMTBlMDAwMjQ4ZDM0YTFiNTc2YzRlNjMwZDliNTEzYmIwNTc4M2JhOTBjMzMzZTJjY2EyM2Y4Y2I1MGZiN2VkZGUzNmM5Y2MyMTliMzkzNDFiZDNkMzRjZmRhZThkMjVmMGE0MjFjNjIyZDhhNGExOTdhNDJiYzVjY2Y2N2U1Zg==
        console.log(myResponse);
        return myResponse;
    };
    //method to get a particular blog
    BlogHttpService.prototype.getSingleBlogInformation = function (currentBlogId) {
        //using a for loop here from the type script
        //https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html
        // for (let blog of this.allBlogs) {
        //   if (blog.blogId == currentBlogId) {
        //     this.currentBlog = blog;
        //     return this.currentBlog;
        //   }
        var myResponse = this._http.get(this.baseurl + '/view/' + currentBlogId + '?authToken=ODAwMTBlMDAwMjQ4ZDM0YTFiNTc2YzRlNjMwZDliNTEzYmIwNTc4M2JhOTBjMzMzZTJjY2EyM2Y4Y2I1MGZiN2VkZGUzNmM5Y2MyMTliMzkzNDFiZDNkMzRjZmRhZThkMjVmMGE0MjFjNjIyZDhhNGExOTdhNDJiYzVjY2Y2N2U1Zg==');
        //https://blogapp.edwisor.com/api/v1/blogs/all?authToken=ODAwMTBlMDAwMjQ4ZDM0YTFiNTc2YzRlNjMwZDliNTEzYmIwNTc4M2JhOTBjMzMzZTJjY2EyM2Y4Y2I1MGZiN2VkZGUzNmM5Y2MyMTliMzkzNDFiZDNkMzRjZmRhZThkMjVmMGE0MjFjNjIyZDhhNGExOTdhNDJiYzVjY2Y2N2U1Zg==
        console.log(myResponse);
        return myResponse;
    };
    BlogHttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BlogHttpService);
    return BlogHttpService;
}());



/***/ }),

/***/ "./src/app/blog-view/blog-view.component.css":
/*!***************************************************!*\
  !*** ./src/app/blog-view/blog-view.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/blog-view/blog-view.component.html":
/*!****************************************************!*\
  !*** ./src/app/blog-view/blog-view.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"text-align:center\">\n  <div class=\"row\" style=\"text-align:center\" *ngIf=\"currentBlog\">\n    <div class=\"col-md-12\" style=\"font-size:22px\">\n      {{currentBlog.title}} </div>\n      <p>posted by {{currentBlog.author}} on {{currentBlog.created | date}}</p>\n      <p *ngIf=\"currentBlog.tags!=undefined && currentBlog.tags.length>0\">tags: <span *ngFor=\"let tag of currentBlog.tags;let first=first;let last=last\">{{tag}}{{last ? '' : ', '}}</span></p>\n      <hr>\n      <div [innerHtml]=\"currentBlog.bodyHTML\"></div>\n\n      <hr>\n      <h5>category - {{currentBlog.category}}</h5>\n      <br><br><br><br>\n  </div>\n\n  <div class=\"row\" style=\"text-align:center\" *ngIf=\"currentBlog\">\n\n    <div class=\"col-md-4\">\n        <a class=\"btn btn-primary\"  [routerLink]=\"['/edit',currentBlog.blogId]\">Edit</a>\n    </div>\n    <div class=\"col-md-4\">\n        <a class=\"btn btn-danger\" (click)=\"deleteThisBlog()\">Delete</a>\n    </div>\n    <div class=\"col-md-4\">\n        <a class=\"btn btn-warning\" (click)=\"goBackToPreviousPage()\">Go Back</a>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/blog-view/blog-view.component.ts":
/*!**************************************************!*\
  !*** ./src/app/blog-view/blog-view.component.ts ***!
  \**************************************************/
/*! exports provided: BlogViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogViewComponent", function() { return BlogViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _blog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blog.service */ "./src/app/blog.service.ts");
/* harmony import */ var _blog_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../blog-http.service */ "./src/app/blog-http.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import activated route related code





var BlogViewComponent = /** @class */ (function () {
    //public con;
    function BlogViewComponent(location, _route, router, toastr, blogserve, bloghttpservice) {
        this.location = location;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
        this.blogserve = blogserve;
        this.bloghttpservice = bloghttpservice;
        console.log("constructor is called");
    }
    BlogViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.con = new BlogService();
        console.log("blog-view ngOnInitCalled");
        //getting the blog id from the route
        var myBlogId = this._route.snapshot.paramMap.get('blogId');
        console.log("My Blog Id: ", myBlogId);
        // this.currentBlog=this.blogserve.getSingleBlogInformation(myBlogId);
        this.currentBlog = this.bloghttpservice.getSingleBlogInformation(myBlogId).subscribe(function (data) {
            console.log(data);
            _this.currentBlog = data["data"];
        }, function (error) {
            console.log("some error occured");
            console.log(error.errorMessage);
        });
        console.log(this.currentBlog);
    };
    BlogViewComponent.prototype.deleteThisBlog = function () {
        var _this = this;
        this.bloghttpservice.deleteBlog(this.currentBlog.blogId).subscribe(function (data) {
            console.log("blog deleted");
            console.log(data);
            _this.toastr.success("Blog successfully deleted", "Success");
            setTimeout(function () {
                _this.router.navigate(['/home']);
            }, 1000);
        }, function (error) {
            console.log("error occuredd in deleting the blog");
            console.log(error.message);
            _this.toastr.error("blog is not deleted");
        });
    };
    BlogViewComponent.prototype.goBackToPreviousPage = function () {
        this.location.back();
    };
    BlogViewComponent.prototype.ngOnDestroy = function () {
        console.log("blog-view ng On It Destroyed");
    };
    BlogViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog-view',
            template: __webpack_require__(/*! ./blog-view.component.html */ "./src/app/blog-view/blog-view.component.html"),
            styles: [__webpack_require__(/*! ./blog-view.component.css */ "./src/app/blog-view/blog-view.component.css")],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"], _blog_http_service__WEBPACK_IMPORTED_MODULE_3__["BlogHttpService"]])
    ], BlogViewComponent);
    return BlogViewComponent;
}());



/***/ }),

/***/ "./src/app/blog.service.ts":
/*!*********************************!*\
  !*** ./src/app/blog.service.ts ***!
  \*********************************/
/*! exports provided: BlogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogService", function() { return BlogService; });
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

var BlogService = /** @class */ (function () {
    function BlogService() {
        var _this = this;
        this.allBlogs = [
            {
                "blogId": "1",
                "lastModified": "2017-10-20T12:20:47.654Z",
                "created": "2017-10-20T12:20:47.654Z",
                "tags": [],
                "author": "Admin",
                "category": "comedy",
                "isPublished": true,
                "views": 0,
                "bodyHTML": "this is blog body",
                "description": "this is blog 1 description",
                "title": "This is blog 1"
            }, {
                "blogId": "2",
                "lastModified": "2017-10-20T12:20:47.654Z",
                "created": "2017-10-20T12:20:47.654Z",
                "tags": [],
                "author": "Admin",
                "category": "comedy",
                "isPublished": true,
                "views": 0,
                "bodyHTML": "this is blog body",
                "description": "this is blog 1 description",
                "title": "This is blog 1"
            }, {
                "blogId": "3",
                "lastModified": "2017-10-20T12:20:47.654Z",
                "created": "2017-10-20T12:20:47.654Z",
                "tags": [],
                "author": "Admin",
                "category": "comedy",
                "isPublished": true,
                "views": 0,
                "bodyHTML": "this is blog body",
                "description": "this is blog 1 description",
                "title": "This is blog 1"
            }
        ];
        //method to return all the blogs
        this.getAllBlogs = function () {
            return _this.allBlogs;
        };
        console.log("service constructor is called");
    }
    BlogService.prototype.ngOnInit = function () {
        console.log("service OnInit is called");
    };
    //method to return the particular blog
    BlogService.prototype.getSingleBlogInformation = function (currentBlogId) {
        //using a for loop here from the type script
        //https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html
        for (var _i = 0, _a = this.allBlogs; _i < _a.length; _i++) {
            var blog = _a[_i];
            if (blog.blogId == currentBlogId) {
                this.currentBlog = blog;
                return this.currentBlog;
            }
        }
    };
    BlogService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], BlogService);
    return BlogService;
}());



/***/ }),

/***/ "./src/app/blogedit/blogedit.component.css":
/*!*************************************************!*\
  !*** ./src/app/blogedit/blogedit.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/blogedit/blogedit.component.html":
/*!**************************************************!*\
  !*** ./src/app/blogedit/blogedit.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"currentBlog\">\n    <h3>Edit this blog</h3>\n    <div class=\"row\" style=\"text-align:left\">\n      <div class=\"col-md-12\">\n        <form #createBlogForm=\"ngForm\" (ngSubmit)=\"editThisBlog()\">\n  \n          <div class=\"form-group\">\n  \n  \n            <label>Blog Title</label>\n            <input type=\"text\" name=\"blogTitle\" [(ngModel)]=\"currentBlog.title\" #title=\"ngModel\" class=\"form-control\" placeholder=\"Enter blog Title\"\n              required>\n  \n          </div>\n          <div [hidden]=\"title.valid || title.pristine\" class=\"alert alert-danger\">\n           Blog Title is required \n          </div>\n  \n          <div class=\"form-group\">\n            <label>Description</label>\n            <input type=\"text\" name=\"blogDescription\" [(ngModel)]=\"currentBlog.description\" #description=\"ngModel\" class=\"form-control\" placeholder=\"Enter Description\"\n              required>\n          </div>\n          <div class=\"form-group\">\n            <label>Enter the blog body</label>\n            <textarea name=\"blogBodyHtml\" [(ngModel)]=\"currentBlog.bodyHtml\" #bodyHtml=\"ngModel\" class=\"form-control\" rows=\"3\" required></textarea>\n          </div>\n          <div class=\"form-group\">\n            <label>Category</label>\n            <select [(ngModel)]=\"currentBlog.category\" #category=\"ngModel\" name=\"blogCategory\" class=\"form-control\" id=\"category\" required>\n                  <option *ngFor=\"let category of possibleCategories\" [value]=\"category\">{{category}}</option>\n                </select>\n          </div>\n  \n  \n          <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!createBlogForm.form.valid\">Edit the blog</button>\n        </form>\n      </div>\n  \n    </div>\n  \n  </div>"

/***/ }),

/***/ "./src/app/blogedit/blogedit.component.ts":
/*!************************************************!*\
  !*** ./src/app/blogedit/blogedit.component.ts ***!
  \************************************************/
/*! exports provided: BlogeditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogeditComponent", function() { return BlogeditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _blog_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../blog-http.service */ "./src/app/blog-http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BlogeditComponent = /** @class */ (function () {
    function BlogeditComponent(blogHttpservice, _route, router, toastr) {
        this.blogHttpservice = blogHttpservice;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
        this.possibleCategories = ["humour", "comedy", "Technical"];
    }
    BlogeditComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("blog-edit ngOnInitCalled");
        //getting the blog id from the route
        var myBlogId = this._route.snapshot.paramMap.get('blogId');
        console.log("My Blog Id: ", myBlogId);
        // this.currentBlog=this.blogserve.getSingleBlogInformation(myBlogId);
        this.currentBlog = this.blogHttpservice.getSingleBlogInformation(myBlogId).subscribe(function (data) {
            console.log(data);
            _this.currentBlog = data["data"];
        }, function (error) {
            console.log("some error occured");
            console.log(error.errorMessage);
        });
        console.log(this.currentBlog);
    };
    BlogeditComponent.prototype.editThisBlog = function () {
        var _this = this;
        this.blogHttpservice.editBlog(this.currentBlog.blogId, this.currentBlog).subscribe(function (data) {
            console.log("blog edited sucessfully");
            _this.toastr.success("blog is Edited Sucessufully", "Success");
            setTimeout(function () {
                _this.router.navigate(['/blog', _this.currentBlog.blogId]);
            }, 1000);
        }, function (error) {
            console.log("error occured in editing blog");
            _this.toastr.error("error occured in editing blog");
        });
    };
    BlogeditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blogedit',
            template: __webpack_require__(/*! ./blogedit.component.html */ "./src/app/blogedit/blogedit.component.html"),
            styles: [__webpack_require__(/*! ./blogedit.component.css */ "./src/app/blogedit/blogedit.component.css")]
        }),
        __metadata("design:paramtypes", [_blog_http_service__WEBPACK_IMPORTED_MODULE_3__["BlogHttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]])
    ], BlogeditComponent);
    return BlogeditComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"text-align:center\">\n    <div class=\"row\" style=\"text-align:center\">\n      <div class=\"col-md-12\" style=\"font-size:22px\">All Blogs </div>\n  \n  \n      <br><br><br><br>\n    </div>\n  \n    <div class=\"row\" style=\"text-align:center\" *ngIf=\"allBlogs.length>0\">\n      <div *ngFor=\"let blog of allBlogs\" class=\"col-md-4\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">{{blog.title | uppercase}}</div>\n          <div class=\"panel-body\">\n  \n              <p>{{blog.description}}</p>\n          </div>\n          <div class=\"panel-footer\">Posted on {{blog.created | date}}<br/> by {{blog.author}}\n          <br/><br/><a [routerLink]=\"['/blog',blog.blogId]\" class=\"btn btn-primary\">Read</a>\n          </div>\n        </div>\n  \n  \n        <br/>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _blog_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blog-http.service */ "./src/app/blog-http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(bloghttpservice) {
        this.bloghttpservice = bloghttpservice;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("ng On It Called");
        // this.allBlogs=this.bloghttpservice.getallBlogs();
        this.allBlogs = this.bloghttpservice.getallBlogs().subscribe(function (data) {
            console.log("loading data");
            console.log(data);
            _this.allBlogs = data["data"];
        }, function (error) {
            console.log("some error occured");
            console.log(error.errorMessage);
        }); //subscribe
        // console.log(this.allBlogs)
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        console.log("ng On It Destroyed");
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")],
        }),
        __metadata("design:paramtypes", [_blog_http_service__WEBPACK_IMPORTED_MODULE_1__["BlogHttpService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
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

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\users\tgmsaven2\go\src\github.com\TGMNY\CLI\CLI\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map