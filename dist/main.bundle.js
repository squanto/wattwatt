webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-main-container></app-main-container>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
        this.myParams = {};
        this.width = 100;
        this.height = 100;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_container_main_container_component__ = __webpack_require__("../../../../../src/app/main-container/main-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__team_team_component__ = __webpack_require__("../../../../../src/app/team/team.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nav_nav_component__ = __webpack_require__("../../../../../src/app/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__radar_radar_component__ = __webpack_require__("../../../../../src/app/radar/radar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_particle__ = __webpack_require__("../../../../angular-particle/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ea_crumb_ea_crumb_component__ = __webpack_require__("../../../../../src/app/ea-crumb/ea-crumb.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ea_about_ea_about_component__ = __webpack_require__("../../../../../src/app/ea-about/ea-about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ea_card_ea_card_component__ = __webpack_require__("../../../../../src/app/ea-card/ea-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ea_services_ea_services_component__ = __webpack_require__("../../../../../src/app/ea-services/ea-services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ea_industries_ea_industries_component__ = __webpack_require__("../../../../../src/app/ea-industries/ea-industries.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ea_open_ea_open_component__ = __webpack_require__("../../../../../src/app/ea-open/ea-open.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__main_container_main_container_component__["a" /* MainContainerComponent */],
            __WEBPACK_IMPORTED_MODULE_4__team_team_component__["a" /* TeamComponent */],
            __WEBPACK_IMPORTED_MODULE_5__nav_nav_component__["a" /* NavComponent */],
            __WEBPACK_IMPORTED_MODULE_6__radar_radar_component__["a" /* RadarComponent */],
            __WEBPACK_IMPORTED_MODULE_8__ea_crumb_ea_crumb_component__["a" /* EaCrumbComponent */],
            __WEBPACK_IMPORTED_MODULE_9__ea_about_ea_about_component__["a" /* EaAboutComponent */],
            __WEBPACK_IMPORTED_MODULE_10__ea_card_ea_card_component__["a" /* EaCardComponent */],
            __WEBPACK_IMPORTED_MODULE_11__ea_services_ea_services_component__["a" /* EaServicesComponent */],
            __WEBPACK_IMPORTED_MODULE_12__ea_industries_ea_industries_component__["a" /* EaIndustriesComponent */],
            __WEBPACK_IMPORTED_MODULE_13__ea_open_ea_open_component__["a" /* EaOpenComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_7_angular_particle__["a" /* ParticlesModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/ea-about/ea-about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ea-about/ea-about.component.html":
/***/ (function(module, exports) {

module.exports = "<main class=\"benefit-cards\">\n  <div class=\"card\" style=\" flex-direction: column;display: flex; justify-content: center;\" >\n      <img style=\"width: 10rem;\" alt=\"\" src=\"../assets/images/model.svg\">\n\n      <label for=\"main1\">One Model</label>\n      <main id=\"main1\">\n        <h2>Everything organized</h2>\n      </main>\n    </div>\n    <div class=\"card\" >\n      <img alt=\"\" src=\"../assets/images/model.svg\">\n    </div>\n    <div class=\"card\" >\n      <img alt=\"\" src=\"../assets/images/model.svg\">\n    </div>\n</main>\n"

/***/ }),

/***/ "../../../../../src/app/ea-about/ea-about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EaAboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EaAboutComponent = (function () {
    function EaAboutComponent() {
    }
    EaAboutComponent.prototype.ngOnInit = function () {
    };
    return EaAboutComponent;
}());
EaAboutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-ea-about',
        template: __webpack_require__("../../../../../src/app/ea-about/ea-about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ea-about/ea-about.component.css")]
    }),
    __metadata("design:paramtypes", [])
], EaAboutComponent);

//# sourceMappingURL=ea-about.component.js.map

/***/ }),

/***/ "../../../../../src/app/ea-card/ea-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".management,\n.directors,\n.advisors {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n-ms-flex-wrap: wrap;\n    flex-wrap: wrap;\n-webkit-box-pack: center;\n    -ms-flex-pack: center;\n        justify-content: center;\nmargin-bottom: 4rem;\n}\n\n.card {\n  margin-right: 2rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.team {\n  padding: 4rem 0 4rem 0;\n}\n\n.headshot {\n  width: 8rem;\n}\n\n.linkedIn {\nwidth: 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ea-card/ea-card.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"team\">\n  <div class=\"management\">\n    <div id=\"management\" class=\"card\" *ngFor=\"let person of team\">\n      <img class=\"headshot\"  alt=\"\" src=\"../assets/images/{{person.image}}\">\n      <label for=\"main1\">{{person.title}}</label>\n      <main id=\"main1\">\n        <h2>{{person.bio}}</h2>\n      </main>\n      <a href=\"\">\n        <img src=\"../../assets/images/{{person.link}}.svg\" alt=\"\">\n        <img class=\"linkedIn\" src=\"../../assets/images/{{person.linked}}\" alt=\"\">\n\n      </a>\n    </div>\n  </div>\n\n  <div class=\"directors\">\n    <div id=\"directors\" class=\"card\" *ngFor=\"let person of directors\">\n      <img class=\"headshot\"  alt=\"\" src=\"../assets/images/{{person.image}}\">\n      <label for=\"main1\">{{person.title}}</label>\n      <main id=\"main1\">\n        <h2>{{person.bio}}</h2>\n      </main>\n      <a href=\"\">\n        <img src=\"../../assets/images/{{person.link}}.svg\" alt=\"\">\n        <img class=\"linkedIn\" src=\"../../assets/images/{{person.linked}}\" alt=\"\">\n      </a>\n    </div>\n  </div>\n\n  <div class=\"advisors\">\n    <div id=\"advisors\" class=\"card\" *ngFor=\"let person of advisors\">\n      <img class=\"headshot\" alt=\"\" src=\"../assets/images/{{person.image}}\">\n      <label for=\"main1\">{{person.title}}</label>\n      <main id=\"main1\">\n        <h2>{{person.bio}}</h2>\n      </main>\n      <a href=\"\">\n        <img src=\"../../assets/images/{{person.link}}.svg\" alt=\"\">\n        <img class=\"linkedIn\" src=\"../../assets/images/{{person.linked}}\" alt=\"\">\n      </a>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/ea-card/ea-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EaCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EaCardComponent = (function () {
    function EaCardComponent() {
        this.team = [
            {
                image: 'will.png',
                title: 'William Dyess',
                bio: 'CEO',
                linked: 'linkedin.png'
            },
            {
                image: 'sebastian.png',
                title: 'Sebastian Kropp',
                bio: 'CTO',
                linked: 'linkedin.png'
            },
            {
                image: 'des.png',
                title: 'Desiree Ponti',
                bio: 'COO',
                linked: 'linkedin.png'
            }
        ];
        this.directors = [
            {
                image: 'bill.png',
                title: 'Bill Longbrake',
                bio: 'CEO',
                linked: 'linkedin.png'
            },
            {
                image: 'mark.png',
                title: 'Mark Mazak',
                bio: 'CTO',
                linked: 'linkedin.png'
            }
        ];
        this.advisors = [
            {
                image: 'kenyon.png',
                title: 'Dept. Director of CHIDS',
                bio: 'Kenyon Crowley',
                linked: 'linkedin.png'
            },
            {
                image: 'paul.png',
                title: 'EY 2012 Entrep. of the Year',
                bio: 'Paul Capriolo',
                linked: 'linkedin.png'
            },
            {
                image: '',
                title: 'President of ECB Group',
                bio: 'Jean Assuncao',
                linked: 'linkedin.png'
            },
            {
                image: 'alejandro.png',
                title: 'Healthcare Entrepreneur',
                bio: 'Alejandro Roman',
                linked: 'linkedin.png'
            },
            {
                image: 'les.png',
                title: 'CEO of Healthcare Council',
                bio: 'Les Pitton',
                linked: 'linkedin.png'
            },
            {
                image: 'mike.png',
                title: 'Chrm. of Healthcare Council',
                bio: 'Mike Barch',
                linked: 'linkedin.png'
            }
        ];
    }
    EaCardComponent.prototype.ngOnInit = function () {
    };
    return EaCardComponent;
}());
EaCardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ea-card',
        template: __webpack_require__("../../../../../src/app/ea-card/ea-card.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ea-card/ea-card.component.css")]
    }),
    __metadata("design:paramtypes", [])
], EaCardComponent);

