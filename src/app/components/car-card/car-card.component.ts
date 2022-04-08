import { Component, Input, OnInit } from '@angular/core';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.css'],
})
export class CarCardComponent implements OnInit {
  cars: CarDetail[] = [];
  images: { keyCarId: number; carImage: CarImage }[] = [];
  imageApiUrl = 'https://localhost:5001/';
  activeBrandName? = '';
  activeColorName? = '';
  @Input() filterBrand: string;
  @Input() filterColor: string;

  constructor(
    private carService: CarService,
    private carImageService: CarImageService
  ) {}

  ngOnInit(): void {
    if (this.filterBrand) {
      this.getCarsByBrand();
    } else if (this.filterColor) {
      this.getCarsByColor();
    } else {
      this.getCars();
    }
  }

  getCars() {
    this.carService.getCarsDetails().subscribe((response) => {
      this.cars = response.data;
      for (const car of this.cars) {
        this.carImageService
          .getCarImageByCarId(car.id)
          .subscribe((responseImage) =>
            this.images.push({
              keyCarId: car.id,
              carImage: responseImage.data[0],
            })
          );
      }
    });
  }

  getCarsByBrand() {
    this.carService
      .getCarsDetailsByBrand(this.filterBrand)
      .subscribe((response) => {
        this.cars = response.data;
        for (const car of this.cars) {
          this.carImageService
            .getCarImageByCarId(car.id)
            .subscribe((responseImage) =>
              this.images.push({
                keyCarId: car.id,
                carImage: responseImage.data[0],
              })
            );
        }
      });
  }

  getCarsByColor() {
    this.carService
      .getCarsDetailsByColor(this.filterColor)
      .subscribe((response) => {
        this.cars = response.data;
        for (const car of this.cars) {
          this.carImageService
            .getCarImageByCarId(car.id)
            .subscribe((responseImage) =>
              this.images.push({
                keyCarId: car.id,
                carImage: responseImage.data[0],
              })
            );
        }
      });
  }

  getImageUrl(carId: number) {
    let imagePath = this.images.find(({ keyCarId }) => keyCarId === carId)
      ?.carImage.imagePath;

    return imagePath;
  }
}
