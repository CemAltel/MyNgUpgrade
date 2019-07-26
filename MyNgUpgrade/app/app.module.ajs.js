System.register(["@angular/upgrade/static"], function (exports_1, context_1) {
    "use strict";
    var static_1, moduleName, angjs, myApp;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (static_1_1) {
                static_1 = static_1_1;
            }
        ],
        execute: function () {
            exports_1("moduleName", moduleName = 'myApp');
            angjs = static_1.getAngularJSGlobal();
            myApp = angjs.module(moduleName, []); // TODO: config
        }
    };
});
//# sourceMappingURL=app.module.ajs.js.map