//# sourceMappingURL=ea-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/ea-crumb/ea-crumb.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ea-crumb/ea-crumb.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  ea-crumb works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/ea-crumb/ea-crumb.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EaCrumbComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EaCrumbComponent = (function () {
    function EaCrumbComponent() {
    }
    EaCrumbComponent.prototype.ngOnInit = function () {
    };
    return EaCrumbComponent;
}());
EaCrumbComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-ea-crumb',
        template: __webpack_require__("../../../../../src/app/ea-crumb/ea-crumb.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ea-crumb/ea-crumb.component.css")]
    }),
    __metadata("design:paramtypes", [])
], EaCrumbComponent);

//# sourceMappingURL=ea-crumb.component.js.map

/***/ }),

/***/ "../../../../../src/app/ea-industries/ea-industries.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.expandable {\n  height: 50vh;\n  background: var(--background-2)\n}\n/*\n.card-industry{\n  background: white;\n  height: 15rem;\n  width: 17.5rem;\n  border-top: 3px solid green;\n  margin-bottom: 2rem;\n} */\n.industry-pic{\nwidth: 20rem;\nheight: 12.5rem;\n}\n\nul {\n  padding: 0;\n}\n\nli {\n  list-style: none;\n}\n\np {\n  margin: 0;\n  font-weight: 900;\n  text-decoration: underline;\n}\n\n#main1 {\n  padding: 0 1rem 0 1rem;\n}\n\nh2 {\n  font-weight: 900;\n}\n\n.pricingHeader {\n  height: 10vh; \n  color: white; \n  display: -webkit-box; \n  display: -ms-flexbox; \n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n\n}\n\n.panel-bg {\n\n}\n\n.panel-background {\n  width: 40%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ea-industries/ea-industries.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card-industry\" *ngFor=\"let person of industries\" >\n  <img class=\"industry-pic\" alt=\"\" src=\"../assets/images/{{person.image}}\">\n  <!-- <div class=\"pricingHeader\">{{person.title}}</div> -->\n  \n  <main id=\"main1\">\n    <ul>\n      <p>Problem</p>\n      <li *ngFor=\"let items of person.problems\">{{items.name}}</li>\n    </ul>\n    <ul>\n      <p>Solution</p>\n      <li *ngFor=\"let sols of person.solutions\">{{sols.name}}</li>\n    </ul>\n  </main>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/ea-industries/ea-industries.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EaIndustriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EaIndustriesComponent = (function () {
    function EaIndustriesComponent() {
        this.caseStudy = false;
        this.industries = [
            {
                image: 'code.jpeg',
                title: 'Smart Contract',
                bio: 'Financing Solar Installations',
                problems: [
                    {
                        name: 'Existing system is chain of intermediaries'
                    },
                    {
                        name: 'Difficult and risky to finance on your own'
                    }
                ],
                solutions: [
                    {
                        name: 'Running capital raise and repayment through blockchain'
                    },
                    {
                        name: 'Assemble a solar investment community to run the platform'
                    },
                    {
                        name: 'Individuals earn more from their capital'
                    }
                ]
            },
            {
                image: 'healthcare.jpeg',
                title: 'The Old Way',
                bio: 'Funding For Installations',
                problems: [
                    {
                        name: 'Finance industry dictates most terms'
                    },
                    {
                        name: 'Capital takes extended period to arrive'
                    }
                ],
                solutions: [
                    {
                        name: 'Leveling playing field for installers with crowdfunding'
                    },
                    {
                        name: 'Financers become personally invested in solar projects'
                    },
                    {
                        name: 'Cryptocurrency capital arrives same-day'
                    }
                ]
            },
            {
                image: 'analytics.jpg',
                title: 'Due Diligence',
                bio: 'Incentivizing Verification',
                problems: [
                    {
                        name: 'Financial due diligence can be expensive'
                    },
                    {
                        name: 'Investors skeptical of non-verified projects'
                    }
                ],
                solutions: [
                    {
                        name: 'Curated registry managed by tokens'
                    },
                    {
                        name: 'Verifiers compensated directly through economics of token model'
                    },
                    {
                        name: 'Verifiers are incentivized to increase value of network tokens and the registry'
                    }
                ]
            }
        ];
    }
    EaIndustriesComponent.prototype.toggleCaseStudy = function () {
        this.caseStudy = !this.caseStudy;
    };
    EaIndustriesComponent.prototype.ngOnInit = function () {
    };
    return EaIndustriesComponent;
}());
EaIndustriesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-ea-industries',
        template: __webpack_require__("../../../../../src/app/ea-industries/ea-industries.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ea-industries/ea-industries.component.css")]
    }),
    __metadata("design:paramtypes", [])
], EaIndustriesComponent);

