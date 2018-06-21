(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['main'],
  {
    /***/ './src/$$_lazy_route_resource lazy recursive':
      /*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        function webpackEmptyAsyncContext(req) {
          // Here Promise.resolve().then() is used instead of new Promise() to prevent
          // uncaught exception popping up in devtools
          return Promise.resolve().then(function() {
            var e = new Error('Cannot find module "' + req + '".');
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }
        webpackEmptyAsyncContext.keys = function() {
          return [];
        };
        webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
        module.exports = webpackEmptyAsyncContext;
        webpackEmptyAsyncContext.id =
          './src/$$_lazy_route_resource lazy recursive';

        /***/
      },

    /***/ './src/app/app-routing.module.ts':
      /*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
      /*! exports provided: AppRoutingModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'AppRoutingModule',
          function() {
            return AppRoutingModule;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/router */ './node_modules/@angular/router/fesm5/router.js'
        );
        /* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./views/home/home.component */ './src/app/views/home/home.component.ts'
        );
        /* harmony import */ var _views_game_game_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./views/game/game.component */ './src/app/views/game/game.component.ts'
        );
        /* harmony import */ var _views_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./views/about/about.component */ './src/app/views/about/about.component.ts'
        );
        /* harmony import */ var _views_rules_rules_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./views/rules/rules.component */ './src/app/views/rules/rules.component.ts'
        );
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r =
                c < 3
                  ? target
                  : desc === null
                    ? (desc = Object.getOwnPropertyDescriptor(target, key))
                    : desc,
              d;
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.decorate === 'function'
            )
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                  r =
                    (c < 3
                      ? d(r)
                      : c > 3
                        ? d(target, key, r)
                        : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };

        var routes = [
          {
            path: '',
            component:
              _views_home_home_component__WEBPACK_IMPORTED_MODULE_2__[
                'HomeComponent'
              ]
          },
          {
            path: 'game',
            component:
              _views_game_game_component__WEBPACK_IMPORTED_MODULE_3__[
                'GameComponent'
              ]
          },
          {
            path: 'rules',
            component:
              _views_rules_rules_component__WEBPACK_IMPORTED_MODULE_5__[
                'RulesComponent'
              ]
          },
          {
            path: 'impressum',
            component:
              _views_home_home_component__WEBPACK_IMPORTED_MODULE_2__[
                'HomeComponent'
              ]
          },
          {
            path: 'about',
            component:
              _views_about_about_component__WEBPACK_IMPORTED_MODULE_4__[
                'AboutComponent'
              ]
          }
        ];
        var AppRoutingModule = /** @class */ (function() {
          function AppRoutingModule() {}
          AppRoutingModule = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'])({
                imports: [
                  _angular_router__WEBPACK_IMPORTED_MODULE_1__[
                    'RouterModule'
                  ].forRoot(routes)
                ],
                exports: [
                  _angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule']
                ]
              })
            ],
            AppRoutingModule
          );
          return AppRoutingModule;
        })();

        /***/
      },

    /***/ './src/app/app.component.html':
      /*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<!--The content below is only a placeholder and can be replaced.-->\r\n<div id="app" class="root__container">\r\n\r\n  <app-header></app-header>\r\n\r\n  <div id="view">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n\r\n  <app-footer id="footer"></app-footer>\r\n\r\n</div>\r\n';

        /***/
      },

    /***/ './src/app/app.component.scss':
      /*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '#app {\n  display: flex;\n  min-height: 100vh;\n  flex-direction: column; }\n\n.root__container {\n  width: 100%;\n  position: relative; }\n\n#view {\n  margin-top: 2rem;\n  flex: 1;\n  align-self: center;\n  display: flex; }\n';

        /***/
      },

    /***/ './src/app/app.component.ts':
      /*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
      /*! exports provided: AppComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'AppComponent',
          function() {
            return AppComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r =
                c < 3
                  ? target
                  : desc === null
                    ? (desc = Object.getOwnPropertyDescriptor(target, key))
                    : desc,
              d;
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.decorate === 'function'
            )
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                  r =
                    (c < 3
                      ? d(r)
                      : c > 3
                        ? d(target, key, r)
                        : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };

        var AppComponent = /** @class */ (function() {
          function AppComponent() {
            this.title = 'app';
          }
          AppComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'app-root',
                template: __webpack_require__(
                  /*! ./app.component.html */ './src/app/app.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./app.component.scss */ './src/app/app.component.scss'
                  )
                ]
              })
            ],
            AppComponent
          );
          return AppComponent;
        })();

        /***/
      },

    /***/ './src/app/app.module.ts':
      /*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
      /*! exports provided: AppModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'AppModule',
          function() {
            return AppModule;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/forms */ './node_modules/@angular/forms/fesm5/forms.js'
        );
        /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/platform-browser */ './node_modules/@angular/platform-browser/fesm5/platform-browser.js'
        );
        /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/platform-browser/animations */ './node_modules/@angular/platform-browser/fesm5/animations.js'
        );
        /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./app-routing.module */ './src/app/app-routing.module.ts'
        );
        /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./app.component */ './src/app/app.component.ts'
        );
        /* harmony import */ var _views_home_home_menu_home_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./views/home/home-menu/home-menu.component */ './src/app/views/home/home-menu/home-menu.component.ts'
        );
        /* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./footer/footer.component */ './src/app/footer/footer.component.ts'
        );
        /* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ./header/header.component */ './src/app/header/header.component.ts'
        );
        /* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ./material.module */ './src/app/material.module.ts'
        );
        /* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ./views/home/home.component */ './src/app/views/home/home.component.ts'
        );
        /* harmony import */ var _views_game_game_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ./views/game/game.component */ './src/app/views/game/game.component.ts'
        );
        /* harmony import */ var _views_game_player_player_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ./views/game/player/player.component */ './src/app/views/game/player/player.component.ts'
        );
        /* harmony import */ var _start_dialog_start_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ./start-dialog/start-dialog.component */ './src/app/start-dialog/start-dialog.component.ts'
        );
        /* harmony import */ var _views_about_about_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! ./views/about/about.component */ './src/app/views/about/about.component.ts'
        );
        /* harmony import */ var _views_rules_rules_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! ./views/rules/rules.component */ './src/app/views/rules/rules.component.ts'
        );
        /* harmony import */ var _winner_dialog_winner_dialog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ./winner-dialog/winner-dialog.component */ './src/app/winner-dialog/winner-dialog.component.ts'
        );
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r =
                c < 3
                  ? target
                  : desc === null
                    ? (desc = Object.getOwnPropertyDescriptor(target, key))
                    : desc,
              d;
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.decorate === 'function'
            )
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                  r =
                    (c < 3
                      ? d(r)
                      : c > 3
                        ? d(target, key, r)
                        : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };

        var AppModule = /** @class */ (function() {
          function AppModule() {}
          AppModule = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'])({
                declarations: [
                  _header_header_component__WEBPACK_IMPORTED_MODULE_8__[
                    'HeaderComponent'
                  ],
                  _app_component__WEBPACK_IMPORTED_MODULE_5__['AppComponent'],
                  _views_home_home_component__WEBPACK_IMPORTED_MODULE_10__[
                    'HomeComponent'
                  ],
                  _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__[
                    'FooterComponent'
                  ],
                  _views_home_home_menu_home_menu_component__WEBPACK_IMPORTED_MODULE_6__[
                    'HomeMenuComponent'
                  ],
                  _views_game_game_component__WEBPACK_IMPORTED_MODULE_11__[
                    'GameComponent'
                  ],
                  _views_game_player_player_component__WEBPACK_IMPORTED_MODULE_12__[
                    'PlayerComponent'
                  ],
                  _start_dialog_start_dialog_component__WEBPACK_IMPORTED_MODULE_13__[
                    'StartDialogComponent'
                  ],
                  _views_about_about_component__WEBPACK_IMPORTED_MODULE_14__[
                    'AboutComponent'
                  ],
                  _views_rules_rules_component__WEBPACK_IMPORTED_MODULE_15__[
                    'RulesComponent'
                  ],
                  _winner_dialog_winner_dialog_component__WEBPACK_IMPORTED_MODULE_16__[
                    'WinnerDialogComponent'
                  ]
                ],
                imports: [
                  _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__[
                    'BrowserModule'
                  ],
                  _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__[
                    'BrowserAnimationsModule'
                  ],
                  _material_module__WEBPACK_IMPORTED_MODULE_9__[
                    'MaterialModule'
                  ],
                  _app_routing_module__WEBPACK_IMPORTED_MODULE_4__[
                    'AppRoutingModule'
                  ],
                  _angular_forms__WEBPACK_IMPORTED_MODULE_1__['FormsModule'],
                  _angular_forms__WEBPACK_IMPORTED_MODULE_1__[
                    'ReactiveFormsModule'
                  ]
                ],
                providers: [],
                entryComponents: [
                  _start_dialog_start_dialog_component__WEBPACK_IMPORTED_MODULE_13__[
                    'StartDialogComponent'
                  ],
                  _winner_dialog_winner_dialog_component__WEBPACK_IMPORTED_MODULE_16__[
                    'WinnerDialogComponent'
                  ]
                ],
                bootstrap: [
                  _app_component__WEBPACK_IMPORTED_MODULE_5__['AppComponent']
                ]
              })
            ],
            AppModule
          );
          return AppModule;
        })();

        /***/
      },

    /***/ './src/app/footer/footer.component.html':
      /*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<footer class="footer docs-footer">\r\n  <div class="docs-footer-list">\r\n    <div class="docs-footer-logo">\r\n      <div class="footer-logo">\r\n        <span>\r\n          <a href="https://www.dhbw-stuttgart.de/home/">\r\n            <img class="docs-footer-dhbw-logo" src="../../assets/DHBW-Logo.png" alt="DHBW">\r\n          </a>\r\n        </span>\r\n      </div>\r\n    </div>\r\n\r\n    <div class="docs-footer-version">\r\n      <span class="version">Version 0.1.1</span>\r\n    </div>\r\n\r\n    <div class="docs-footer-copyright">\r\n      <span><a routerLink="/impressum">Impressum</a></span>\r\n    </div>\r\n  </div>\r\n</footer>\r\n';

        /***/
      },

    /***/ './src/app/footer/footer.component.scss':
      /*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '.docs-footer {\n  font-size: 12px;\n  margin-top: 40px;\n  color: white;\n  background: #3f51b5; }\n\n.docs-footer-list {\n  align-items: center;\n  display: flex;\n  flex-flow: row wrap;\n  padding: 8px; }\n\n.docs-footer-logo {\n  flex: 1; }\n\n.footer-logo {\n  display: flex;\n  justify-content: center; }\n\n.docs-footer-dhbw-logo {\n  vertical-align: middle;\n  height: 50px; }\n\n.docs-footer-version {\n  flex: 1;\n  text-align: center; }\n\n.docs-footer-copyright {\n  display: flex;\n  flex: 1;\n  justify-content: flex-end;\n  flex-direction: column;\n  min-width: 225px;\n  text-align: center; }\n\n.docs-footer-logo span {\n  display: inline-block;\n  line-height: 50px;\n  margin: 0 40px;\n  vertical-align: bottom; }\n\n.docs-footer-logo span a {\n    font-size: 16px;\n    padding: 0;\n    text-decoration: none;\n    color: inherit; }\n\n.docs-footer-logo span a:hover {\n      text-decoration: underline; }\n\n@media screen and (max-width: 884px) {\n  .docs-footer-list {\n    flex-direction: column; } }\n';

        /***/
      },

    /***/ './src/app/footer/footer.component.ts':
      /*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
      /*! exports provided: FooterComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'FooterComponent',
          function() {
            return FooterComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r =
                c < 3
                  ? target
                  : desc === null
                    ? (desc = Object.getOwnPropertyDescriptor(target, key))
                    : desc,
              d;
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.decorate === 'function'
            )
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                  r =
                    (c < 3
                      ? d(r)
                      : c > 3
                        ? d(target, key, r)
                        : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        var __metadata =
          (undefined && undefined.__metadata) ||
          function(k, v) {
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.metadata === 'function'
            )
              return Reflect.metadata(k, v);
          };

        var FooterComponent = /** @class */ (function() {
          function FooterComponent() {}
          FooterComponent.prototype.ngOnInit = function() {};
          FooterComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'app-footer',
                template: __webpack_require__(
                  /*! ./footer.component.html */ './src/app/footer/footer.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./footer.component.scss */ './src/app/footer/footer.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [])
            ],
            FooterComponent
          );
          return FooterComponent;
        })();

        /***/
      },

    /***/ './src/app/header/header.component.html':
      /*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<mat-toolbar class="mat-elevation-z2" color="primary">\r\n  <span>Projektmanagement</span>\r\n  <div class="header-left">\r\n    <button mat-raised-button class="matButton" routerLink=""><mat-icon>home</mat-icon></button>\r\n    <button mat-raised-button class="matButton" routerLink="/game">Spiel</button>\r\n    <button mat-raised-button class="matButton" routerLink="/rules">Regeln</button>\r\n  </div>\r\n  <div class="header-right">\r\n    <button mat-raised-button routerLink="/about">About</button>\r\n  </div>\r\n</mat-toolbar>\r\n';

        /***/
      },

    /***/ './src/app/header/header.component.scss':
      /*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '.header-left {\n  display: inline-block;\n  width: 90vw; }\n\n.header-right {\n  display: inline-block;\n  width: 10vw; }\n\n.matButton {\n  margin-left: 2vw; }\n';

        /***/
      },

    /***/ './src/app/header/header.component.ts':
      /*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
      /*! exports provided: HeaderComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'HeaderComponent',
          function() {
            return HeaderComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r =
                c < 3
                  ? target
                  : desc === null
                    ? (desc = Object.getOwnPropertyDescriptor(target, key))
                    : desc,
              d;
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.decorate === 'function'
            )
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                  r =
                    (c < 3
                      ? d(r)
                      : c > 3
                        ? d(target, key, r)
                        : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        var __metadata =
          (undefined && undefined.__metadata) ||
          function(k, v) {
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.metadata === 'function'
            )
              return Reflect.metadata(k, v);
          };

        var HeaderComponent = /** @class */ (function() {
          function HeaderComponent() {}
          HeaderComponent.prototype.ngOnInit = function() {};
          HeaderComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'app-header',
                template: __webpack_require__(
                  /*! ./header.component.html */ './src/app/header/header.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./header.component.scss */ './src/app/header/header.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [])
            ],
            HeaderComponent
          );
          return HeaderComponent;
        })();

        /***/
      },

    /***/ './src/app/material.module.ts':
      /*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
      /*! exports provided: MaterialModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'MaterialModule',
          function() {
            return MaterialModule;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/material/toolbar */ './node_modules/@angular/material/esm5/toolbar.es5.js'
        );
        /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/material/button */ './node_modules/@angular/material/esm5/button.es5.js'
        );
        /* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/material/card */ './node_modules/@angular/material/esm5/card.es5.js'
        );
        /* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @angular/material/progress-bar */ './node_modules/@angular/material/esm5/progress-bar.es5.js'
        );
        /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @angular/material/icon */ './node_modules/@angular/material/esm5/icon.es5.js'
        );
        /* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @angular/material/list */ './node_modules/@angular/material/esm5/list.es5.js'
        );
        /* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @angular/material/radio */ './node_modules/@angular/material/esm5/radio.es5.js'
        );
        /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! @angular/material/dialog */ './node_modules/@angular/material/esm5/dialog.es5.js'
        );
        /* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! @angular/material/form-field */ './node_modules/@angular/material/esm5/form-field.es5.js'
        );
        /* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! @angular/material/select */ './node_modules/@angular/material/esm5/select.es5.js'
        );
        /* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! @angular/material/expansion */ './node_modules/@angular/material/esm5/expansion.es5.js'
        );
        /*
    This file imports and exports all the components from Angular Material.
    This is done to keep the import statements in the project to a minimum.
*/
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r =
                c < 3
                  ? target
                  : desc === null
                    ? (desc = Object.getOwnPropertyDescriptor(target, key))
                    : desc,
              d;
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.decorate === 'function'
            )
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                  r =
                    (c < 3
                      ? d(r)
                      : c > 3
                        ? d(target, key, r)
                        : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };

        // Declares the Material Modules we want to use

        var MaterialModule = /** @class */ (function() {
          function MaterialModule() {}
          MaterialModule = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'])({
                imports: [
                  _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__[
                    'MatToolbarModule'
                  ],
                  _angular_material_button__WEBPACK_IMPORTED_MODULE_2__[
                    'MatButtonModule'
                  ],
                  _angular_material_card__WEBPACK_IMPORTED_MODULE_3__[
                    'MatCardModule'
                  ],
                  _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__[
                    'MatProgressBarModule'
                  ],
                  _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__[
                    'MatIconModule'
                  ],
                  _angular_material_list__WEBPACK_IMPORTED_MODULE_6__[
                    'MatListModule'
                  ],
                  _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__[
                    'MatRadioModule'
                  ],
                  _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__[
                    'MatDialogModule'
                  ],
                  _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__[
                    'MatFormFieldModule'
                  ],
                  _angular_material_select__WEBPACK_IMPORTED_MODULE_10__[
                    'MatSelectModule'
                  ],
                  _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__[
                    'MatExpansionModule'
                  ]
                ],
                exports: [
                  _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__[
                    'MatToolbarModule'
                  ],
                  _angular_material_button__WEBPACK_IMPORTED_MODULE_2__[
                    'MatButtonModule'
                  ],
                  _angular_material_card__WEBPACK_IMPORTED_MODULE_3__[
                    'MatCardModule'
                  ],
                  _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__[
                    'MatProgressBarModule'
                  ],
                  _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__[
                    'MatIconModule'
                  ],
                  _angular_material_list__WEBPACK_IMPORTED_MODULE_6__[
                    'MatListModule'
                  ],
                  _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__[
                    'MatRadioModule'
                  ],
                  _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__[
                    'MatDialogModule'
                  ],
                  _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__[
                    'MatFormFieldModule'
                  ],
                  _angular_material_select__WEBPACK_IMPORTED_MODULE_10__[
                    'MatSelectModule'
                  ],
                  _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__[
                    'MatExpansionModule'
                  ]
                ]
              })
            ],
            MaterialModule
          );
          return MaterialModule;
        })();

        /***/
      },

    /***/ './src/app/services/game-controller.service.ts':
      /*!*****************************************************!*\
  !*** ./src/app/services/game-controller.service.ts ***!
  \*****************************************************/
      /*! exports provided: GameControllerService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'GameControllerService',
          function() {
            return GameControllerService;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _shared_jobtitles_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../shared/jobtitles.enums */ './src/app/shared/jobtitles.enums.ts'
        );
        /* harmony import */ var _shared_stages_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../shared/stages.enums */ './src/app/shared/stages.enums.ts'
        );
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r =
                c < 3
                  ? target
                  : desc === null
                    ? (desc = Object.getOwnPropertyDescriptor(target, key))
                    : desc,
              d;
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.decorate === 'function'
            )
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                  r =
                    (c < 3
                      ? d(r)
                      : c > 3
                        ? d(target, key, r)
                        : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        var __metadata =
          (undefined && undefined.__metadata) ||
          function(k, v) {
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.metadata === 'function'
            )
              return Reflect.metadata(k, v);
          };

        var GameControllerService = /** @class */ (function() {
          function GameControllerService() {}
          /**
           * Sets the name of a player.
           *
           * @param player Player Object
           * @param name name
           */
          GameControllerService.prototype.setPlayerName = function(
            player,
            name
          ) {
            player.player = name;
            return player;
          };
          /**
           * Sets the amount of money to a set value.
           * @param player Player Object
           * @param money set amount of money;
           */
          GameControllerService.prototype.setPlayerMoney = function(
            player,
            money
          ) {
            player.money = money;
            return player;
          };
          /**
           * Changes the amount of money.
           *
           * @param player Player Object
           * @param amount how much money the player loses or receives
           */
          GameControllerService.prototype.changePlayerMoney = function(
            player,
            amount
          ) {
            player.money += amount;
            if (player.money < 0) {
              player.money = 0;
            }
            return player;
          };
          /**
           * Sets the Jobtitle.
           *
           * @param player Player Object
           * @param titleCode A number correspionding to the Jobtitle beginning at 0.
           */
          GameControllerService.prototype.setPlayerTitle = function(
            player,
            titleCode
          ) {
            player.titleCode = titleCode;
            player.title =
              _shared_jobtitles_enums__WEBPACK_IMPORTED_MODULE_1__['Jobtitles'][
                titleCode
              ];
            player.progress =
              titleCode *
              (100 /
                _shared_jobtitles_enums__WEBPACK_IMPORTED_MODULE_1__[
                  'Jobtitles'
                ].length());
            console.log(player);
            return player;
          };
          /**
           * Moves an Player up/down the carrier ladder.
           *
           * @param player Player Object
           * @param difference how many positions the player moves up / down
           */
          GameControllerService.prototype.changePlayerTitle = function(
            player,
            difference
          ) {
            var JobTitlesAmount = _shared_jobtitles_enums__WEBPACK_IMPORTED_MODULE_1__[
              'Jobtitles'
            ].length();
            if (
              player.titleCode + difference >= 0 &&
              player.titleCode < JobTitlesAmount
            ) {
              player.titleCode += difference;
              player.title =
                _shared_jobtitles_enums__WEBPACK_IMPORTED_MODULE_1__[
                  'Jobtitles'
                ][player.titleCode];
              player.progress += difference * (100 / JobTitlesAmount);
            } else {
              // Player === 'noob' || Player === 'God'
            }
            return player;
          };
          /**
           * Creates Player Objects
           *
           * @param playerCount count of player to be initiated
           */
          GameControllerService.prototype.initNewPlayers = function(
            playerCount
          ) {
            var players = [];
            for (var i = 0; i < playerCount; i++) {
              players.push({
                id: i,
                player: 'Spieler ' + (i + 1),
                title:
                  _shared_jobtitles_enums__WEBPACK_IMPORTED_MODULE_1__[
                    'Jobtitles'
                  ][0],
                titleCode: 0,
                money: 0,
                progress: 0
              });
            }
            // document.getElementById('grid').appendChild(``)
            return players;
          };
          /**
           * Moves the internal game stage state and the view progress bar by one.
           *
           * @param game Game Object
           */
          GameControllerService.prototype.incrementStageCount = function(game) {
            game.stage += 1;
            game.progress +=
              100 /
              _shared_stages_enums__WEBPACK_IMPORTED_MODULE_2__[
                'Stages'
              ].length();
            return game;
          };
          GameControllerService = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Injectable'])({
                providedIn: 'root'
              }),
              __metadata('design:paramtypes', [])
            ],
            GameControllerService
          );
          return GameControllerService;
        })();

        /***/
      },

    /***/ './src/app/shared/jobtitles.enums.ts':
      /*!*******************************************!*\
  !*** ./src/app/shared/jobtitles.enums.ts ***!
  \*******************************************/
      /*! exports provided: Jobtitles */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'Jobtitles',
          function() {
            return Jobtitles;
          }
        );
        var Jobtitles;
        (function(Jobtitles) {
          Jobtitles[(Jobtitles['Praktikant'] = 0)] = 'Praktikant';
          Jobtitles[(Jobtitles['Auszubildender'] = 1)] = 'Auszubildender';
          Jobtitles[(Jobtitles['Mitarbeiter'] = 2)] = 'Mitarbeiter';
          Jobtitles[(Jobtitles['SCRUM-Master'] = 3)] = 'SCRUM-Master';
          Jobtitles[(Jobtitles['Teamleiter'] = 4)] = 'Teamleiter';
          Jobtitles[(Jobtitles['Projektleiter'] = 5)] = 'Projektleiter';
          Jobtitles[(Jobtitles['Assistant-Manager'] = 6)] = 'Assistant-Manager';
          Jobtitles[(Jobtitles['Manager'] = 7)] = 'Manager';
          Jobtitles[(Jobtitles['Osterrieder'] = 8)] = 'Osterrieder';
        })(Jobtitles || (Jobtitles = {}));
        (function(Jobtitles) {
          function keys() {
            var keyArray = Object.keys(Jobtitles);
            return keyArray.slice(keyArray.length / 2, keyArray.length - 2);
          }
          Jobtitles.keys = keys;
          function length() {
            return Object.keys(Jobtitles).length / 2 - 2;
          }
          Jobtitles.length = length;
        })(Jobtitles || (Jobtitles = {}));

        /***/
      },

    /***/ './src/app/shared/stages.enums.ts':
      /*!****************************************!*\
  !*** ./src/app/shared/stages.enums.ts ***!
  \****************************************/
      /*! exports provided: Stages */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'Stages',
          function() {
            return Stages;
          }
        );
        var Stages;
        (function(Stages) {
          Stages[(Stages['Start'] = 0)] = 'Start';
          Stages[(Stages['Initiierung'] = 1)] = 'Initiierung';
          Stages[(Stages['Zielsetzung'] = 2)] = 'Zielsetzung';
          Stages[(Stages['Einrichtung'] = 3)] = 'Einrichtung';
          Stages[(Stages['Planung'] = 4)] = 'Planung';
          Stages[(Stages['Beschaffung'] = 5)] = 'Beschaffung';
          Stages[(Stages['Realisierung'] = 6)] = 'Realisierung';
          Stages[(Stages['Einf\u00FChrung'] = 7)] = 'Einf\u00FChrung';
          Stages[(Stages['Abnahme'] = 8)] = 'Abnahme';
          Stages[(Stages['Ende'] = 9)] = 'Ende';
        })(Stages || (Stages = {}));
        (function(Stages) {
          function keys() {
            var keyArray = Object.keys(Stages);
            return keyArray.slice(keyArray.length / 2 - 1, keyArray.length - 2);
          }
          Stages.keys = keys;
          function length() {
            console.log(Object.keys(Stages).length / 2 - 1);
            return Object.keys(Stages).length / 2 - 2;
          }
          Stages.length = length;
        })(Stages || (Stages = {}));

        /***/
      },

    /***/ './src/app/start-dialog/start-dialog.component.html':
      /*!**********************************************************!*\
  !*** ./src/app/start-dialog/start-dialog.component.html ***!
  \**********************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<form [formGroup]="form" (ngSubmit)="submit(form)">\r\n  <h1 mat-dialog-title>Wilkommen!</h1>\r\n  <mat-dialog-content>\r\n    Wie viele Spieler sollen mit spielen?\r\n    <mat-form-field>\r\n      <mat-select formControlName="numberOfPlayers" placeholder="Spielerzahl" disableRipple>\r\n        <mat-option [value]="1" >1</mat-option>\r\n        <mat-option [value]="2" >2</mat-option>\r\n        <mat-option [value]="3" >3</mat-option>\r\n        <mat-option [value]="4" >4</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n  </mat-dialog-content>\r\n  <mat-dialog-actions>\r\n    <button mat-raised-button type="submit" class="matButton">Los!</button>\r\n    <button mat-raised-button class="matButton" routerLink="/rules">Erklär mir erst die Regeln!</button>\r\n  </mat-dialog-actions>\r\n</form>';

        /***/
      },

    /***/ './src/app/start-dialog/start-dialog.component.scss':
      /*!**********************************************************!*\
  !*** ./src/app/start-dialog/start-dialog.component.scss ***!
  \**********************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = '';

        /***/
      },

    /***/ './src/app/start-dialog/start-dialog.component.ts':
      /*!********************************************************!*\
  !*** ./src/app/start-dialog/start-dialog.component.ts ***!
  \********************************************************/
      /*! exports provided: StartDialogComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'StartDialogComponent',
          function() {
            return StartDialogComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/material */ './node_modules/@angular/material/esm5/material.es5.js'
        );
        /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/forms */ './node_modules/@angular/forms/fesm5/forms.js'
        );
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r =
                c < 3
                  ? target
                  : desc === null
                    ? (desc = Object.getOwnPropertyDescriptor(target, key))
                    : desc,
              d;
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.decorate === 'function'
            )
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                  r =
                    (c < 3
                      ? d(r)
                      : c > 3
                        ? d(target, key, r)
                        : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        var __metadata =
          (undefined && undefined.__metadata) ||
          function(k, v) {
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.metadata === 'function'
            )
              return Reflect.metadata(k, v);
          };

        var StartDialogComponent = /** @class */ (function() {
          function StartDialogComponent(formBuilder, dialogRef) {
            this.formBuilder = formBuilder;
            this.dialogRef = dialogRef;
          }
          StartDialogComponent.prototype.ngOnInit = function() {
            this.form = this.formBuilder.group({
              numberOfPlayers: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__[
                'FormControl'
              ]()
            });
          };
          StartDialogComponent.prototype.submit = function(form) {
            this.dialogRef.close('' + form.value.numberOfPlayers);
          };
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(),
              __metadata('design:type', Number)
            ],
            StartDialogComponent.prototype,
            'numberOfPlayers',
            void 0
          );
          StartDialogComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'app-start-dialog',
                template: __webpack_require__(
                  /*! ./start-dialog.component.html */ './src/app/start-dialog/start-dialog.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./start-dialog.component.scss */ './src/app/start-dialog/start-dialog.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__['FormBuilder'],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__['MatDialogRef']
              ])
            ],
            StartDialogComponent
          );
          return StartDialogComponent;
        })();

        /***/
      },

    /***/ './src/app/views/about/about.component.html':
      /*!**************************************************!*\
  !*** ./src/app/views/about/about.component.html ***!
  \**************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div id="main__view">\r\n\r\n  <h1>- Spiel des PMs -</h1>\r\n\r\n  <div id="subtitle">Lerne was es bedeutet zu managen.</div>\r\n\r\n  <p>Dieses Spiel soll Dir, dem Spieler, einen Überblick über die verschiedenen Teile des Projektmanagements geben. \r\n    Wir freuen us auch über Gruppen, die vor dem Bildschirm um den Titel des besten Projektmanagers kämpfen wollen!</p>\r\n\r\n  <p>Das Spiel ist Ergebenis eines Projekts aus der Vorlesung \'Einführung in das Projektmanagemet\' an der DHBW Stuttgart innerhalb der Fakultät Technik. \r\n  </p>\r\n\r\n  <p>Gebaut wurde die Website Mit Angular 6.0, Angular Material, Karma und Jasmine.\r\n    Um die Webseite zu erstellen haben wir als zusätzliche Technologien noch Git und Adobe XD CC genutzt.\r\n  </p>\r\n\r\n  <p>Wir sind alle Studenten der Informatik an der DHBW Stuttgart im 2. Semester.</p>\r\n\r\n  <p>Zuletzt wünschen wir allen Benutzern viel Spaß und eine lehrreiche Zeit!</p>\r\n\r\n  <h4>Das Team.</h4>\r\n\r\n</div>\r\n';

        /***/
      },

    /***/ './src/app/views/about/about.component.scss':
      /*!**************************************************!*\
  !*** ./src/app/views/about/about.component.scss ***!
  \**************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '#main__view {\n  margin: 2rem auto;\n  max-width: 75%;\n  justify-content: center;\n  text-align: center; }\n\n#subtitle {\n  font-weight: 700;\n  margin: 0 0 1rem;\n  font-size: 1.25rem; }\n';

        /***/
      },

    /***/ './src/app/views/about/about.component.ts':
      /*!************************************************!*\
  !*** ./src/app/views/about/about.component.ts ***!
  \************************************************/
      /*! exports provided: AboutComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'AboutComponent',
          function() {
            return AboutComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r =
                c < 3
                  ? target
                  : desc === null
                    ? (desc = Object.getOwnPropertyDescriptor(target, key))
                    : desc,
              d;
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.decorate === 'function'
            )
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                  r =
                    (c < 3
                      ? d(r)
                      : c > 3
                        ? d(target, key, r)
                        : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        var __metadata =
          (undefined && undefined.__metadata) ||
          function(k, v) {
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.metadata === 'function'
            )
              return Reflect.metadata(k, v);
          };

        var AboutComponent = /** @class */ (function() {
          function AboutComponent() {}
          AboutComponent.prototype.ngOnInit = function() {};
          AboutComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'app-about',
                template: __webpack_require__(
                  /*! ./about.component.html */ './src/app/views/about/about.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./about.component.scss */ './src/app/views/about/about.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [])
            ],
            AboutComponent
          );
          return AboutComponent;
        })();

        /***/
      },

    /***/ './src/app/views/game/game.component.html':
      /*!************************************************!*\
  !*** ./src/app/views/game/game.component.html ***!
  \************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div id="main__view">\r\n  <div id="grid">\r\n\r\n    <app-player *ngFor="let player of players" [player]="player" [attr.id]="\'player\' + player.id"></app-player>\r\n\r\n    <div id="quiz">\r\n      <mat-card>\r\n        <mat-card-content>\r\n          <div id="quiz__header">\r\n            <h2>Quiz</h2>\r\n          </div>\r\n\r\n          <div id="quiz__question">\r\n            {{ question.question }}\r\n          </div>\r\n\r\n          <mat-radio-group id="quiz__options" [(ngModel)]="selectedAnswer">\r\n            <mat-radio-button class="quiz__options-radio-button" *ngFor="let option of question.options" [value]="option">\r\n              {{ option }}\r\n            </mat-radio-button>\r\n          </mat-radio-group>\r\n\r\n          <div id="quiz__buttons">\r\n            <button mat-button mat-raised-button color="primary" (click)="bribe()">Bestechen</button>\r\n            <button mat-button mat-raised-button color="primary" (click)="submit()">OK</button>\r\n          </div>\r\n\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n    <div id="progress">\r\n      <mat-card>\r\n        <mat-card-content id="progress__content">\r\n          <section id="progress__titles">\r\n            <div class="progress__titles-title" *ngFor="let stage of stages">\r\n              {{ stage }}\r\n            </div>\r\n          </section>\r\n          <section>\r\n            <mat-progress-bar class="example-margin " [color]="color " [mode]="mode " [value]="game.progress">\r\n            </mat-progress-bar>\r\n          </section>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n';

        /***/
      },

    /***/ './src/app/views/game/game.component.scss':
      /*!************************************************!*\
  !*** ./src/app/views/game/game.component.scss ***!
  \************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          "* {\n  color: #2c3e50; }\n\n#main__view {\n  width: 80vw;\n  height: auto; }\n\n#grid {\n  display: -ms-grid;\n  display: grid;\n      -ms-grid-columns: 2fr 1rem 1fr;\n      grid-template-columns: 2fr 1fr;\n  grid-gap: 1rem;\n      -ms-grid-rows: ;\n      grid-template-rows: repeat(auto-fit, minmax(1fr));\n      grid-template-areas: 'player0 quiz'\r 'player1 quiz'\r 'player2 quiz'\r 'player3 quiz'\r 'progress progress'; }\n\n#player0 {\n  -ms-grid-row: 1;\n  -ms-grid-column: 1;\n  grid-area: player0; }\n\n#player1 {\n  -ms-grid-row: 3;\n  -ms-grid-column: 1;\n  grid-area: player1; }\n\n#player2 {\n  -ms-grid-row: 5;\n  -ms-grid-column: 1;\n  grid-area: player2; }\n\n#player3 {\n  -ms-grid-row: 7;\n  -ms-grid-column: 1;\n  grid-area: player3; }\n\n#quiz {\n  -ms-grid-row: 1;\n  -ms-grid-row-span: 7;\n  -ms-grid-column: 3;\n  grid-area: quiz;\n  height: 100%;\n  min-height: 100%;\n  width: 100%; }\n\n#quiz__header {\n  text-align: center;\n  border-bottom: 1px solid #6978c99f;\n  margin: 2rem auto; }\n\n#quiz__options {\n  display: inline-flex;\n  flex-direction: column;\n  margin: 2rem auto; }\n\n.quiz__options-radio-button {\n  padding: 10px; }\n\n#quiz__option > * {\n  padding: 1rem; }\n\n#quiz__buttons {\n  display: flex;\n  justify-content: space-around;\n  margin: 2rem auto; }\n\n#progress {\n  -ms-grid-row: 9;\n  -ms-grid-column: 1;\n  -ms-grid-column-span: 3;\n  grid-area: progress; }\n\n#progress__titles {\n  margin: auto 0;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between; }\n\n.progress__titles-title {\n  margin: 1rem 0;\n  display: inline-block;\n  width: 2rem;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg); }\n\n.progress__titles--bold {\n  font-size: 150%;\n  font-weight: 600;\n  color: #3f51b5; }\n";

        /***/
      },

    /***/ './src/app/views/game/game.component.ts':
      /*!**********************************************!*\
  !*** ./src/app/views/game/game.component.ts ***!
  \**********************************************/
      /*! exports provided: GameComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'GameComponent',
          function() {
            return GameComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/material/dialog */ './node_modules/@angular/material/esm5/dialog.es5.js'
        );
        /* harmony import */ var _services_game_controller_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../services/game-controller.service */ './src/app/services/game-controller.service.ts'
        );
        /* harmony import */ var _shared_stages_enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../shared/stages.enums */ './src/app/shared/stages.enums.ts'
        );
        /* harmony import */ var _start_dialog_start_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../start-dialog/start-dialog.component */ './src/app/start-dialog/start-dialog.component.ts'
        );
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r =
                c < 3
                  ? target
                  : desc === null
                    ? (desc = Object.getOwnPropertyDescriptor(target, key))
                    : desc,
              d;
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.decorate === 'function'
            )
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                  r =
                    (c < 3
                      ? d(r)
                      : c > 3
                        ? d(target, key, r)
                        : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        var __metadata =
          (undefined && undefined.__metadata) ||
          function(k, v) {
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.metadata === 'function'
            )
              return Reflect.metadata(k, v);
          };

        var GameComponent = /** @class */ (function() {
          function GameComponent(controller, dialog) {
            this.controller = controller;
            this.dialog = dialog;
            // game object
            this.game = {
              stage: 0,
              progress: 0
            };
            // progress bar view
            this.color = 'primary';
            this.mode = 'determinate';
            this.stages = _shared_stages_enums__WEBPACK_IMPORTED_MODULE_3__[
              'Stages'
            ].keys();
            this.question = {
              question: 'Was ist der Sinn des Lebens?',
              options: ['42', 'Gutes Essen', 'Gott', 'Feder'],
              correctAnswer: 2,
              difficulty: 1
            };
          }
          GameComponent.prototype.ngOnInit = function() {};
          GameComponent.prototype.ngAfterViewInit = function() {
            var _this = this;
            setTimeout(function() {
              _this.startDialogRef = _this.dialog.open(
                _start_dialog_start_dialog_component__WEBPACK_IMPORTED_MODULE_4__[
                  'StartDialogComponent'
                ],
                {
                  width: '400px',
                  height: '400px'
                }
              );
              _this.startDialogRef.afterClosed().subscribe(function(r) {
                _this.players = _this.controller.initNewPlayers(r);
              });
            });
          };
          GameComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'app-game',
                template: __webpack_require__(
                  /*! ./game.component.html */ './src/app/views/game/game.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./game.component.scss */ './src/app/views/game/game.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [
                _services_game_controller_service__WEBPACK_IMPORTED_MODULE_2__[
                  'GameControllerService'
                ],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__[
                  'MatDialog'
                ]
              ])
            ],
            GameComponent
          );
          return GameComponent;
        })();

        /***/
      },

    /***/ './src/app/views/game/player/player.component.html':
      /*!*********************************************************!*\
  !*** ./src/app/views/game/player/player.component.html ***!
  \*********************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<mat-card class="player-container">\r\n  <div class="player-content-left">\r\n    <h2>\r\n      <mat-icon>person</mat-icon> {{ player.player }}: {{player.title}}</h2>\r\n    <mat-progress-bar class="player-progressBar" [color]="color" [mode]="mode" [value]=player.progress></mat-progress-bar>\r\n  </div>\r\n  <div class="player-content-right">\r\n    <h4 class="player-money-information">\r\n      <i class="material-icons player-bank">account_balance</i>{{ player.money }}\r\n      <i class="material-icons">euro_symbol</i>\r\n    </h4>\r\n  </div>\r\n</mat-card>\r\n';

        /***/
      },

    /***/ './src/app/views/game/player/player.component.scss':
      /*!*********************************************************!*\
  !*** ./src/app/views/game/player/player.component.scss ***!
  \*********************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '.player-container {\n  width: 100%; }\n\n.player-progressBar {\n  margin-top: 3vh; }\n\n.player-content-left {\n  width: 69%;\n  display: inline-block;\n  margin-right: 1%; }\n\n.player-content-right {\n  width: 29%;\n  height: 100%;\n  padding-left: 1%;\n  display: inline-block;\n  border-left: 1px solid black; }\n\n.player-money-information {\n  margin-bottom: 0; }\n\n.material-icons {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  vertical-align: middle;\n  padding-bottom: 4px; }\n\n.player-bank {\n  margin-right: 4vw;\n  margin-left: 1vw; }\n';

        /***/
      },

    /***/ './src/app/views/game/player/player.component.ts':
      /*!*******************************************************!*\
  !*** ./src/app/views/game/player/player.component.ts ***!
  \*******************************************************/
      /*! exports provided: PlayerComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'PlayerComponent',
          function() {
            return PlayerComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r =
                c < 3
                  ? target
                  : desc === null
                    ? (desc = Object.getOwnPropertyDescriptor(target, key))
                    : desc,
              d;
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.decorate === 'function'
            )
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                  r =
                    (c < 3
                      ? d(r)
                      : c > 3
                        ? d(target, key, r)
                        : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        var __metadata =
          (undefined && undefined.__metadata) ||
          function(k, v) {
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.metadata === 'function'
            )
              return Reflect.metadata(k, v);
          };

        var PlayerComponent = /** @class */ (function() {
          function PlayerComponent() {
            // Progress Bars
            this.color = 'primary';
            this.mode = 'determinate';
          }
          PlayerComponent.prototype.ngOnInit = function() {};
          __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'])(),
              __metadata('design:type', Object)
            ],
            PlayerComponent.prototype,
            'player',
            void 0
          );
          PlayerComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'app-player',
                template: __webpack_require__(
                  /*! ./player.component.html */ './src/app/views/game/player/player.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./player.component.scss */ './src/app/views/game/player/player.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [])
            ],
            PlayerComponent
          );
          return PlayerComponent;
        })();

        /***/
      },

    /***/ './src/app/views/home/home-menu/home-menu.component.html':
      /*!***************************************************************!*\
  !*** ./src/app/views/home/home-menu/home-menu.component.html ***!
  \***************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div id="main__menu">\r\n  <h1 id="title">Spiel des PMs!</h1>\r\n  <div class="subtitle">Manage dein Leben</div>\r\n\r\n  <div>\r\n    <a class="button" mat-button mat-raised-button color="primary" routerLink="/game">Los!</a>\r\n    <a class="button" mat-button mat-raised-button color="primary" routerLink="/rules">Regeln</a>\r\n  </div>\r\n';

        /***/
      },

    /***/ './src/app/views/home/home-menu/home-menu.component.scss':
      /*!***************************************************************!*\
  !*** ./src/app/views/home/home-menu/home-menu.component.scss ***!
  \***************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '#main__menu {\n  text-align: center; }\n\n#title {\n  font-size: 5rem; }\n\n.subtitle {\n  margin: 0 0 1rem;\n  font-size: 2rem;\n  display: inline-block; }\n\n.button {\n  min-width: 7rem;\n  margin: 2rem; }\n';

        /***/
      },

    /***/ './src/app/views/home/home-menu/home-menu.component.ts':
      /*!*************************************************************!*\
  !*** ./src/app/views/home/home-menu/home-menu.component.ts ***!
  \*************************************************************/
      /*! exports provided: HomeMenuComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'HomeMenuComponent',
          function() {
            return HomeMenuComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r =
                c < 3
                  ? target
                  : desc === null
                    ? (desc = Object.getOwnPropertyDescriptor(target, key))
                    : desc,
              d;
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.decorate === 'function'
            )
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                  r =
                    (c < 3
                      ? d(r)
                      : c > 3
                        ? d(target, key, r)
                        : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        var __metadata =
          (undefined && undefined.__metadata) ||
          function(k, v) {
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.metadata === 'function'
            )
              return Reflect.metadata(k, v);
          };

        var HomeMenuComponent = /** @class */ (function() {
          function HomeMenuComponent() {}
          HomeMenuComponent.prototype.ngOnInit = function() {};
          HomeMenuComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'app-home-menu',
                template: __webpack_require__(
                  /*! ./home-menu.component.html */ './src/app/views/home/home-menu/home-menu.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./home-menu.component.scss */ './src/app/views/home/home-menu/home-menu.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [])
            ],
            HomeMenuComponent
          );
          return HomeMenuComponent;
        })();

        /***/
      },

    /***/ './src/app/views/home/home.component.html':
      /*!************************************************!*\
  !*** ./src/app/views/home/home.component.html ***!
  \************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<div id="home">\r\n  <app-home-menu id="main__menu"></app-home-menu>\r\n</div>\r\n';

        /***/
      },

    /***/ './src/app/views/home/home.component.scss':
      /*!************************************************!*\
  !*** ./src/app/views/home/home.component.scss ***!
  \************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '#home {\n  width: 100vw;\n  height: 100%; }\n\n#main__menu {\n  display: flex;\n  height: 100%;\n  align-items: center;\n  justify-content: center; }\n';

        /***/
      },

    /***/ './src/app/views/home/home.component.ts':
      /*!**********************************************!*\
  !*** ./src/app/views/home/home.component.ts ***!
  \**********************************************/
      /*! exports provided: HomeComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'HomeComponent',
          function() {
            return HomeComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r =
                c < 3
                  ? target
                  : desc === null
                    ? (desc = Object.getOwnPropertyDescriptor(target, key))
                    : desc,
              d;
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.decorate === 'function'
            )
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                  r =
                    (c < 3
                      ? d(r)
                      : c > 3
                        ? d(target, key, r)
                        : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        var __metadata =
          (undefined && undefined.__metadata) ||
          function(k, v) {
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.metadata === 'function'
            )
              return Reflect.metadata(k, v);
          };

        var HomeComponent = /** @class */ (function() {
          function HomeComponent() {}
          HomeComponent.prototype.ngOnInit = function() {};
          HomeComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'app-home',
                template: __webpack_require__(
                  /*! ./home.component.html */ './src/app/views/home/home.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./home.component.scss */ './src/app/views/home/home.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [])
            ],
            HomeComponent
          );
          return HomeComponent;
        })();

        /***/
      },

    /***/ './src/app/views/rules/rules.component.html':
      /*!**************************************************!*\
  !*** ./src/app/views/rules/rules.component.html ***!
  \**************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<h1>- Regeln -</h1>\r\n<mat-accordion>\r\n  <mat-expansion-panel [expanded]="step === 0" (opened)="setStep(0)" hideToggle="true">\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>\r\n        <strong>Spielziel</strong>\r\n      </mat-panel-title>\r\n    </mat-expansion-panel-header>\r\n\r\n    <p>Dieses Spiel soll dir die Grundideen des Projektmanagements näherbringen, <br>\r\n      indem es dir und deinen Freunden zu verschiedenen Themen des Projektmanagements der Reihe nach Fragen stellt.<br>\r\n      Du kannst dieses Spiel auch alleine Spielen. Wir glauben aber, dass du mit ein paar Freunden zusammen mehr Spaß hast.</p>\r\n\r\n    <mat-action-row>\r\n      <button mat-button color="primary" (click)="nextStep()">Nächste</button>\r\n    </mat-action-row>\r\n  </mat-expansion-panel>\r\n\r\n  <mat-expansion-panel [expanded]="step === 1" (opened)="setStep(1)" hideToggle="true">\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>\r\n        <strong>Spielstart</strong>\r\n      </mat-panel-title>\r\n    </mat-expansion-panel-header>\r\n\r\n    <p>Das Spiel zu starten ist ganz einfach:<br>\r\n    Falls du einen halbwegs moderenen Browser hast navigierst du einfach zu der Spielansicht und schon geht es los.<br>\r\n    Beginne indem du die Spieleranzahl in das kleine PopUp einträgst. Solltest du hier mal einen Fehler machen ist das natürlich kein Problem.<br>\r\n    Navigiere einfach zurück und starte dann das Spiel neu, dann kannst du von vorne Beginnen. Im Zweifel lade diese Seite einfach neu.<br>\r\n    Danach beantwortet ihr einfach nacheinander eure erste Frage und schaut wer am besten ist!</p>\r\n\r\n    <mat-action-row>\r\n      <button mat-button color="warn" (click)="prevStep()">Zurück</button>\r\n      <button mat-button color="primary" (click)="nextStep()">Nächste</button>\r\n    </mat-action-row>\r\n  </mat-expansion-panel>\r\n\r\n  <mat-expansion-panel [expanded]="step === 2" (opened)="setStep(2)" hideToggle="true">\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          <strong>Interface</strong>\r\n        </mat-panel-title>\r\n      </mat-expansion-panel-header>\r\n  \r\n      <p>Links findet ihr euren persönlichen Bereich.<br>\r\n      Jeder von euch ist als Spieler dargestellt.<br>\r\n      Euer persönlicher Forschritt wird einmal im Jobtitel neben dem Namen festgehalten und in der Forschrittsbar.<br>\r\n      Unten findet ihr den gesamten Spielfortschritt und rechts den Fragenbereich.</p>\r\n      \r\n      <mat-action-row>\r\n        <button mat-button color="warn" (click)="prevStep()">Zurück</button>\r\n        <button mat-button color="primary" (click)="nextStep()">Nächste</button>\r\n      </mat-action-row>\r\n    </mat-expansion-panel>\r\n\r\n  <mat-expansion-panel [expanded]="step === 3" (opened)="setStep(3)" hideToggle="true">\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>\r\n        <strong>Spielrunde</strong>\r\n      </mat-panel-title>\r\n    </mat-expansion-panel-header>\r\n\r\n    <p>Eine Spielrunde läuft eigentlich immer gleich ab:<br>\r\n    Der erste Spieler beginnt und liest sich die Frage durch, die am linken Bildschirmrand angezeigt wird.<br>\r\n    Danach kann er in Ruhe eine der Antworten anwählen und bestätigt seine Auswahl.<br>\r\n    Denkt gut über eure Antwort nach. Bei einer falschen Antwort bekommt ihr von eurem Konto Geld abzogen und du wirst degradiert!<br>\r\n    Das Leben als Projektmanager ist hart, nur erfolgreiche Arbeit wird mit Gehalt und einer Beförderung belohnt.<br>\r\n    Wenn du wirklich nicht weiter weißt kannst du auch einfach dein bisher verdientes Geld dazu nutzen deinen Vorgesetzten zu bestechen,<br> \r\n      um eine Runde zu überspringen.</p>\r\n\r\n    <mat-action-row>\r\n      <button mat-button color="warn" (click)="prevStep()">Zurück</button>\r\n      <button mat-button color="primary" (click)="nextStep()">Ende</button>\r\n    </mat-action-row>\r\n  </mat-expansion-panel>\r\n\r\n</mat-accordion>';

        /***/
      },

    /***/ './src/app/views/rules/rules.component.scss':
      /*!**************************************************!*\
  !*** ./src/app/views/rules/rules.component.scss ***!
  \**************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = '';

        /***/
      },

    /***/ './src/app/views/rules/rules.component.ts':
      /*!************************************************!*\
  !*** ./src/app/views/rules/rules.component.ts ***!
  \************************************************/
      /*! exports provided: RulesComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'RulesComponent',
          function() {
            return RulesComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r =
                c < 3
                  ? target
                  : desc === null
                    ? (desc = Object.getOwnPropertyDescriptor(target, key))
                    : desc,
              d;
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.decorate === 'function'
            )
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                  r =
                    (c < 3
                      ? d(r)
                      : c > 3
                        ? d(target, key, r)
                        : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        var __metadata =
          (undefined && undefined.__metadata) ||
          function(k, v) {
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.metadata === 'function'
            )
              return Reflect.metadata(k, v);
          };

        var RulesComponent = /** @class */ (function() {
          function RulesComponent() {
            this.step = 0;
          }
          RulesComponent.prototype.ngOnInit = function() {};
          RulesComponent.prototype.setStep = function(index) {
            this.step = index;
          };
          RulesComponent.prototype.nextStep = function() {
            this.step++;
          };
          RulesComponent.prototype.prevStep = function() {
            this.step--;
          };
          RulesComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'app-rules',
                template: __webpack_require__(
                  /*! ./rules.component.html */ './src/app/views/rules/rules.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./rules.component.scss */ './src/app/views/rules/rules.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [])
            ],
            RulesComponent
          );
          return RulesComponent;
        })();

        /***/
      },

    /***/ './src/app/winner-dialog/winner-dialog.component.html':
      /*!************************************************************!*\
  !*** ./src/app/winner-dialog/winner-dialog.component.html ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports =
          '<h1 mat-dialog-title>Herzlichen Glückwunsch!</h1>\r\n<mat-dialog-content>\r\n  Gewonnen hat der Spieler: \r\n</mat-dialog-content>\r\n<mat-dialog-actions>\r\n  <button mat-raised-button class="matButton">Ok!</button>\r\n</mat-dialog-actions>';

        /***/
      },

    /***/ './src/app/winner-dialog/winner-dialog.component.scss':
      /*!************************************************************!*\
  !*** ./src/app/winner-dialog/winner-dialog.component.scss ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = '';

        /***/
      },

    /***/ './src/app/winner-dialog/winner-dialog.component.ts':
      /*!**********************************************************!*\
  !*** ./src/app/winner-dialog/winner-dialog.component.ts ***!
  \**********************************************************/
      /*! exports provided: WinnerDialogComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'WinnerDialogComponent',
          function() {
            return WinnerDialogComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        var __decorate =
          (undefined && undefined.__decorate) ||
          function(decorators, target, key, desc) {
            var c = arguments.length,
              r =
                c < 3
                  ? target
                  : desc === null
                    ? (desc = Object.getOwnPropertyDescriptor(target, key))
                    : desc,
              d;
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.decorate === 'function'
            )
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                  r =
                    (c < 3
                      ? d(r)
                      : c > 3
                        ? d(target, key, r)
                        : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        var __metadata =
          (undefined && undefined.__metadata) ||
          function(k, v) {
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.metadata === 'function'
            )
              return Reflect.metadata(k, v);
          };

        var WinnerDialogComponent = /** @class */ (function() {
          function WinnerDialogComponent() {}
          WinnerDialogComponent.prototype.ngOnInit = function() {};
          WinnerDialogComponent = __decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'])({
                selector: 'app-winner-dialog',
                template: __webpack_require__(
                  /*! ./winner-dialog.component.html */ './src/app/winner-dialog/winner-dialog.component.html'
                ),
                styles: [
                  __webpack_require__(
                    /*! ./winner-dialog.component.scss */ './src/app/winner-dialog/winner-dialog.component.scss'
                  )
                ]
              }),
              __metadata('design:paramtypes', [])
            ],
            WinnerDialogComponent
          );
          return WinnerDialogComponent;
        })();

        /***/
      },

    /***/ './src/environments/environment.ts':
      /*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
      /*! exports provided: environment */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'environment',
          function() {
            return environment;
          }
        );
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

        /***/
      },

    /***/ './src/main.ts':
      /*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/fesm5/core.js'
        );
        /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/platform-browser-dynamic */ './node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js'
        );
        /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./app/app.module */ './src/app/app.module.ts'
        );
        /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./environments/environment */ './src/environments/environment.ts'
        );

        if (
          _environments_environment__WEBPACK_IMPORTED_MODULE_3__['environment']
            .production
        ) {
          Object(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['enableProdMode']
          )();
        }
        Object(
          _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__[
            'platformBrowserDynamic'
          ]
        )()
          .bootstrapModule(
            _app_app_module__WEBPACK_IMPORTED_MODULE_2__['AppModule']
          )
          .catch(function(err) {
            return console.log(err);
          });

        /***/
      },

    /***/ 0:
      /*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! C:\Users\phucv\Documents\web\ProjectmanagmentMariusSunshine\PMGame\src\main.ts */ './src/main.ts'
        );

        /***/
      }
  },
  [[0, 'runtime', 'vendor']]
]);
//# sourceMappingURL=main.js.map
