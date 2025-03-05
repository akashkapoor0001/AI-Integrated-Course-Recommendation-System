import { ApplicationConfig } from '@angular/core';
import { routes } from './app.routes';  // ✅ Import correctly
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { FormsModule } from '@angular/forms'; // ✅ Import FormsModule here

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    provideHttpClient(withInterceptors([])),
    FormsModule,
  ]
};