//# sourceMappingURL=ea-industries.component.js.map

/***/ }),

/***/ "../../../../../src/app/ea-open/ea-open.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".open-source {\n  background: #3B3B3B;\nmin-height: 60vh;\n}\n\nh2 {\ncolor: white;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ea-open/ea-open.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"open-source\">\n\n<h2>We love Open Source</h2>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/ea-open/ea-open.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EaOpenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EaOpenComponent = (function () {
    function EaOpenComponent() {
    }
    EaOpenComponent.prototype.ngOnInit = function () {
    };
    return EaOpenComponent;
}());
EaOpenComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ea-open',
        template: __webpack_require__("../../../../../src/app/ea-open/ea-open.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ea-open/ea-open.component.css")]
    }),
    __metadata("design:paramtypes", [])
], EaOpenComponent);

//# sourceMappingURL=ea-open.component.js.map

/***/ }),

/***/ "../../../../../src/app/ea-services/ea-services.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".image-card {\n  height: 10rem;\n  width: 15rem;\n  background: white;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 1rem;\n  display: flex;\n  width: 100%;\n}\n\nli {\n  list-style: none;\n  padding: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\nul {\n  padding: 0;\n}\n\nimg.checkmark {\n  height: 25px;\n  width: 25px;\n  padding-right: 10px;\n}\n\nspan.header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  margin-top: 1rem;\n}\n\n\n.service-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 100%; \n}\n\n.mission {\n  width: 100%;\ndisplay: -webkit-box;\ndisplay: -ms-flexbox;\ndisplay: flex;\n-webkit-box-pack: center;\n    -ms-flex-pack: center;\n        justify-content: center;\n-webkit-box-align: center;\n    -ms-flex-align: center;\n        align-items: center;\nheight: 30vh;\n-webkit-box-orient: vertical;\n-webkit-box-direction: normal;\n    -ms-flex-direction: column;\n        flex-direction: column;\n}\n\n.mini-logo {\n  width: 50px;\n}\n\n\n@media (max-width: 500px) {   \n  \n\n  .image-card {\n    width: 90%;\n  }\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ea-services/ea-services.component.html":
/***/ (function(module, exports) {

module.exports = "  \n  <section class=\"mission\">\n      <img class=\"mini-logo\" alt=\"\" src=\"../assets/images/wattwatt.svg\">\n      <h2>WattWatt Energy Revolution</h2>\n      <p>WattWatt is transforming the landscape of solar panel funding</p>\n  </section>\n  <aside *ngFor=\"let items of services\" >\n    <div  class=\"image-card\">\n      <img style=\"height: 100%; width: 100%;\" src=\"../../assets/images/{{items.image}}\" alt=\"\">\n    </div>\n    <span class=\"header\"> <h2 class=\"service-row\">{{items.service}}</h2></span>\n    <ul >\n      <li *ngFor=\"let feats of items.feature\"><span><img class=\"checkmark\" src=\"../../assets/images/checkmark.svg\" alt=\"\"></span>{{feats.item}}</li>\n    </ul>\n  </aside>\n"

/***/ }),

/***/ "../../../../../src/app/ea-services/ea-services.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EaServicesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EaServicesComponent = (function () {
    function EaServicesComponent() {
        this.services = [
            {
                image: 'financing.svg',
                service: 'Smart Contract Vehicle',
                feature: [
                    {
                        item: 'Control over your ability to transfer without intermediaries',
                    },
                    {
                        item: 'Small transfer times with no cencorship possible',
                    },
                    {
                        item: 'Immutability if desired',
                    }
                ],
            },
            {
                image: 'growth.svg',
                service: 'Secure Crowdfunding',
                feature: [
                    {
                        item: 'Contracts built by experienced software team',
                    },
                    {
                        item: 'Highly scalable to handle growing investment demand',
                    },
                    {
                        item: 'Automated repayment and low cost service',
                    }
                ],
            },
            {
                image: 'solarpanel.svg',
                service: 'Verification in Investors Interest',
                feature: [
                    {
                        item: 'WattWatt team composed of experienced professionals',
                    },
                    {
                        item: 'Decentralization allows for community verification',
                    },
                    {
                        item: 'Token economics built to align verifiers interest with investors',
                    }
                ],
            }
        ];
    }
    EaServicesComponent.prototype.ngOnInit = function () {
    };
    return EaServicesComponent;
}());
EaServicesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ea-services',
        template: __webpack_require__("../../../../../src/app/ea-services/ea-services.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ea-services/ea-services.component.css")]
    }),
    __metadata("design:paramtypes", [])
], EaServicesComponent);

//# sourceMappingURL=ea-services.component.js.map

/***/ }),

