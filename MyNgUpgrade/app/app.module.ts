import { NgModule, ComponentFactoryResolver, ApplicationRef, Type } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { moduleName } from './app.module.ajs';

import { AppComponent }  from './app.component';
import { HomeComponent }  from './home.component';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact.component';
import { MenuComponent } from './menu.component';


const appRoutes: Routes = [
	{ path: 'Home', component: HomeComponent },
	{ path: 'About', component: AboutComponent },
	{ path: 'Contact', component: ContactComponent },
	{ path: '', redirectTo: 'Home', pathMatch: 'full' },
	{ path: '**', component: AppComponent }
];

const components = [AppComponent, HomeComponent, AboutComponent, ContactComponent, MenuComponent];

@NgModule({
	imports: [BrowserModule, FormsModule, RouterModule, UpgradeModule,
		RouterModule.forRoot(appRoutes,
			//{ enableTracing: true } // <-- debugging purposes only
		)],
	declarations: components,
	entryComponents: [MenuComponent]
})
export class AppModule {
	constructor(private upgrade: UpgradeModule, private resolver: ComponentFactoryResolver) {}

	ngDoBootstrap(appRef: ApplicationRef) {	
		this.upgrade.bootstrap(document.documentElement, [moduleName]);

		components.forEach((componentDef: Type<{}>) => {
			const factory = this.resolver.resolveComponentFactory(componentDef);
			if (document.querySelector(factory.selector)) {
				appRef.bootstrap(factory);		// bootstrap only the components present in the view
			}
		});
	}
}
