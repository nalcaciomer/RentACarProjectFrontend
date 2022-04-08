import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandListComponent } from './components/brand-list/brand-list.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { ColorListComponent } from './components/color-list/color-list.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { RentalListComponent } from './components/rental-list/rental-list.component';
import { AdminDashboardComponent } from './components/pages/admin-dashboard/admin-dashboard.component';
import { CarDetailListComponent } from './components/car-detail-list/car-detail-list.component';
import { RentalDetailListComponent } from './components/rental-detail-list/rental-detail-list.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { NavbarComponent } from './components/layouts/navbar/navbar.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { CarsPageComponent } from './components/pages/cars-page/cars-page.component';
import { RentPageComponent } from './components/pages/rent-page/rent-page.component';
import { CarCardComponent } from './components/car-card/car-card.component';
import { CategoryBrandComponent } from './components/category-brand/category-brand.component';
import { CategoryColorComponent } from './components/category-color/category-color.component';
import { FilterColorPipe } from './pipes/filter-color.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BrandListComponent,
    CarListComponent,
    ColorListComponent,
    CustomerListComponent,
    RentalListComponent,
    AdminDashboardComponent,
    CarDetailListComponent,
    RentalDetailListComponent,
    HomepageComponent,
    NavbarComponent,
    FooterComponent,
    CarsPageComponent,
    RentPageComponent,
    CarCardComponent,
    CategoryBrandComponent,
    CategoryColorComponent,
    FilterColorPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