/***/ "../../../../../src/app/main-container/main-container.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".particles {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: none;\n  opacity: .9;\n}\n\n.buttonRow {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; \n  -webkit-box-pack: justify; \n      -ms-flex-pack: justify; \n          justify-content: space-between;\n}\n\n.buttonRow button{\n  height: 45px; \n  width: 180px;\n  background:#355a7a; \n  color: white;\n  border-radius: 4px;\n  outline: none;\n  border: none;\n  margin-right: 10px;\n  margin-top: 1rem;\n}\n\n.buttonRow button p{\n  font-family: 'Titillium Web', sans-serif;\n  font-size: 16px;\n  margin: 0;\n  font-weight: 800;\n}\n\n.headerContainer {\n    position: relative;\n    \n}\n\n\n.headerContainer aside {\n  margin-left: 10rem;  \n}\n\n\naside {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n}\n\n.radar aside,\nfooter aside {\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n}\n\n.bg {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/wattwattHeader.png") + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: absolute;\n  width: 45vw;\n  height: 100%;\n  top: -5rem;\n  right: 0;\n  z-index: -1;\n}\n\n.benefit-cards {\n  width: 60%;\n}\n\n.benefits .title {\n  color: var(--color-1);\n}\n\nea-services {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: space-evenly;\n      -ms-flex-pack: space-evenly;\n          justify-content: space-evenly;\n  width: 100%;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n\napp-ea-industries {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: space-evenly;\n      -ms-flex-pack: space-evenly;\n          justify-content: space-evenly;\n  min-height: 70vh;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  padding-top: 5rem;\n}\n\n.expandable {\n  height: 50vh;\n  background: var(--background-2)\n}\n\n.industries {\n  min-height: 50vh;\n  background: var(--background-1)\n}\n\n.title .cover {\n  background: var(--background-1)\n}\n\n.case-studies {\n  width: 100%;\n  -ms-flex-wrap:wrap;\n      flex-wrap:wrap;\n  background: #e6e6e6;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n-webkit-box-pack: center;\n    -ms-flex-pack: center;\n        justify-content: center;\n}\n\n.case-study {\n  color: white; \n  \n}\n\n.apply-button {\n  cursor: pointer;\n}\n\n.partner-logo {\n  width: 60px;\n}\n\n.partner-logo:nth-child(2) {\n  margin-left: 3rem;\n}\n\n.contact-us {\n  height: 30vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.intouch {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.intouch h2 {\n  font-size: 32px;\n}\n\n\n@media (max-width: 500px) {   \n  \n  .headerContainer aside {\n    margin-left: 0;\n  }\n\n  .intouch h2 {\n    font-size: 22px;\n  }\n\n}\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main-container/main-container.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"main\">\n  <app-nav></app-nav>\n  <main class=\"headerContainer\">\n    <div style=\"position: relative;\">\n      <aside style=\"z-index: 10;\">\n        <h2>\n          WattWatt\n        </h2>\n        <h3>Fund a Panel, Save the world</h3>\n\n        <section class=\"buttonRow\">\n          <a href=\"https://vincenzbuhler.typeform.com/to/oN0Xr7\"><button class=\"apply-button\"><p>  Fund a Panel</p></button></a>\n          <button class=\"apply-button\"><p>Apply for Loan</p></button>\n        </section>\n        <!-- <br>\n      <br>\n      <h3>Bring your enterprise into the future with:</h3> -->\n        <!-- <ul class=\"value-props\">\n\n        <span>\n          <img style=\"\" alt=\"\" src=\"../assets/images/logo.svg\">\n          <li style=\"margin-left:5px;\">Rapid application development</li>\n        </span>\n        <span>\n          <img alt=\"\" src=\"../assets/images/logo.svg\">\n          <li style=\"margin-left:5px;\">real-time process oversight</li>\n        </span>\n        <span>\n          <img alt=\"\" src=\"../assets/images/logo.svg\">\n          <li style=\"margin-left:5px;\">ongoing anamoly detection</li>\n        </span>\n        <span>\n          <img alt=\"\" src=\"../assets/images/logo.svg\">\n          <li style=\"margin-left:5px;\">fully equiped native analytics</li>\n        </span>\n      </ul> -->\n      </aside>\n      <!-- <img style=\"z-index: -1; position: absolute; top: -150%; transform: scale(1.45);\" src=\"../../assets/images/crown.svg\" alt=\"\"> -->\n    </div>\n    <!-- <img style=\"z-index: -1; position: absolute; height: 50vh; top: 0; right: -12.5%; opacity: 0.1;\" src=\"../../assets/images/crown.svg\" alt=\"\"> -->\n    <!-- <div style=\"width: 10rem; position: absolute; bottom: 2rem; left: 2rem;\" class=\"bottom-text\">\n      <h2 style=\"font-size: 14px;\">The Process Optimization Company</h2>\n      <p style=\"font-size: 12px;\">A group of executives and innovators building the next generation platform for real-time process optimization.</p>\n    </div> -->\n  </main>\n  <!-- <particles class=\"particles\" [width]=\"width\" [height]=\"height\" [params]=\"myParams\"></particles> -->\n  <div class=\"bg\"></div>\n</section>\n\n<section id=\"services\" class=\"radar\">\n  <!-- <div class=\"title services\">\n    <img class=\"partner-logo\" src=\"../assets/images/moloch.svg\" alt=\"\">\n    <img class=\"partner-logo\" src=\"../assets/images/ea.svg\" alt=\"\">\n  </div> -->\n  <main>\n    <ea-services></ea-services>\n  </main>\n\n</section>\n\n<section id=\"studies\" class=\"industries\">\n\n  <main class=\"case-studies\">\n    <section style=\"width: 80%;\">\n      <app-ea-industries></app-ea-industries>\n\n    </section>\n  </main>\n</section>\n\n<section id=\"contact\" class=\"contact-us\"> \n\n  <aside class=\"intouch\">\n    <h2 style=\"width: 60%;\">To stay in touch for our ICO, please feel free to reach out to \n      info@wattwatt.io. \n    </h2>\n    <!-- <section class=\"buttonRow\">\n      <a href=\"https://vincenzbuhler.typeform.com/to/oN0Xr7\"><button class=\"apply-button\"><p>Join our Discord</p> <span><img  src=\"../../assets/images/discord.svg\" alt=\"\">\n      </span></button></a>\n    </section> -->\n  </aside>\n  <main>\n\n  </main>\n</section>\n\n\n<!-- <ea-open></ea-open> -->\n\n<!-- <section id=\"team\" class=\"benefits\">\n  <div class=\"title team\">\n    <div class=\"cover\"></div>\n    <img src=\"../assets/images/line.svg\" alt=\"\">\n    <span>The eaTeam</span>\n  </div>\n  <main class=\"benefit-cards\">\n    <ea-card></ea-card>\n  </main>\n</section> -->\n<section class=\"team\">\n  <app-team></app-team>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/main-container/main-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainContainerComponent = (function () {
    function MainContainerComponent() {
        this.myParams = {};
        this.width = 100;
        this.height = 100;
        this.caseStudy = false;
    }
    MainContainerComponent.prototype.toggleCaseStudy = function () {
        this.caseStudy = !this.caseStudy;
    };
    MainContainerComponent.prototype.ngOnInit = function () {
        this.myParams = {
            'particles': {
                'number': {
                    'value': 90,
                    'density': {
                        'enable': true,
                        'value_area': 800
                    }
                },
                'color': {
                    'value': '#d2a0ce'
                },
                'shape': {
                    'type': 'circle',
                    'stroke': {
                        'width': 0,
                        'color': '#000000'
                    },
                    'polygon': {
                        'nb_sides': 5
                    },
                    'image': {
                        'src': 'img/github.svg',
                        'width': 100,
                        'height': 100
                    }
                },
                'opacity': {
                    'value': 0.5,
                    'random': false,
                    'anim': {
                        'enable': false,
                        'speed': 1,
                        'opacity_min': 0.1,
                        'sync': false
                    }
                },
                'size': {
                    'value': 2,
                    'random': true,
                    'anim': {
                        'enable': false,
                        'speed': 40,
                        'size_min': 0.1,
                        'sync': false
                    }
                },
                'line_linked': {
                    'enable': true,
                    'distance': 150,
                    'color': '#af4ce6',
                    'opacity': 0.5,
                    'width': 2
                },
                'move': {
                    'enable': true,
                    'speed': 0,
                    'direction': 'none',
                    'random': false,
                    'straight': false,
                    'out_mode': 'out',
                    'bounce': false,
                    'attract': {
                        'enable': false,
                        'rotateX': 600,
                        'rotateY': 1200
                    }
                }
            },
            'interactivity': {
                'detect_on': 'canvas',
                'events': {
                    'onhover': {
                        'enable': false,
                        'mode': 'repulse'
                    },
                    'onclick': {
                        'enable': false,
                        'mode': 'push'
                    },
                    'resize': true
                },
                'modes': {
                    'grab': {
                        'distance': 400,
                        'line_linked': {
                            'opacity': 1
                        }
                    },
                    'bubble': {
                        'distance': 1500,
                        'size': 491.50849150849155,
                        'duration': 5.194805194805195,
                        'opacity': 8,
                        'speed': 3
                    },
                    'repulse': {
                        'distance': 200,
                        'duration': 0.4
                    },
                    'push': {
                        'particles_nb': 4
                    },
                    'remove': {
                        'particles_nb': 2
                    }
                }
            },
            'retina_detect': true
        };
    };
    return MainContainerComponent;
}());
MainContainerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-main-container',
        template: __webpack_require__("../../../../../src/app/main-container/main-container.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main-container/main-container.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MainContainerComponent);

//# sourceMappingURL=main-container.component.js.map

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\n    <img class=\"nav\" alt=\"\" src=\"../assets/images/wattwatt.svg\">\n    <ul class=\"nav\">\n     <a href=\"#services\"><li class=\"hvr-underline-from-center\">Services</li></a>\n     <a href=\"#studies\"><li class=\"hvr-underline-from-center\">Solutions</li></a>\n      <a href=\"#contact\"><li class=\"hvr-underline-from-center\">Connect</li></a>\n    </ul>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    return NavComponent;
}());
NavComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-nav',
        template: __webpack_require__("../../../../../src/app/nav/nav.component.html"),
        styles: [__webpack_require__("../../../../../src/app/nav/nav.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavComponent);

//# sourceMappingURL=nav.component.js.map

/***/ }),

