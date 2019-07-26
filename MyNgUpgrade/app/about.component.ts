import { Component } from '@angular/core';

@Component({
	templateUrl: 'about/index'
})
export class AboutComponent {
	name = 'Info and whatnot';

	constructor() {
		console.log('entered about component');
	}
}
