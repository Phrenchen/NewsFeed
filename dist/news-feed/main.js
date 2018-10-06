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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    padding: 0;\r\n    margin: 0;\r\n    border: 0;\r\n    overflow: hidden;\r\n}\r\n\r\n.hudBar{\r\n    /* display: flex; */\r\n    /* flex-direction: row; */\r\n    overflow: hidden;\r\n}\r\n\r\n.app-head{\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-head\">\n  <h1>news list. with 3 view states (short, teaser, long)</h1>\n</div>\n<div id=\"hudBar\" class=\"hudBar\">\n  <app-action-bar></app-action-bar>\n  <app-news-feed></app-news-feed>\n</div>"

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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'news-feed';
        // enableProdMode();
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _news_feed_news_feed_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./news-feed/news-feed.component */ "./src/app/news-feed/news-feed.component.ts");
/* harmony import */ var _news_feed_feed_bubble_feed_bubble_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./news-feed/feed-bubble/feed-bubble.component */ "./src/app/news-feed/feed-bubble/feed-bubble.component.ts");
/* harmony import */ var _news_feed_ticker_ticker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./news-feed/ticker/ticker.component */ "./src/app/news-feed/ticker/ticker.component.ts");
/* harmony import */ var _news_feed_favourite_bubble_favourite_bubble_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./news-feed/favourite-bubble/favourite-bubble.component */ "./src/app/news-feed/favourite-bubble/favourite-bubble.component.ts");
/* harmony import */ var _news_feed_detail_level_details_short_details_short_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./news-feed/detail-level/details-short/details-short.component */ "./src/app/news-feed/detail-level/details-short/details-short.component.ts");
/* harmony import */ var _news_feed_detail_level_details_teaser_details_teaser_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./news-feed/detail-level/details-teaser/details-teaser.component */ "./src/app/news-feed/detail-level/details-teaser/details-teaser.component.ts");
/* harmony import */ var _news_feed_detail_level_details_long_details_long_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./news-feed/detail-level/details-long/details-long.component */ "./src/app/news-feed/detail-level/details-long/details-long.component.ts");
/* harmony import */ var _news_feed_action_bar_action_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./news-feed/action-bar/action-bar.component */ "./src/app/news-feed/action-bar/action-bar.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _news_feed_news_feed_component__WEBPACK_IMPORTED_MODULE_3__["NewsFeedComponent"],
                _news_feed_feed_bubble_feed_bubble_component__WEBPACK_IMPORTED_MODULE_4__["FeedBubbleComponent"],
                _news_feed_ticker_ticker_component__WEBPACK_IMPORTED_MODULE_5__["TickerComponent"],
                _news_feed_favourite_bubble_favourite_bubble_component__WEBPACK_IMPORTED_MODULE_6__["FavouriteBubbleComponent"],
                _news_feed_detail_level_details_short_details_short_component__WEBPACK_IMPORTED_MODULE_7__["DetailsShortComponent"],
                _news_feed_detail_level_details_teaser_details_teaser_component__WEBPACK_IMPORTED_MODULE_8__["DetailsTeaserComponent"],
                _news_feed_detail_level_details_long_details_long_component__WEBPACK_IMPORTED_MODULE_9__["DetailsLongComponent"],
                _news_feed_action_bar_action_bar_component__WEBPACK_IMPORTED_MODULE_10__["ActionBarComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/news-feed/action-bar/action-bar.component.css":
/*!***************************************************************!*\
  !*** ./src/app/news-feed/action-bar/action-bar.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".action-bar{\r\n    display: -ms-grid;\r\n    display: grid;\r\n    /* grid-template-columns: repeat(1, 1fr); */\r\n\r\n}"

/***/ }),

/***/ "./src/app/news-feed/action-bar/action-bar.component.html":
/*!****************************************************************!*\
  !*** ./src/app/news-feed/action-bar/action-bar.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"action-bar\">\n  <button (click)=\"onAddNews()\">add news</button>\n  <button (click)=\"onDeleteNews()\">delete selected news</button>\n</div>"

/***/ }),

