import { getAngularJSGlobal } from '@angular/upgrade/static';

export const moduleName = 'myApp';

const angjs = getAngularJSGlobal();

const myApp = angjs.module(moduleName, ['ngRoute']);

myApp.config(["$routeProvider", "$locationProvider", function ($routeProvider: { when: (route: string, resolution: { templateUrl: string; controller: string; resolve?: any }) => any }, $locationProvider: any) {
	$routeProvider
		.when('/Claims', { templateUrl: 'claims/claimslist', controller: 'claimsController' })
		.otherwise({ redirectTo: '/Home' });

	$locationProvider.html5Mode(true);
	$locationProvider.hashPrefix('!');
}]);