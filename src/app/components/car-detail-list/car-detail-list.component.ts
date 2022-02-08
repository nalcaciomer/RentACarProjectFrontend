import { Component, OnInit } from '@angular/core';
import { CarDetail } from 'src/app/models/carDetail';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-detail-list',
  templateUrl: './car-detail-list.component.html',
  styleUrls: ['./car-detail-list.component.css'],
})
export class CarDetailListComponent implements OnInit {
  cars: CarDetail[] = [];

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.getCars();
  }

  getCars() {
    this.carService
      .getCarsDetails()
      .subscribe((response) => (this.cars = response.data));
  }
}
