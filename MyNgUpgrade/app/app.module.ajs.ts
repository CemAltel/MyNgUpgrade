import { getAngularJSGlobal } from '@angular/upgrade/static';

export const moduleName = 'myApp';

const angjs = getAngularJSGlobal();

const myApp = angjs.module(moduleName, []);		// TODO: config