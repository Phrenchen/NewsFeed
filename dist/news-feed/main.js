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

module.exports = "body{\r\n    padding: 0;\r\n    margin: 0;\r\n    border: 0;\r\n    overflow: hidden;\r\n}\r\n\r\n\r\n.app-head{\r\n    text-align: center;\r\n}\r\n\r\n\r\n#container{\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-head\">\r\n  <h1>nonsense with lists of things</h1>\r\n  <p></p>\r\n</div>\r\n\r\n  <div id=\"container\">\r\n    <div id=\"hudBar\" class=\"hudBar\">\r\n    </div>\r\n    <app-context-menu\r\n      (actionSelected)=\"contextActionSelected($event)\"\r\n    ></app-context-menu>\r\n    \r\n    <!-- <app-action-bar id=\"action-bar\"\r\n      (actionSelected)=\"onActionSelected($event)\"\r\n    ></app-action-bar> -->\r\n    \r\n    <app-news-feed id=\"news-feed\"></app-news-feed>\r\n\r\n    <app-image-card-list id=\"image-card-list\"\r\n    [images]=\"images\"\r\n    (imageSelected)=\"componentSelected($event)\"\r\n    ></app-image-card-list>\r\n\r\n  </div>\r\n\r\n          <!-- <app-ticker></app-ticker> -->\r\n "

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
/* harmony import */ var _news_feed_services_news_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./news-feed/services/news.service */ "./src/app/news-feed/services/news.service.ts");
/* harmony import */ var _news_feed_services_photo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./news-feed/services/photo.service */ "./src/app/news-feed/services/photo.service.ts");
/* harmony import */ var _context_menu_ContextMenuConsts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context-menu/ContextMenuConsts */ "./src/app/context-menu/ContextMenuConsts.ts");
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
    function AppComponent(newsService, imageService) {
        // enableProdMode();
        var _this = this;
        this.newsService = newsService;
        this.imageService = imageService;
        this.imageCount = 30;
        this.title = 'news-feed';
        // tagName is passed to context menu ('app-details-short', 'app-details-long',...)
        this.selectedTarget = {
            tagName: '',
            action: '',
            component: null
        };
        this.getImages = function () {
            _this.imageService.requestImages(_this.imageCount)
                .then(function (result) {
                _this.images = result.slice(0, _this.imageCount);
            });
        };
        setTimeout(this.getImages, 1000);
        // this.getImages();
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.contextActionSelected = function (action) {
        console.log('on action selected: ' + action);
        switch (action) {
            case _context_menu_ContextMenuConsts__WEBPACK_IMPORTED_MODULE_3__["default"].ACTION_DELETE:
            case _context_menu_ContextMenuConsts__WEBPACK_IMPORTED_MODULE_3__["default"].ACTION_CLONE:
            case _context_menu_ContextMenuConsts__WEBPACK_IMPORTED_MODULE_3__["default"].ACTION_MARK:
                console.log('context action selected: ' + action);
                this.selectedTarget.action = action;
                break;
            default: console.log('undefined action: ' + action);
        }
        console.log(this.selectedTarget);
    };
    AppComponent.prototype.componentSelected = function (comp) {
        console.log(comp);
        this.target = comp;
    };
    Object.defineProperty(AppComponent.prototype, "target", {
        set: function (targetComponent) {
            this.selectedTarget.component = targetComponent;
            console.log(this.selectedTarget);
        },
        enumerable: true,
        configurable: true
    });
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_news_feed_services_news_service__WEBPACK_IMPORTED_MODULE_1__["NewsService"],
            _news_feed_services_photo_service__WEBPACK_IMPORTED_MODULE_2__["ImageService"]])
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
/* harmony import */ var _news_feed_services_news_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./news-feed/services/news.service */ "./src/app/news-feed/services/news.service.ts");
/* harmony import */ var _news_feed_services_photo_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./news-feed/services/photo.service */ "./src/app/news-feed/services/photo.service.ts");
/* harmony import */ var _image_card_image_card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./image-card/image-card.component */ "./src/app/image-card/image-card.component.ts");
/* harmony import */ var _image_card_list_image_card_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./image-card-list/image-card-list.component */ "./src/app/image-card-list/image-card-list.component.ts");
/* harmony import */ var _context_menu_context_menu_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./context-menu/context-menu.component */ "./src/app/context-menu/context-menu.component.ts");
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
                _news_feed_action_bar_action_bar_component__WEBPACK_IMPORTED_MODULE_10__["ActionBarComponent"],
                _image_card_image_card_component__WEBPACK_IMPORTED_MODULE_13__["ImageCardComponent"],
                _image_card_list_image_card_list_component__WEBPACK_IMPORTED_MODULE_14__["ImageCardListComponent"],
                _context_menu_context_menu_component__WEBPACK_IMPORTED_MODULE_15__["ContextMenuComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [_news_feed_services_news_service__WEBPACK_IMPORTED_MODULE_11__["NewsService"], _news_feed_services_photo_service__WEBPACK_IMPORTED_MODULE_12__["ImageService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/context-menu/ContextMenuConsts.ts":
/*!***************************************************!*\
  !*** ./src/app/context-menu/ContextMenuConsts.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var ContextMenuConsts = /** @class */ (function () {
    function ContextMenuConsts() {
    }
    ContextMenuConsts.ACTION_DELETE = 'delete';
    ContextMenuConsts.ACTION_MARK = 'mark';
    ContextMenuConsts.ACTION_CLONE = 'clone';
    return ContextMenuConsts;
}());
/* harmony default export */ __webpack_exports__["default"] = (ContextMenuConsts);


/***/ }),