/***/ "./src/app/news-feed/action-bar/action-bar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/news-feed/action-bar/action-bar.component.ts ***!
  \**************************************************************/
/*! exports provided: ActionBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionBarComponent", function() { return ActionBarComponent; });
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

var ActionBarComponent = /** @class */ (function () {
    function ActionBarComponent() {
    }
    ActionBarComponent.prototype.ngOnInit = function () {
    };
    ActionBarComponent.prototype.onAddNews = function () {
        console.log('onAddNews');
    };
    ActionBarComponent.prototype.onDeleteNews = function () {
        console.log('onDeleteNews');
    };
    ActionBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-action-bar',
            template: __webpack_require__(/*! ./action-bar.component.html */ "./src/app/news-feed/action-bar/action-bar.component.html"),
            styles: [__webpack_require__(/*! ./action-bar.component.css */ "./src/app/news-feed/action-bar/action-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ActionBarComponent);
    return ActionBarComponent;
}());



/***/ }),

/***/ "./src/app/news-feed/detail-level/details-long/details-long.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/news-feed/detail-level/details-long/details-long.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#long-stuff{\r\n    border: 1px solid black;\r\n    margin-right: 10px;\r\n    padding: 5px 5px 5px 5px;\r\n}"

/***/ }),

/***/ "./src/app/news-feed/detail-level/details-long/details-long.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/news-feed/detail-level/details-long/details-long.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  - complete content. possibly scrollable / multi-paged\n-->\n\n<div id=\"long-stuff\"></div>\n"

/***/ }),

/***/ "./src/app/news-feed/detail-level/details-long/details-long.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/news-feed/detail-level/details-long/details-long.component.ts ***!
  \*******************************************************************************/
/*! exports provided: DetailsLongComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsLongComponent", function() { return DetailsLongComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DetailsLongComponent = /** @class */ (function () {
    function DetailsLongComponent(sanitizer) {
        this.sanitizer = sanitizer;
    }
    DetailsLongComponent.prototype.ngOnInit = function () {
    };
    DetailsLongComponent.prototype.ngAfterViewInit = function () {
        document.querySelector('#long-stuff').innerHTML =
            this.sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].HTML, this.news.longDescription);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DetailsLongComponent.prototype, "news", void 0);
    DetailsLongComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-details-long',
            template: __webpack_require__(/*! ./details-long.component.html */ "./src/app/news-feed/detail-level/details-long/details-long.component.html"),
            styles: [__webpack_require__(/*! ./details-long.component.css */ "./src/app/news-feed/detail-level/details-long/details-long.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], DetailsLongComponent);
    return DetailsLongComponent;
}());



/***/ }),

/***/ "./src/app/news-feed/detail-level/details-short/details-short.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/news-feed/detail-level/details-short/details-short.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".details-short{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    height: 100%;\r\n}\r\n\r\n.title{\r\n    font-style: oblique;\r\n}\r\n\r\nspan{\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n}"

/***/ }),

/***/ "./src/app/news-feed/detail-level/details-short/details-short.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/news-feed/detail-level/details-short/details-short.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  - title + short description in 1 line\n-->\n\n<div clasS=\"details-short\">\n  \n    <span class=\"title\" id=\"title_{{news.id}}\"> short: {{news.title}} - </span>\n  <span id='shortDescription_{{news.id}}'></span>\n</div>"

/***/ }),

/***/ "./src/app/news-feed/detail-level/details-short/details-short.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/news-feed/detail-level/details-short/details-short.component.ts ***!
  \*********************************************************************************/
/*! exports provided: DetailsShortComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsShortComponent", function() { return DetailsShortComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DetailsShortComponent = /** @class */ (function () {
    function DetailsShortComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.totalNewsCount = 1;
    }
    DetailsShortComponent.prototype.ngOnInit = function () {
    };
    DetailsShortComponent.prototype.ngAfterViewInit = function () {
        var shortDescription = this.sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].HTML, this.news.shortDescription);
        document.querySelector('#title_' + this.news.id).innerHTML = this.sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].HTML, this.news.title);
        var id = '#shortDescription_' + this.news.id;
        document.querySelector('#shortDescription_' + this.news.id).innerHTML =
            this.sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].HTML, this.news.shortDescription);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DetailsShortComponent.prototype, "news", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DetailsShortComponent.prototype, "totalNewsCount", void 0);
    DetailsShortComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-details-short',
            template: __webpack_require__(/*! ./details-short.component.html */ "./src/app/news-feed/detail-level/details-short/details-short.component.html"),
            styles: [__webpack_require__(/*! ./details-short.component.css */ "./src/app/news-feed/detail-level/details-short/details-short.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], DetailsShortComponent);
    return DetailsShortComponent;
}());