/***/ "../../../../../src/app/radar/radar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n#ellipse12948 {\n-webkit-animation: rotate 5s 5;\n        animation: rotate 5s 5;\n-webkit-animation-timing-function: linear;\n        animation-timing-function: linear;\n-webkit-transform-origin: center center;\n        transform-origin: center center;\n}\n\n#rect12660 {\n-webkit-animation: rotate 5s 5;\n        animation: rotate 5s 5;\n-webkit-transform-origin: top center;\n        transform-origin: top center;\n-webkit-animation-timing-function: linear;\n        animation-timing-function: linear;\n}\n\n@-webkit-keyframes rotate {\n  from {   -webkit-transform: rotate(0deg);   transform: rotate(0deg); }\n  to {   -webkit-transform: rotate(360deg);   transform: rotate(360deg); }\n}\n@keyframes rotate {\n  from {   -webkit-transform: rotate(0deg);   transform: rotate(0deg); }\n  to {   -webkit-transform: rotate(360deg);   transform: rotate(360deg); }\n\n}\n\n#circle4201 {\n-webkit-transform: scale(0);\n        transform: scale(0); opacity:0;\n\n-webkit-transform-origin: top center;\n\n        transform-origin: top center;\n-webkit-animation-timing-function: linear;\n        animation-timing-function: linear;\n\n-webkit-animation: detectado, detectado, detectado,detectado,detectado;\n  -webkit-animation-delay:0s, 6s, 8s, 13s, 16s,20s;\n  -webkit-animation-duration: 3s;\n  animation: detectado, detectado, detectado,detectado,detectado;\n  -webkit-animation-delay: 0.3s, 5.7s, 10.7s, 15.7s, 17.7s,21.7s;\n          animation-delay: 0.3s, 5.7s, 10.7s, 15.7s, 17.7s,21.7s;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n\n}\n\n#circle4199 {\n-webkit-transform: scale(0);\n        transform: scale(0); opacity:0;\n-webkit-transform-origin: top center;\n        transform-origin: top center;\n-webkit-animation-timing-function: linear;\n        animation-timing-function: linear;\n\n    -webkit-animation: detectado, detectado, detectado,detectado,detectado;\n  -webkit-animation-delay:0s, 5s, 10s, 15s, 20s,25s;\n  -webkit-animation-duration: 3s;\n  animation: detectado, detectado, detectado,detectado,detectado;\n  -webkit-animation-delay: 1s, 7s, 12s, 17s, 22s,27s;\n          animation-delay: 1s, 7s, 12s, 17s, 22s,27s;\n  -webkit-animation-duration: 2.2s;\n          animation-duration: 2.2s;\n\n}\n\n#path4191 {\n-webkit-transform: scale(0);\n        transform: scale(0); opacity:0;\n-webkit-transform-origin: top center;\n        transform-origin: top center;\n-webkit-animation-timing-function: linear;\n        animation-timing-function: linear;\n\n    -webkit-animation: detectado, detectado, detectado,detectado,detectado;\n  -webkit-animation-delay:0s, 7.3s, 12.3s, 17.3s, 22.3s,27.3s;\n  -webkit-animation-duration: 3s;\n  animation: detectado, detectado, detectado,detectado,detectado;\n  -webkit-animation-delay: 0.7s, 7.5s, 12.5s, 17.5s, 22.5s,27.5s;\n          animation-delay: 0.7s, 7.5s, 12.5s, 17.5s, 22.5s,27.5s;\n  -webkit-animation-duration: 2.2s;\n          animation-duration: 2.2s;\n}\n\n\n#circle4193 {\n-webkit-transform: scale(0);\n        transform: scale(0); opacity:0;\n-webkit-transform-origin: top center;\n        transform-origin: top center;\n-webkit-animation-timing-function: linear;\n        animation-timing-function: linear;\n\n    -webkit-animation: detectado, detectado, detectado,detectado,detectado;\n  -webkit-animation-delay:1s, 6s, 11s, 16, 21s,26s;\n  -webkit-animation-duration: 3s;\n  animation: detectado, detectado, detectado,detectado,detectado;\n  -webkit-animation-delay: 3s, 8s, 13s, 18s, 23s,28s;\n          animation-delay: 3s, 8s, 13s, 18s, 23s,28s;\n  -webkit-animation-duration: 2.4s;\n          animation-duration: 2.4s;\n}\n\n#circle4195 {\n-webkit-transform: scale(0);\n        transform: scale(0); opacity:0;\n-webkit-transform-origin: top center;\n        transform-origin: top center;\n-webkit-animation-timing-function: linear;\n        animation-timing-function: linear;\n\n    -webkit-animation: detectado, detectado, detectado,detectado,detectado;\n  -webkit-animation-delay: 1.5s, 6.5s, 11.5s, 16.5s, 21.5s,26.5s;\n\n  -webkit-animation-duration: 3s;\n  animation: detectado, detectado, detectado,detectado,detectado;\n  -webkit-animation-delay: 3.8s, 8.8s, 13.8s, 18.8s, 23.8s,28.8s;\n          animation-delay: 3.8s, 8.8s, 13.8s, 18.8s, 23.8s,28.8s;\n  -webkit-animation-duration: 2.7s;\n          animation-duration: 2.7s;\n}\n\n#circle4197 {\n-webkit-transform: scale(0);\n        transform: scale(0); opacity:0;\n-webkit-transform-origin: top center;\n        transform-origin: top center;\n-webkit-animation-timing-function: linear;\n        animation-timing-function: linear;\n\n    -webkit-animation: detectado, detectado, detectado,detectado,detectado;\n  -webkit-animation-delay: 1.7s, 6.7s, 11.7s, 16.7s, 21.7s,26.7s;\n\n  -webkit-animation-duration: 3s;\n  animation: detectado, detectado, detectado,detectado,detectado;\n  -webkit-animation-delay: 4s, 9s, 14s, 19s, 24s,29s;\n          animation-delay: 4s, 9s, 14s, 19s, 24s,29s;\n  animation-duration: 3s;\n}\n\n@-webkit-keyframes detectado {\n  from {   -webkit-transform: scale(0);   transform: scale(0); opacity:1; }\n  to {   -webkit-transform: scale(1);   transform: scale(1); opacity:0; }\n}\n@keyframes detectado {\n  from {   -webkit-transform: scale(0);   transform: scale(0); opacity:1; }\n  to {   -webkit-transform: scale(1);   transform: scale(1); opacity:0; }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/radar/radar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cont_principal\">\n\n    <div class=\"cont_centrar\">\n    <svg\n       xmlns:dc=\"http://purl.org/dc/elements/1.1/\"\n       xmlns:cc=\"http://creativecommons.org/ns#\"\n       xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"\n       xmlns:svg=\"http://www.w3.org/2000/svg\"\n       xmlns=\"http://www.w3.org/2000/svg\"\n       xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n       xmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\"\n       xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\"\n       width=\"320\"\n       height=\"320\"\n       viewBox=\"0 0 320 320.00001\"\n       id=\"svg12000\"\n       version=\"1.1\"\n       inkscape:version=\"0.91 r13725\"\n       sodipodi:docname=\"radar.svg\">\n      <defs\n         id=\"defs12002\">\n        <linearGradient\n           inkscape:collect=\"always\"\n           id=\"linearGradient12950\">\n          <stop\n             style=\"stop-color:green;stop-opacity:0.08181819\"\n             offset=\"0\"\n             id=\"stop12952\" />\n          <stop\n             style=\"stop-color:#ececec;stop-opacity:0.00649351\"\n             offset=\"1\"\n             id=\"stop12954\" />\n        </linearGradient>\n        <filter\n           style=\"color-interpolation-filters:sRGB;\"\n           inkscape:label=\"Drop Shadow\"\n           id=\"filter12648\">\n          <feFlood\n             flood-opacity=\"0.27451\"\n             flood-color=\"rgb(0,0,0)\"\n             result=\"flood\"\n             id=\"feFlood12650\" />\n          <feComposite\n             in=\"flood\"\n             in2=\"SourceGraphic\"\n             operator=\"in\"\n             result=\"composite1\"\n             id=\"feComposite12652\" />\n          <feGaussianBlur\n             in=\"composite1\"\n             stdDeviation=\"5\"\n             result=\"blur\"\n             id=\"feGaussianBlur12654\" />\n          <feOffset\n             dx=\"0\"\n             dy=\"0\"\n             result=\"offset\"\n             id=\"feOffset12656\" />\n          <feComposite\n             in=\"SourceGraphic\"\n             in2=\"offset\"\n             operator=\"over\"\n             result=\"composite2\"\n             id=\"feComposite12658\" />\n        </filter>\n        <filter\n           style=\"color-interpolation-filters:sRGB;\"\n           inkscape:label=\"Drop Shadow\"\n           id=\"filter12932\">\n          <feFlood\n             flood-opacity=\"0.27451\"\n             flood-color=\"rgb(0,0,0)\"\n             result=\"flood\"\n             id=\"feFlood12934\" />\n          <feComposite\n             in=\"flood\"\n             in2=\"SourceGraphic\"\n             operator=\"in\"\n             result=\"composite1\"\n             id=\"feComposite12936\" />\n          <feGaussianBlur\n             in=\"composite1\"\n             stdDeviation=\"5\"\n             result=\"blur\"\n             id=\"feGaussianBlur12938\" />\n          <feOffset\n             dx=\"0\"\n             dy=\"0\"\n             result=\"offset\"\n             id=\"feOffset12940\" />\n          <feComposite\n             in=\"SourceGraphic\"\n             in2=\"offset\"\n             operator=\"over\"\n             result=\"composite2\"\n             id=\"feComposite12942\" />\n        </filter>\n        <linearGradient\n           inkscape:collect=\"always\"\n           xlink:href=\"#linearGradient12950\"\n           id=\"linearGradient12956\"\n           x1=\"81.766975\"\n           y1=\"904.59143\"\n           x2=\"159.81953\"\n           y2=\"891.828\"\n           gradientUnits=\"userSpaceOnUse\"\n           spreadMethod=\"pad\"\n           gradientTransform=\"translate(-0.53382874,0.53418059)\" />\n        <filter\n           style=\"color-interpolation-filters:sRGB;\"\n           inkscape:label=\"Drop Shadow\"\n           id=\"filter12962\">\n          <feFlood\n             flood-opacity=\"0.27451\"\n             flood-color=\"rgb(0,0,0)\"\n             result=\"flood\"\n             id=\"feFlood12964\" />\n          <feComposite\n             in=\"flood\"\n             in2=\"SourceGraphic\"\n             operator=\"in\"\n             result=\"composite1\"\n             id=\"feComposite12966\" />\n          <feGaussianBlur\n             in=\"composite1\"\n             stdDeviation=\"5\"\n             result=\"blur\"\n             id=\"feGaussianBlur12968\" />\n          <feOffset\n             dx=\"0\"\n             dy=\"0\"\n             result=\"offset\"\n             id=\"feOffset12970\" />\n          <feComposite\n             in=\"SourceGraphic\"\n             in2=\"offset\"\n             operator=\"over\"\n             result=\"composite2\"\n             id=\"feComposite12972\" />\n        </filter>\n        <filter\n           style=\"color-interpolation-filters:sRGB;\"\n           inkscape:label=\"Drop Shadow\"\n           id=\"filter13062\">\n          <feFlood\n             flood-opacity=\"0.333333\"\n             flood-color=\"rgb(0,0,0)\"\n             result=\"flood\"\n             id=\"feFlood13064\" />\n          <feComposite\n             in=\"flood\"\n             in2=\"SourceGraphic\"\n             operator=\"in\"\n             result=\"composite1\"\n             id=\"feComposite13066\" />\n          <feGaussianBlur\n             in=\"composite1\"\n             stdDeviation=\"3\"\n             result=\"blur\"\n             id=\"feGaussianBlur13068\" />\n          <feOffset\n             dx=\"0\"\n             dy=\"0\"\n             result=\"offset\"\n             id=\"feOffset13070\" />\n          <feComposite\n             in=\"SourceGraphic\"\n             in2=\"offset\"\n             operator=\"over\"\n             result=\"fbSourceGraphic\"\n             id=\"feComposite13072\" />\n          <feColorMatrix\n             result=\"fbSourceGraphicAlpha\"\n             in=\"fbSourceGraphic\"\n             values=\"0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0\"\n             id=\"feColorMatrix13153\" />\n          <feFlood\n             id=\"feFlood13155\"\n             flood-opacity=\"0.333333\"\n             flood-color=\"rgb(0,0,0)\"\n             result=\"flood\"\n             in=\"fbSourceGraphic\" />\n          <feComposite\n             id=\"feComposite13157\"\n             in2=\"fbSourceGraphic\"\n             in=\"flood\"\n             operator=\"in\"\n             result=\"composite1\" />\n          <feGaussianBlur\n             id=\"feGaussianBlur13159\"\n             in=\"composite1\"\n             stdDeviation=\"2.4\"\n             result=\"blur\" />\n          <feOffset\n             id=\"feOffset13161\"\n             dx=\"0\"\n             dy=\"0\"\n             result=\"offset\" />\n          <feComposite\n             id=\"feComposite13163\"\n             in2=\"offset\"\n             in=\"fbSourceGraphic\"\n             operator=\"over\"\n             result=\"composite2\" />\n        </filter>\n        <filter\n           style=\"color-interpolation-filters:sRGB;\"\n           inkscape:label=\"Drop Shadow\"\n           id=\"filter13165\">\n          <feFlood\n             flood-opacity=\"0.333333\"\n             flood-color=\"rgb(0,0,0)\"\n             result=\"flood\"\n             id=\"feFlood13167\" />\n          <feComposite\n             in=\"flood\"\n             in2=\"SourceGraphic\"\n             operator=\"in\"\n             result=\"composite1\"\n             id=\"feComposite13169\" />\n          <feGaussianBlur\n             in=\"composite1\"\n             stdDeviation=\"2.4\"\n             result=\"blur\"\n             id=\"feGaussianBlur13171\" />\n          <feOffset\n             dx=\"0\"\n             dy=\"0\"\n             result=\"offset\"\n             id=\"feOffset13173\" />\n          <feComposite\n             in=\"SourceGraphic\"\n             in2=\"offset\"\n             operator=\"over\"\n             result=\"composite2\"\n             id=\"feComposite13175\" />\n        </filter>\n        <filter\n           style=\"color-interpolation-filters:sRGB;\"\n           inkscape:label=\"Drop Shadow\"\n           id=\"filter13181\">\n          <feFlood\n             flood-opacity=\"0.333333\"\n             flood-color=\"rgb(0,0,0)\"\n             result=\"flood\"\n             id=\"feFlood13183\" />\n          <feComposite\n             in=\"flood\"\n             in2=\"SourceGraphic\"\n             operator=\"in\"\n             result=\"composite1\"\n             id=\"feComposite13185\" />\n          <feGaussianBlur\n             in=\"composite1\"\n             stdDeviation=\"2.4\"\n             result=\"blur\"\n             id=\"feGaussianBlur13187\" />\n          <feOffset\n             dx=\"0\"\n             dy=\"0\"\n             result=\"offset\"\n             id=\"feOffset13189\" />\n          <feComposite\n             in=\"SourceGraphic\"\n             in2=\"offset\"\n             operator=\"over\"\n             result=\"composite2\"\n             id=\"feComposite13191\" />\n        </filter>\n      </defs>\n\n      <g\n         inkscape:label=\"Capa 1\"\n         inkscape:groupmode=\"layer\"\n         id=\"layer1\"\n         transform=\"translate(0,-732.36216)\">\n        <ellipse\n           style=\"opacity:0;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:5;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\"\n           id=\"path12548\"\n           cx=\"159.46616\"\n           cy=\"892.896\"\n           rx=\"149.46616\"\n           ry=\"149.46617\" />\n        <ellipse\n           id=\"ellipse12948\"\n           style=\"opacity:1;fill:url(#linearGradient12956);fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:5;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\"\n           cx=\"159.46616\"\n           cy=\"892.89636\"\n           rx=\"149.46616\"\n           ry=\"149.46617\" />\n        <g\n           id=\"g13177\"\n           style=\"filter:url(#filter13181)\"\n           transform=\"matrix(1.000041,0,0,0.99893319,-0.00653322,1.1258829)\">\n          <rect\n             y=\"892.18005\"\n             x=\"157.35107\"\n             height=\"148.91985\"\n             width=\"3.9168477\"\n             id=\"rect12660\"\n             style=\"opacity:1;fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:5;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\" />\n          <circle\n             r=\"12.184875\"\n             cy=\"892.37726\"\n             cx=\"159.38489\"\n             id=\"path12944\"\n             style=\"opacity:1;fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:5.63025093;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\" />\n        </g>\n        <circle\n           cy=\"892.86212\"\n           cx=\"158.96774\"\n           id=\"circle12976\"\n           style=\"opacity:1;fill:none;fill-opacity:0.77880186;fill-rule:nonzero;stroke:#ffffff;stroke-width:3;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.55760366\"\n           r=\"120.96774\" />\n        <circle\n           style=\"opacity:1;fill:#5599ff;fill-opacity:0.00649348;fill-rule:nonzero;stroke:#ffffff;stroke-width:3;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:0.78341013\"\n           id=\"path12974\"\n           cx=\"160.14287\"\n           cy=\"892.36212\"\n           r=\"75\" />\n        <circle\n           style=\"opacity:1;fill:none;fill-opacity:1;fill-rule:nonzero;stroke:#ffffff;stroke-width:5;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;filter:url(#filter12932)\"\n           id=\"path12670\"\n           cx=\"160\"\n           cy=\"892.36218\"\n           r=\"150\" />\n        <circle\n           style=\"fill:none;fill-opacity:1;fill-rule:nonzero;stroke:red;stroke-width:3;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\"\n           id=\"path4191\"\n           cx=\"255.91022\"\n           cy=\"813.38086\"\n           r=\"10\" />\n        <circle\n           r=\"10\"\n           cy=\"893.38086\"\n           cx=\"249.9102\"\n           id=\"circle4193\"\n           style=\"fill:none;fill-opacity:1;fill-rule:nonzero;stroke:green;stroke-width:3;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\" />\n        <circle\n           style=\"fill:none;fill-opacity:1;fill-rule:nonzero;stroke:red;stroke-width:3;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\"\n           id=\"circle4195\"\n           cx=\"187.9102\"\n           cy=\"947.38086\"\n           r=\"10\" />\n        <circle\n           r=\"10\"\n           cy=\"987.38086\"\n           cx=\"229.9102\"\n           id=\"circle4197\"\n           style=\"fill:none;fill-opacity:1;fill-rule:nonzero;stroke:yellow;stroke-width:3;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\" />\n        <circle\n           r=\"10\"\n           cy=\"795.38086\"\n           cx=\"169.9102\"\n           id=\"circle4199\"\n           style=\"fill:none;fill-opacity:1;fill-rule:nonzero;stroke:gold;stroke-width:3;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\" />\n        <circle\n           style=\"fill:none;fill-opacity:1;fill-rule:nonzero;stroke:darkred;stroke-width:3;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\"\n           id=\"circle4201\"\n           cx=\"57.910202\"\n           cy=\"935.38086\"\n           r=\"10\" />\n      </g>\n    </svg>\n      </div>\n    </div>\n"

