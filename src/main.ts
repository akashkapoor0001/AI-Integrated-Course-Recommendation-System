import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'; // ✅ Correct Import
import { provideHttpClient } from '@angular/common/http'; // ✅ Add this line


bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), provideHttpClient()] // ✅ Use appRoutes
}).catch(err => console.error(err));
