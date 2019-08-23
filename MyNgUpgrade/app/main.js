System.register(["@angular/platform-browser-dynamic", "ngRoute", "./app.module", "/Scripts/angjs"], function (exports_1, context_1) {
    "use strict";
    var platform_browser_dynamic_1, app_module_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (_1) {
            },
            function (app_module_1_1) {
                app_module_1 = app_module_1_1;
            },
            function (_2) {
            }
        ],
        execute: function () {
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
        }
    };
});
//# sourceMappingURL=main.js.map