/***/ }),

/***/ "../../../../../src/app/radar/radar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RadarComponent = (function () {
    function RadarComponent() {
    }
    RadarComponent.prototype.ngOnInit = function () {
    };
    return RadarComponent;
}());
RadarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-radar',
        template: __webpack_require__("../../../../../src/app/radar/radar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/radar/radar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], RadarComponent);

//# sourceMappingURL=radar.component.js.map

/***/ }),

/***/ "../../../../../src/app/team/team.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/team/team.component.html":
/***/ (function(module, exports) {

module.exports = "\n<footer>\n  <aside>\n    <h2>WattWatt</h2>\n    <h3>Ethereum-based solar energy financing</h3>\n    <!-- <main>\n      <a href=\"https://github.com/spankchain\" target=\"_blank\"><img src=\"../../assets/images/github.svg\"/></a>\n      <a href=\"https://twitter.com/spankchain\" target=\"_blank\"><img src=\"../../assets/images/twitterWhite.svg\" /></a>\n      <a href=\"https://www.youtube.com/channel/UCRonD1SJuucnq9GJCJL_crQ\" target=\"_blank\"><img src=\"../../assets/images/youtube.svg\" /></a>\n      <a href=\"https://medium.com/@spankchain\" target=\"_blank\"><img src=\"../../assets/images/medium.svg\" /></a>\n      <a href=\"https://discord.gg/Rz48YYy\" target=\"_blank\"><img src=\"../../assets/images/discord.svg\"/></a>\n    </main> -->\n  </aside>\n  <!-- <main>\n    <ul>\n      <li>Resources</li>\n      <li><span class=\"hvr-underline-from-center\"> <a style=\"text-decoration: none; color: white;\" href=\"https://eang.io\"> White Paper </a></span></li>\n    </ul>\n    <ul>\n      <li>Case Studies</li>\n      <li><span class=\"hvr-underline-from-center\"> <a style=\"text-decoration: none; color: white;\" href=\"#studies\">  </a></span></li>\n      <li><span class=\"hvr-underline-from-center\"><a style=\"text-decoration: none; color: white;\" href=\"#studies\">Enterprise Apps</a></span></li>\n      <li><span class=\"hvr-underline-from-center\"><a style=\"text-decoration: none; color: white;\" href=\"#studies\">Real-time Reporting</a></span></li>\n    </ul>\n    <ul>\n      <li>Services</li>\n      <li><span class=\"hvr-underline-from-center\">Solar Energy Financing</span></li>\n      <li><span class=\"hvr-underline-from-center\">Funding Opportunity Verification</span></li>\n    </ul>\n    <ul>\n      <li>Contact</li>\n      <li><span class=\"hvr-underline-from-center\">Twitter</span></li>\n    </ul>\n  </main> -->\n\n\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/team/team.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TeamComponent = (function () {
    function TeamComponent() {
    }
    TeamComponent.prototype.ngOnInit = function () {
    };
    return TeamComponent;
}());
TeamComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-team',
        template: __webpack_require__("../../../../../src/app/team/team.component.html"),
        styles: [__webpack_require__("../../../../../src/app/team/team.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TeamComponent);

//# sourceMappingURL=team.component.js.map

/***/ }),

/***/ "../../../../../src/assets/images/wattwattHeader.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "wattwattHeader.470de20b3a7992b39a88.png";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map