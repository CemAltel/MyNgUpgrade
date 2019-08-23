import { Component } from '@angular/core';

@Component({
	selector: 'my-menu',
	template: `<a class="nav-link" routerLink="/Home" routerLinkActive="active">Home</a>
				<a class="nav-link" routerLink="/About" routerLinkActive="active">About</a>
				<a class="nav-link" routerLink="/Contact" routerLinkActive="active">Contact</a>
				<a class="nav-link" routerLink="/Claims" routerLinkActive="active">Claims</a>`,
})
export class MenuComponent {
	constructor() {
		console.log('entered menu component');
	}
}