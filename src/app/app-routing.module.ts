import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/pages/admin-dashboard/admin-dashboard.component';
import { CarsPageComponent } from './components/pages/cars-page/cars-page.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { RentPageComponent } from './components/pages/rent-page/rent-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomepageComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'cars', component: CarsPageComponent },
  { path: 'cars/color/:colorName', component: CarsPageComponent },
  { path: 'cars/brand/:brandName', component: CarsPageComponent },
  { path: 'rental', component: RentPageComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