/***/ }),

/***/ "./src/app/news-feed/detail-level/details-teaser/details-teaser.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/news-feed/detail-level/details-teaser/details-teaser.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\r\n    border: 1px solid black;\r\n    width: auto;\r\n    cursor: pointer;\r\n    max-width: 120px;\r\n    padding: 5px 5px 5px 5px;\r\n}\r\n\r\n.teaser-thumbnail{\r\n    max-width: 100px;\r\n}"

/***/ }),

/***/ "./src/app/news-feed/detail-level/details-teaser/details-teaser.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/news-feed/detail-level/details-teaser/details-teaser.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  - card\n  - title + thumbnail short description\n  - click on teaser -> show long version\n-->\n<div class=\"card\"\n  (click)=\"onTeaserClick()\"\n>\n  <img class=\"teaser-thumbnail\" *ngIf=\"hasThumbnail\" src={{thumbnail}} alt=\"Avatar\" style=\"width:100%\">\n  <div class=\"container\">\n    <h4><b>teaser card</b></h4> \n    <p>{{title}}</p> \n  </div>\n</div>"

/***/ }),

/***/ "./src/app/news-feed/detail-level/details-teaser/details-teaser.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/news-feed/detail-level/details-teaser/details-teaser.component.ts ***!
  \***********************************************************************************/
