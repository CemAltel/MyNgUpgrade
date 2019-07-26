import { Component } from '@angular/core';

@Component({
	templateUrl: 'contact/index'
})
export class ContactComponent {
	name = 'Some contact stuff';

	constructor() {
		console.log('entered Contact component');
	}
}