/***/ "./src/app/context-menu/context-menu.component.css":
/*!*********************************************************!*\
  !*** ./src/app/context-menu/context-menu.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".actionmenu_grid{\r\n    display: -ms-grid;\r\n    display: grid;\r\n    position: absolute;\r\n    text-decoration:none;\r\n\r\n    -ms-grid-columns:  1fr 1fr 1fr 1fr;\r\n\r\n        grid-template-columns:  1fr 1fr 1fr 1fr;\r\n    -ms-grid-rows: min-content auto min-content;\r\n        grid-template-rows: -webkit-min-content auto -webkit-min-content;\r\n        grid-template-rows: min-content auto min-content;\r\n    border: 1px solid red;\r\n    \r\n    max-width: 300px;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n\r\n    grid-gap: 10px 20px;\r\n    user-select: none;\r\n}\r\n\r\n\r\n.actionmenu_button{\r\n    padding: 5px;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\nbutton:hover{\r\n    color: #ff0000;\r\n}\r\n\r\n\r\n.actionmenu_button_delete{\r\n    -ms-grid-column: 1;\r\n    -ms-grid-column-span: 2;\r\n    grid-column: 1 / 3;\r\n    -ms-grid-row: 1;\r\n    -ms-grid-row-span: 1;\r\n    grid-row: 1 / 2;\r\n}\r\n\r\n\r\n.actionmenu_button_clone{\r\n    -ms-grid-column: 3;\r\n    -ms-grid-column-span: 2;\r\n    grid-column: 3 / 5;\r\n    -ms-grid-row: 1;\r\n    -ms-grid-row-span: 1;\r\n    grid-row: 1 / 2;\r\n}\r\n\r\n\r\n.actionmenu_button_mark{\r\n    -ms-grid-column: 2;\r\n    -ms-grid-column-span: 2;\r\n    grid-column: 2 / 4;\r\n    -ms-grid-row: 3;\r\n    -ms-grid-row-span: 1;\r\n    grid-row: 3 / 4;\r\n}   "

/***/ }),

/***/ "./src/app/context-menu/context-menu.component.html":
/*!**********************************************************!*\
  !*** ./src/app/context-menu/context-menu.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"actionmenu_grid\" id=\"actionmenu\">\n  <button *ngIf=\"isActionEnabled('delete')\"\n    id='action-delete'\n    class=\"actionmenu_button actionmenu_button_delete\">\n      delete image\n  </button>\n  <button *ngIf=\"isActionEnabled('clone')\"\n    id='action-clone'\n    class=\"actionmenu_button actionmenu_button_clone\">\n      clone it!\n  </button>\n  <button *ngIf=\"isActionEnabled('mark')\"\n    id='action-mark'\n    class=\"actionmenu_button actionmenu_button_mark\">\n      mark\n  </button>\n</div>"

/***/ }),