/*! exports provided: DetailsTeaserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsTeaserComponent", function() { return DetailsTeaserComponent; });
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

var DetailsTeaserComponent = /** @class */ (function () {
    function DetailsTeaserComponent() {
        this.teaserClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    DetailsTeaserComponent.prototype.ngOnInit = function () {
    };
    DetailsTeaserComponent.prototype.onTeaserClick = function () {
        console.log('teaser clicked: ' + this.news.id);
        this.teaserClicked.emit(this.news);
    };
    Object.defineProperty(DetailsTeaserComponent.prototype, "hasThumbnail", {
        get: function () {
            return this.news && this.news.thumbnail !== null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DetailsTeaserComponent.prototype, "thumbnail", {
        get: function () {
            return this.news ? this.news.thumbnail : ' no thumb';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DetailsTeaserComponent.prototype, "title", {
        get: function () {
            return this.news ? this.news.title : 'no title';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DetailsTeaserComponent.prototype, "shortDescription", {
        get: function () {
            return this.news ? this.news.shortDescription : 'no short description';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DetailsTeaserComponent.prototype, "longDescription", {
        get: function () {
            return this.news ? this.news.longDescription : 'no long description';
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DetailsTeaserComponent.prototype, "news", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DetailsTeaserComponent.prototype, "teaserClicked", void 0);
    DetailsTeaserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-details-teaser',
            template: __webpack_require__(/*! ./details-teaser.component.html */ "./src/app/news-feed/detail-level/details-teaser/details-teaser.component.html"),
            styles: [__webpack_require__(/*! ./details-teaser.component.css */ "./src/app/news-feed/detail-level/details-teaser/details-teaser.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DetailsTeaserComponent);
    return DetailsTeaserComponent;
}());



/***/ }),

/***/ "./src/app/news-feed/favourite-bubble/favourite-bubble.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/news-feed/favourite-bubble/favourite-bubble.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".favourite-bubble{\r\n    position: relative;\r\n    background: lightsalmon;\r\n    margin: 0;\r\n    padding: 0;\r\n    border-radius: 50%;\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n}\r\n\r\n.favourite-counter{\r\n    text-align: center;    \r\n    color: black;\r\n\r\n    /* vertical align wtf... */\r\n}\r\n\r\np{\r\n    /* display: inline-block; */\r\n    margin: 0;\r\n}"

/***/ }),

/***/ "./src/app/news-feed/favourite-bubble/favourite-bubble.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/news-feed/favourite-bubble/favourite-bubble.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"favourite-bubble\">\n  <p class=\"favourite-counter\">{{counter}}</p>\n</div>"

/***/ }),

/***/ "./src/app/news-feed/favourite-bubble/favourite-bubble.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/news-feed/favourite-bubble/favourite-bubble.component.ts ***!
  \**************************************************************************/
/*! exports provided: FavouriteBubbleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouriteBubbleComponent", function() { return FavouriteBubbleComponent; });
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

var FavouriteBubbleComponent = /** @class */ (function () {
    function FavouriteBubbleComponent() {
    }
    FavouriteBubbleComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], FavouriteBubbleComponent.prototype, "counter", void 0);
    FavouriteBubbleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-favourite-bubble',
            template: __webpack_require__(/*! ./favourite-bubble.component.html */ "./src/app/news-feed/favourite-bubble/favourite-bubble.component.html"),
            styles: [__webpack_require__(/*! ./favourite-bubble.component.css */ "./src/app/news-feed/favourite-bubble/favourite-bubble.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FavouriteBubbleComponent);
    return FavouriteBubbleComponent;
}());



/***/ }),

/***/ "./src/app/news-feed/feed-bubble/feed-bubble.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/news-feed/feed-bubble/feed-bubble.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".feed-bubble{\r\n    position: relative;\r\n    background: lightsalmon;\r\n    margin: 0;\r\n    padding: 0;\r\n    border-radius: 50%;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.feed-counter{\r\n    text-align: center;    \r\n    color: black;\r\n\r\n    /* vertical align wtf... */\r\n}\r\n\r\np{\r\n    /* display: inline-block; */\r\n    margin: 0;\r\n}"

/***/ }),

/***/ "./src/app/news-feed/feed-bubble/feed-bubble.component.html":
/*!******************************************************************!*\
  !*** ./src/app/news-feed/feed-bubble/feed-bubble.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"feed-bubble\">\n  <p class=\"feed-counter\">{{counter}}</p>\n</div>"

/***/ }),

/***/ "./src/app/news-feed/feed-bubble/feed-bubble.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/news-feed/feed-bubble/feed-bubble.component.ts ***!
  \****************************************************************/
/*! exports provided: FeedBubbleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedBubbleComponent", function() { return FeedBubbleComponent; });
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

var FeedBubbleComponent = /** @class */ (function () {
    function FeedBubbleComponent() {
    }
    FeedBubbleComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], FeedBubbleComponent.prototype, "counter", void 0);
    FeedBubbleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-feed-bubble',
            template: __webpack_require__(/*! ./feed-bubble.component.html */ "./src/app/news-feed/feed-bubble/feed-bubble.component.html"),
            styles: [__webpack_require__(/*! ./feed-bubble.component.css */ "./src/app/news-feed/feed-bubble/feed-bubble.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FeedBubbleComponent);
    return FeedBubbleComponent;
}());



/***/ }),

/***/ "./src/app/news-feed/news-feed.component.css":
/*!***************************************************!*\
  !*** ./src/app/news-feed/news-feed.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".news-feed{\r\n    display: -ms-grid;\r\n    display: grid;\r\n    width: 100%;\r\n    background-color: cornsilk;\r\n    justify-items: center;\r\n}\r\n\r\n/* global positioning of icon. no bubble skinning*/\r\n\r\n.hud-icon-favourite-bubble{\r\n    width: 50px;\r\n    height: 50px;\r\n    margin: 10px 5px 5px 5px;\r\n    \r\n}\r\n\r\n.hud-icon-feed-bubble{\r\n    width: 50px;\r\n    height: 50px;\r\n    margin: 10px 5px 5px 5px;\r\n}\r\n\r\n.hud-icon-ticker{\r\n    width: 100%;\r\n    margin: 10px 0 0 0;\r\n     /* margin: 5px 5px 5px auto; */\r\n     margin: 5px 5px 5px 5px;\r\n    /* padding-left: 5px; */\r\n    \r\n    /* border: 1px solid blue; */\r\n}\r\n\r\n.selected-item-details{\r\n    border: 1px dotted darkgreen;\r\n}"

