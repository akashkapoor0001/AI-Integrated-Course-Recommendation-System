import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AllCoursesComponent } from './pages/all-courses/all-courses.component';
import { RecommendCoursesComponent } from './pages/recommend-courses/recommend-courses.component';

// export const appRoutes: Routes = [  // ✅ Correct export
//   { path: '', component: LoginComponent },
//   { path: 'home', component: HomepageComponent, children: [
//       { path: '', redirectTo: 'all-courses', pathMatch: 'full' },
//       { path: 'all-courses', component: AllCoursesComponent },
//       { path: 'recommend-courses', component: RecommendCoursesComponent },
//   ] },
// ];


export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'home', component: HomepageComponent },
    { path: '', component: HomepageComponent },
    { path: 'all-courses', component: AllCoursesComponent },
    { path: 'recommend-courses', component: RecommendCoursesComponent },
  ];
  