/***/ "./src/app/context-menu/context-menu.component.ts":
/*!********************************************************!*\
  !*** ./src/app/context-menu/context-menu.component.ts ***!
  \********************************************************/
/*! exports provided: ContextMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextMenuComponent", function() { return ContextMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ContextMenuConsts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContextMenuConsts */ "./src/app/context-menu/ContextMenuConsts.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TARGET_DETAILS_SHORT = 'app-details-short';
var TARGET_DETAILS_LONG = 'app-details-long';
var TARGET_DETAILS_TEASER = 'app-details-teaser';
var TARGET_IMAGE_CARD = 'app-image-card';
var ContextMenuComponent = /** @class */ (function () {
    function ContextMenuComponent() {
        this.actionSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.actions = [
            {
                action: _ContextMenuConsts__WEBPACK_IMPORTED_MODULE_1__["default"].ACTION_DELETE,
                validTargets: [TARGET_DETAILS_SHORT, TARGET_DETAILS_LONG, TARGET_DETAILS_TEASER, TARGET_IMAGE_CARD]
            },
            {
                action: _ContextMenuConsts__WEBPACK_IMPORTED_MODULE_1__["default"].ACTION_CLONE,
                validTargets: []
            },
            {
                action: _ContextMenuConsts__WEBPACK_IMPORTED_MODULE_1__["default"].ACTION_MARK,
                validTargets: []
            }
        ];
        this.showDelay = 660; // delay from mouseDown to showMenu
    }
    ContextMenuComponent.prototype.ngOnInit = function () {
    };
    // called by view
    ContextMenuComponent.prototype.isActionEnabled = function (actionName) {
        if (!this.isValidAction(actionName)) {
            return false;
        }
        var show = false;
        switch (actionName) {
            case _ContextMenuConsts__WEBPACK_IMPORTED_MODULE_1__["default"].ACTION_DELETE:
                show = this.actions.find(function (action) { return action.action === actionName; }).validTargets.includes(_ContextMenuConsts__WEBPACK_IMPORTED_MODULE_1__["default"].ACTION_DELETE);
                break;
            default: show = true;
        }
        return show;
    };
    ContextMenuComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (document.querySelector('#action-delete')) {
            document.querySelector('#action-delete').addEventListener('mouseup', function (e) {
                console.log('selected action: delete');
                _this.actionSelected.emit('delete');
            });
        }
        if (document.querySelector('#action-clone')) {
            document.querySelector('#action-clone').addEventListener('mouseup', function (e) {
                console.log('selected action: clone');
                _this.actionSelected.emit('clone');
            });
        }
        if (document.querySelector('#action-mark')) {
            document.querySelector('#action-mark').addEventListener('mouseup', function (e) {
                console.log('selected action: mark');
                _this.actionSelected.emit('mark');
            });
        }
        window.onmousedown = function (e) {
            if (_this.isNoMenuButton(e.target)) {
                // show menu after a small delay, enabling 'normal-duration-mouse-downs' to count as clicks
                _this.updateActionMenuPosition(e.clientX, e.clientY);
                _this.toggleMenu();
            }
        };
        window.onmouseup = function (e) {
            _this.cancelDelayedMenu();
        };
        window.onmousemove = function (e) {
            if (_this.menu.style.display === 'none') {
                _this.updateActionMenuPosition(e.clientX, e.clientY);
            }
        };
        this.showMenu(false); // initially hide menu
    };
    ContextMenuComponent.prototype.isNoMenuButton = function (candidate) {
        return candidate !== document.querySelector('#action-delete') &&
            candidate !== document.querySelector('#action-clone') &&
            candidate !== document.querySelector('#action-mark');
    };
    ContextMenuComponent.prototype.cancelDelayedMenu = function () {
        clearTimeout(this.showDelayTimeout);
        this.showDelayTimeout = -1;
        // this.showmenu(false);
    };
    ContextMenuComponent.prototype.showMenuDelayed = function (show) {
        // toggle buttons depending on target type.
        var _this = this;
        // show menu after a small delay, enabling 'normal-duration-mouse-downs' to count as clicks
        // save timeoutId to cancel the call onMouseUp
        this.showDelayTimeout = setTimeout(function () {
            _this.showDelayTimeout = -1;
            _this.showMenu(show);
        }, this.showDelay);
    };
    ContextMenuComponent.prototype.isValidAction = function (action) {
        return this.actions.find(function (a) { return a.action === action; }) !== null;
    };
    Object.defineProperty(ContextMenuComponent.prototype, "menu", {
        get: function () {
            return document.querySelector('#actionmenu');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContextMenuComponent.prototype, "isMenuDisplayed", {
        get: function () {
            return this.menu.style.display === 'grid';
        },
        enumerable: true,
        configurable: true
    });
    ContextMenuComponent.prototype.toggleMenu = function () {
        if (this.isMenuDisplayed) {
            this.showMenu(false);
        }
        else {
            this.showMenuDelayed(true);
        }
    };
    ContextMenuComponent.prototype.showMenu = function (mouseIsDown) {
        if (this.menu) {
            this.menu.style.display = mouseIsDown ? 'grid' : 'none';
        }
    };
    ContextMenuComponent.prototype.updateActionMenuPosition = function (x, y) {
        if (this.menu) {
            var xOffset = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
            var yOffset = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
            var gapToMouseX = 10;
            var gapToMouseY = 10;
            var finalX = (x - this.menu.offsetWidth * .5) + xOffset + gapToMouseX;
            var finalY = (y - this.menu.offsetHeight * .5) + yOffset + gapToMouseY;
            this.menu.style.left = finalX + 'px';
            this.menu.style.top = finalY + 'px';
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ContextMenuComponent.prototype, "actionSelected", void 0);
    ContextMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-context-menu',
            template: __webpack_require__(/*! ./context-menu.component.html */ "./src/app/context-menu/context-menu.component.html"),
            styles: [__webpack_require__(/*! ./context-menu.component.css */ "./src/app/context-menu/context-menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContextMenuComponent);
    return ContextMenuComponent;
}());



/***/ }),

/***/ "./src/app/image-card-list/image-card-list.component.css":
/*!***************************************************************!*\
  !*** ./src/app/image-card-list/image-card-list.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image-list-grid{\r\n    display: -ms-grid;\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\r\n    grid-gap: 5px;\r\n    width: 100%;\r\n    \r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/image-card-list/image-card-list.component.html":
/*!****************************************************************!*\
  !*** ./src/app/image-card-list/image-card-list.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"image-list-grid\">\r\n  <div  *ngFor=\"let image of images; index as i\">\r\n    <!-- <app-image-card *ngIf=\"i < imagesPerPage\" -->\r\n    <app-image-card \r\n        [image]=\"image\"\r\n        (selected)=\"cardSeleced($event)\"\r\n      >\r\n    </app-image-card>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/image-card-list/image-card-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/image-card-list/image-card-list.component.ts ***!
  \**************************************************************/
/*! exports provided: ImageCardListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageCardListComponent", function() { return ImageCardListComponent; });
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

var ImageCardListComponent = /** @class */ (function () {
    function ImageCardListComponent() {
        this.images = [];
        this.imageSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.imagesPerPage = 4;
    }
    ImageCardListComponent.prototype.ngOnInit = function () {
        if (!this.images) {
            return;
        }
        console.log('image count: ' + this.images.length);
    };
    ImageCardListComponent.prototype.cardSeleced = function (comp) {
        console.log(comp);
        this.imageSelected.emit(comp);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ImageCardListComponent.prototype, "images", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ImageCardListComponent.prototype, "imageSelected", void 0);
    ImageCardListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-image-card-list',
            template: __webpack_require__(/*! ./image-card-list.component.html */ "./src/app/image-card-list/image-card-list.component.html"),
            styles: [__webpack_require__(/*! ./image-card-list.component.css */ "./src/app/image-card-list/image-card-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ImageCardListComponent);
    return ImageCardListComponent;
}());



/***/ }),

/***/ "./src/app/image-card/image-card.component.css":
/*!*****************************************************!*\
  !*** ./src/app/image-card/image-card.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image-card-grid{\r\n    border: 1px solid lightblue;\r\n}\r\n\r\nh1 {\r\n    font-size: 1em;\r\n}\r\n\r\nimg{\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n}"

/***/ }),