/***/ }),

/***/ "./src/app/news-feed/news-feed.component.html":
/*!****************************************************!*\
  !*** ./src/app/news-feed/news-feed.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"news-feed\">\n  <!-- <app-favourite-bubble \n    class=\"hud-icon-favourite-bubble\"\n    [counter]=\"getUnreadFavouriteCount()\"\n  ></app-favourite-bubble> -->\n  <!-- <app-feed-bubble \n    class=\"hud-icon-feed-bubble\"\n    [counter]=\"getUnreadNewsCount()\"\n  ></app-feed-bubble> -->\n  <h3>News Ticker</h3>\n  <app-ticker \n    class=\"hud-icon-ticker\"\n    [news]=\"news\"\n    (itemClicked)=\"onTickerItemClick($event)\"\n  ></app-ticker>\n\n</div>\n\n<app-details-teaser class=\"selected-item-details\" *ngIf=\"hasSelectedItem\"\n  [news]=selectedItem\n  (teaserClicked)=\"onTeaserClick($event)\">\n</app-details-teaser>\n\n<app-details-long *ngIf=\"showLongVersion\"\n  [news]=\"selectedItem\"\n></app-details-long>\n\n<!--\n<app-news-item class=\"selected-item-details\" *ngIf=\"hasSelectedItem()\"\n  [item]=\"selectedItem\"\n></app-news-item>\n-->"

/***/ }),

/***/ "./src/app/news-feed/news-feed.component.ts":
/*!**************************************************!*\
  !*** ./src/app/news-feed/news-feed.component.ts ***!
  \**************************************************/
/*! exports provided: NewsFeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsFeedComponent", function() { return NewsFeedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _news_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./news-service.service */ "./src/app/news-feed/news-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var NewsFeedComponent = /** @class */ (function () {
    function NewsFeedComponent(newsService) {
        this.newsService = newsService;
        this.news = [];
        this.selectedItem = null;
        this.isLongVersionRequested = false;
        this.getUsers();
    }
    NewsFeedComponent.prototype.ngOnInit = function () {
    };
    NewsFeedComponent.prototype.getUsers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.newsService.requestNews()];
                    case 1:
                        response = _a.sent();
                        // this.selectedItem = response[0];
                        console.log('got users');
                        try {
                            this.news = response;
                        }
                        catch (e) {
                            console.log('failed assigning response to news array');
                            this.news = [];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    NewsFeedComponent.prototype.getUnreadFavouriteCount = function () {
        var unreadFavourites = this.news.filter(function (item) {
            return item.isFavourite && !item.isRead;
        });
        return unreadFavourites.length;
    };
    NewsFeedComponent.prototype.getUnreadNewsCount = function () {
        var unreadNews = this.news.filter(function (item) {
            return !item.isRead;
        });
        return unreadNews.length;
    };
    NewsFeedComponent.prototype.onTickerItemClick = function (item) {
        this.selectedItem = (this.selectedItem !== item) ? item : null;
        this.isLongVersionRequested = false;
    };
    NewsFeedComponent.prototype.onTeaserClick = function (item) {
        this.isLongVersionRequested = !this.isLongVersionRequested;
        console.log('news feed toggles long version: ' + this.isLongVersionRequested);
    };
    Object.defineProperty(NewsFeedComponent.prototype, "showLongVersion", {
        get: function () {
            return this.isLongVersionRequested;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewsFeedComponent.prototype, "hasSelectedItem", {
        get: function () {
            // console.log('selected item? ' + (this.selectedItem !== null));
            return this.selectedItem !== null;
        },
        enumerable: true,
        configurable: true
    });
    NewsFeedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-news-feed',
            template: __webpack_require__(/*! ./news-feed.component.html */ "./src/app/news-feed/news-feed.component.html"),
            styles: [__webpack_require__(/*! ./news-feed.component.css */ "./src/app/news-feed/news-feed.component.css")]
        }),
        __metadata("design:paramtypes", [_news_service_service__WEBPACK_IMPORTED_MODULE_1__["NewsServiceService"]])
    ], NewsFeedComponent);
    return NewsFeedComponent;
}());



