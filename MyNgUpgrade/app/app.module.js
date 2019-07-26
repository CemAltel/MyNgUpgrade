System.register(["@angular/core", "@angular/platform-browser", "@angular/upgrade/static", "@angular/forms", "@angular/router", "./app.module.ajs", "./app.component", "./home.component", "./about.component", "./contact.component", "./menu.component"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, platform_browser_1, static_1, forms_1, router_1, app_module_ajs_1, app_component_1, home_component_1, about_component_1, contact_component_1, menu_component_1, appRoutes, components, AppModule;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (static_1_1) {
                static_1 = static_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_module_ajs_1_1) {
                app_module_ajs_1 = app_module_ajs_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            },
            function (contact_component_1_1) {
                contact_component_1 = contact_component_1_1;
            },
            function (menu_component_1_1) {
                menu_component_1 = menu_component_1_1;
            }
        ],
        execute: function () {
            appRoutes = [
                { path: 'Home', component: home_component_1.HomeComponent },
                { path: 'About', component: about_component_1.AboutComponent },
                { path: 'Contact', component: contact_component_1.ContactComponent },
                { path: '', redirectTo: 'Home', pathMatch: 'full' },
                { path: '**', component: app_component_1.AppComponent }
            ];
            components = [app_component_1.AppComponent, home_component_1.HomeComponent, about_component_1.AboutComponent, contact_component_1.ContactComponent, menu_component_1.MenuComponent];
            AppModule = /** @class */ (function () {
                function AppModule(upgrade, resolver) {
                    this.upgrade = upgrade;
                    this.resolver = resolver;
                }
                AppModule.prototype.ngDoBootstrap = function (appRef) {
                    var _this = this;
                    this.upgrade.bootstrap(document.documentElement, [app_module_ajs_1.moduleName]);
                    components.forEach(function (componentDef) {
                        var factory = _this.resolver.resolveComponentFactory(componentDef);
                        if (document.querySelector(factory.selector)) {
                            appRef.bootstrap(factory); // bootstrap only the components present in the view
                        }
                    });
                };
                AppModule = __decorate([
                    core_1.NgModule({
                        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, router_1.RouterModule, static_1.UpgradeModule,
                            router_1.RouterModule.forRoot(appRoutes)],
                        declarations: components,
                        entryComponents: [menu_component_1.MenuComponent]
                    }),
                    __metadata("design:paramtypes", [static_1.UpgradeModule, core_1.ComponentFactoryResolver])
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
        }
    };
});
//# sourceMappingURL=app.module.js.map