/***/ "./src/app/image-card/image-card.component.html":
/*!******************************************************!*\
  !*** ./src/app/image-card/image-card.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"{{'card_' + image.id}}\" class=\"image-card-grid\">\r\n  <h1>{{image.title}}</h1>\r\n  <!-- <a href=\"{{image.url}}\"> -->\r\n    <img draggable=\"false\" src=\"{{image.thumbnailUrl}}\" alt=\"600px x 600px\" />\r\n  <!-- </a> -->\r\n</div>"

/***/ }),

/***/ "./src/app/image-card/image-card.component.ts":
/*!****************************************************!*\
  !*** ./src/app/image-card/image-card.component.ts ***!
  \****************************************************/
/*! exports provided: ImageCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageCardComponent", function() { return ImageCardComponent; });
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

var ImageCardComponent = /** @class */ (function () {
    function ImageCardComponent() {
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ImageCardComponent.prototype.ngOnInit = function () {
    };
    ImageCardComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        document.querySelector('#card_' + this.image.id).addEventListener('click', function (e) {
            console.log(_this);
            _this.selected.emit(_this);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ImageCardComponent.prototype, "image", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ImageCardComponent.prototype, "selected", void 0);
    ImageCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-image-card',
            template: __webpack_require__(/*! ./image-card.component.html */ "./src/app/image-card/image-card.component.html"),
            styles: [__webpack_require__(/*! ./image-card.component.css */ "./src/app/image-card/image-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ImageCardComponent);
    return ImageCardComponent;
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

module.exports = "<!--\n  static \"default\" menu bar\n-->\n\n<div class=\"action-bar\">\n  <button (click)=\"onAddNews()\">add news</button>\n  <button (click)=\"onDeleteNews()\">delete selected news</button>\n</div>"

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
/* harmony import */ var _model_NewsFeedConsts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/NewsFeedConsts */ "./src/app/news-feed/model/NewsFeedConsts.ts");
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
        this.actionSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ActionBarComponent.prototype.ngOnInit = function () {
    };
    ActionBarComponent.prototype.onAddNews = function () {
        console.log('onAddNews');
        this.actionSelected.emit(_model_NewsFeedConsts__WEBPACK_IMPORTED_MODULE_1__["NewsFeedConsts"].ADD_NEWS);
    };
    ActionBarComponent.prototype.onDeleteNews = function () {
        console.log('onDeleteNews');
        this.actionSelected.emit(_model_NewsFeedConsts__WEBPACK_IMPORTED_MODULE_1__["NewsFeedConsts"].DELETE_ALL_NEWS);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ActionBarComponent.prototype, "actionSelected", void 0);
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

module.exports = "#long-stuff{\r\n    border: 1px solid black;\r\n    margin-right: 10px;\r\n    padding: 5px 5px 5px 5px;\r\n}\r\n\r\nimg{\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n}"

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

module.exports = ".details-short{\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    height: 100%;\r\n    cursor: pointer;\r\n    border: 1px solid rgba(0, 0, 0, 0);\r\n    min-width: -webkit-min-content;\r\n    min-width: -moz-min-content;\r\n    min-width: min-content;\r\n}\r\n\r\n.title{\r\n    font-style: oblique;\r\n}\r\n\r\nspan{\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n}\r\n\r\n.details-short:hover{\r\n    color: darkgrey;\r\n}"

/***/ }),

/***/ "./src/app/news-feed/detail-level/details-short/details-short.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/news-feed/detail-level/details-short/details-short.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  - title + short description in 1 line\n-->\n\n<button>\n  <div clasS=\"details-short\">\n      <span class=\"title\" id=\"title_{{news.id}}\"> short: {{news.title}} - </span>\n    <span id='shortDescription_{{news.id}}'></span>\n  </div>\n</button>"

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

module.exports = ".card{\r\n    border: 1px solid black;\r\n    width: auto;\r\n    cursor: pointer;\r\n    max-width: 120px;\r\n    padding: 5px 5px 5px 5px;\r\n}\r\n\r\n.teaser-thumbnail{\r\n    max-width: 100px;\r\n}\r\n\r\nimg{\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n}"

/***/ }),

/***/ "./src/app/news-feed/detail-level/details-teaser/details-teaser.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/news-feed/detail-level/details-teaser/details-teaser.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  - card\n  - title + thumbnail short description\n  - click on teaser -> show long version\n-->\n<div class=\"card\"\n  (click)=\"onTeaserClick()\"\n>\n  <img class=\"teaser-thumbnail\" *ngIf=\"hasThumbnail\" src={{thumbnail}} alt=\"Avatar\" style=\"width:100%\" draggable=\"false\">\n  <div class=\"container\">\n    <h4>{{title}}</h4> \n  </div>\n</div>"

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

/***/ "./src/app/news-feed/model/NewsFeedConsts.ts":
/*!***************************************************!*\
  !*** ./src/app/news-feed/model/NewsFeedConsts.ts ***!
  \***************************************************/
/*! exports provided: NewsFeedConsts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsFeedConsts", function() { return NewsFeedConsts; });
var NewsFeedConsts = /** @class */ (function () {
    function NewsFeedConsts() {
    }
    NewsFeedConsts.ADD_NEWS = 'ADD_NEWS';
    NewsFeedConsts.DELETE_ALL_NEWS = 'DELETE_ALL_NEWS';
    return NewsFeedConsts;
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

module.exports = "<div class=\"news-feed\">\n  <!-- <app-favourite-bubble \n    class=\"hud-icon-favourite-bubble\"\n    [counter]=\"getUnreadFavouriteCount()\"\n  ></app-favourite-bubble> -->\n  <!-- <app-feed-bubble \n    class=\"hud-icon-feed-bubble\"\n    [counter]=\"getUnreadNewsCount()\"\n  ></app-feed-bubble> -->\n  <app-ticker \n    class=\"hud-icon-ticker\"\n    [news]=\"news\"\n    (itemClicked)=\"onTickerItemClick($event)\"\n  ></app-ticker>\n\n</div>\n\n<!-- <app-details-teaser class=\"selected-item-details\" *ngIf=\"hasSelectedItem\"\n  [news]=selectedItem\n  (teaserClicked)=\"onTeaserClick($event)\">\n</app-details-teaser> -->\n\n<app-details-long *ngIf=\"showLongVersion\"\n  [news]=\"selectedItem\"\n></app-details-long>\n\n<!--\n<app-news-item class=\"selected-item-details\" *ngIf=\"hasSelectedItem()\"\n  [item]=\"selectedItem\"\n></app-news-item>\n-->"

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
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/news.service */ "./src/app/news-feed/services/news.service.ts");
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
        this.getNews();
    }
    NewsFeedComponent.prototype.ngOnInit = function () {
    };
    NewsFeedComponent.prototype.getNews = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.newsService.requestNews()];
                    case 1:
                        response = _a.sent();
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
    };
    Object.defineProperty(NewsFeedComponent.prototype, "showLongVersion", {
        get: function () {
            // return this.isLongVersionRequested;
            return this.hasSelectedItem;
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
        })
        /**
         * component gets it´s own data...good idea? pass it in. <- TODO!
         */
        ,
        __metadata("design:paramtypes", [_services_news_service__WEBPACK_IMPORTED_MODULE_1__["NewsService"]])
    ], NewsFeedComponent);
    return NewsFeedComponent;
}());