/***/ }),

/***/ "./src/app/news-feed/news-service.service.ts":
/*!***************************************************!*\
  !*** ./src/app/news-feed/news-service.service.ts ***!
  \***************************************************/
/*! exports provided: NewsServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsServiceService", function() { return NewsServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewsServiceService = /** @class */ (function () {
    function NewsServiceService() {
        this.newsUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * returns NewsItem[]
     */
    NewsServiceService.prototype.requestNews = function () {
        console.log('requesting news');
        return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/news')
            .then(function (response) {
            console.log('received news');
            return response.data;
        })
            .catch(function (error) {
            console.log(error);
            return [];
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NewsServiceService.prototype, "newsUpdate", void 0);
    NewsServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], NewsServiceService);
    return NewsServiceService;
}());



/***/ }),

/***/ "./src/app/news-feed/ticker/ticker.component.css":
/*!*******************************************************!*\
  !*** ./src/app/news-feed/ticker/ticker.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ticker{\r\n    display: flex;\r\n    flex-direction: row;\r\n    border: 1px solid black;\r\n    height: 100%;\r\n    \r\n}\r\n\r\n.ticker-item{\r\n    cursor: pointer;\r\n    border: 1px solid red;\r\n    min-width: -webkit-min-content;\r\n    min-width: -moz-min-content;\r\n    min-width: min-content;\r\n}\r\n\r\n.ticker-item:hover{\r\n    border: 1px dotted black;\r\n}"

/***/ }),

/***/ "./src/app/news-feed/ticker/ticker.component.html":
/*!********************************************************!*\
  !*** ./src/app/news-feed/ticker/ticker.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  - represents a list of news items, viewed in \"detail level: short description\"\n  - Single line of text, transitioning from one news item to the next. endlessly looping\n  \n-->\n\n<div class=\"ticker\">\n  \n      <div *ngFor=\"let item of news; let i = index\" \n        class=\"ticker-item\"\n        (click)=\"tickerItemClicked(item)\"\n      >\n      <app-details-short \n        [news]=item \n        [totalNewsCount]=news.length\n      ></app-details-short>\n\n      <!--\n        <span class=\"badge\">({{i+1}}/{{news.length}}) {{item.title}}</span> {{item.shortDescription}} <span *ngIf=\"i<news.length - 1\"></span>\n        -->\n        </div>\n  <!--\n  <span>(2/3) [TITLE] Lorem ipsum dolor sit amet.</span> --- \n  <span>(1/3) [TITLE] Lorem ipsum dolor sit amet, consetetur sadipscing elitr</span> --- \n  <span>(3/3) [TITLE] Lorem ipsum ...</span>\n  -->\n</div>"

/***/ }),

/***/ "./src/app/news-feed/ticker/ticker.component.ts":
/*!******************************************************!*\
  !*** ./src/app/news-feed/ticker/ticker.component.ts ***!
  \******************************************************/
/*! exports provided: TickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TickerComponent", function() { return TickerComponent; });
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

var TickerComponent = /** @class */ (function () {
    function TickerComponent() {
        this.itemClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    TickerComponent.prototype.ngOnInit = function () {
    };
    TickerComponent.prototype.ngOnChanges = function (changes) {
        // console.log(changes);
        // console.log(this.news);
    };
    TickerComponent.prototype.tickerItemClicked = function (item) {
        // console.log('ticker item clicked: ' + item.title);
        this.itemClicked.emit(item);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], TickerComponent.prototype, "news", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], TickerComponent.prototype, "itemClicked", void 0);
    TickerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ticker',
            template: __webpack_require__(/*! ./ticker.component.html */ "./src/app/news-feed/ticker/ticker.component.html"),
            styles: [__webpack_require__(/*! ./ticker.component.css */ "./src/app/news-feed/ticker/ticker.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TickerComponent);
    return TickerComponent;
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\_coding\angular\news-feed\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map