import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import 'ngRoute';

import { AppModule } from './app.module';

import '/Scripts/angjs';

platformBrowserDynamic().bootstrapModule(AppModule);