/***/ }),

/***/ "./src/app/news-feed/services/news.service.ts":
/*!****************************************************!*\
  !*** ./src/app/news-feed/services/news.service.ts ***!
  \****************************************************/
/*! exports provided: NewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsService", function() { return NewsService; });
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


var NewsService = /** @class */ (function () {
    function NewsService() {
    }
    NewsService_1 = NewsService;
    NewsService.getEndPointBase = function () {
        return (location.hostname === 'localhost' || location.hostname === '127.0.0.1')
            ? 'http://localhost:8080/api/'
            : 'api/';
    };
    /**
     * returns NewsItem[]
     */
    NewsService.prototype.requestNews = function () {
        var endpoint = NewsService_1.getEndPointBase() + NewsService_1.NEWS;
        return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(endpoint)
            .then(function (response) {
            return response.data;
        })
            .catch(function (error) {
            console.log('error: ' + error);
            return [];
        });
    };
    NewsService.prototype.addNews = function (title, shortDescription) {
        var endpoint = NewsService_1.getEndPointBase() + NewsService_1.NEWS;
        var newsItem = this.createNewsItem(title, shortDescription);
        axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(endpoint, newsItem)
            .then(function (response) {
            console.log('response after creating news: ' + response);
            return response;
        })
            .catch(function (error) {
            console.log(error);
            return [];
        });
    };
    NewsService.prototype.createNewsItem = function (title, shortDescription) {
        return {
            id: -1,
            isRead: false,
            isFavourite: false,
            // content meta
            dateCreated: null,
            dateUpdated: null,
            dateStart: null,
            dateEnd: null,
            dateRead: null,
            seoDescription: '',
            sortOrder: '-1',
            // content
            title: title,
            shortDescription: shortDescription,
            longDescription: 'loooong: ' + shortDescription,
            thumbnail: null
        };
    };
    var NewsService_1;
    NewsService.NEWS = 'news';
    NewsService = NewsService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], NewsService);
    return NewsService;
}());



/***/ }),

/***/ "./src/app/news-feed/services/photo.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/news-feed/services/photo.service.ts ***!
  \*****************************************************/
/*! exports provided: ImageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageService", function() { return ImageService; });
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

var ImageService = /** @class */ (function () {
    function ImageService() {
    }
    ImageService.prototype.requestImages = function (imageCount) {
        return fetch('https://jsonplaceholder.typicode.com/photos/')
            .then(function (response) { return response.json(); })
            .then(function (json) {
            return json;
        });
    };
    ImageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ImageService);
    return ImageService;
}());



/***/ }),

/***/ "./src/app/news-feed/ticker/ticker.component.css":
/*!*******************************************************!*\
  !*** ./src/app/news-feed/ticker/ticker.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ticker{\r\n    display: flex;\r\n    flex-direction: row;\r\n    /* border: 1px solid black; */\r\n    height: 100%;\r\n}"

/***/ }),

/***/ "./src/app/news-feed/ticker/ticker.component.html":
/*!********************************************************!*\
  !*** ./src/app/news-feed/ticker/ticker.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  - represents a list of news items, viewed in \"detail level: short description\"\n  - Single line of text, transitioning from one news item to the next. endlessly looping\n  \n-->\n\n<div class=\"ticker\">\n  \n  <div *ngFor=\"let item of news; let i = index\" \n  class=\"ticker-item\"\n  (click)=\"tickerItemClicked(item)\"\n  >\n  <!-- <app-details-short \n    [news]=item \n    [totalNewsCount]=news.length\n    ></app-details-short> -->\n    \n    <button>\n        <app-details-teaser\n          [news]=item \n        >\n        \n      </app-details-teaser>\n    </button>\n\n      <!--\n        <span class=\"badge\">({{i+1}}/{{news.length}}) {{item.title}}</span> {{item.shortDescription}} <span *ngIf=\"i<news.length - 1\"></span>\n        -->\n        </div>\n  <!--\n  <span>(2/3) [TITLE] Lorem ipsum dolor sit amet.</span> --- \n  <span>(1/3) [TITLE] Lorem ipsum dolor sit amet, consetetur sadipscing elitr</span> --- \n  <span>(3/3) [TITLE] Lorem ipsum ...</span>\n  -->\n</div>"

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

module.exports = __webpack_require__(/*! E:\_coding\angular\news-feed\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map