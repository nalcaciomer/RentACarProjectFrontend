import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Car } from '../models/car';
import { CarDetail } from '../models/carDetail';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = `${environment.apiUrl}/cars`;

  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<ListResponseModel<Car>> {
    return this.httpClient.get<ListResponseModel<Car>>(`${this.apiUrl}/getall`);
  }

  getCarsDetails(): Observable<ListResponseModel<CarDetail>> {
    return this.httpClient.get<ListResponseModel<CarDetail>>(
      `${this.apiUrl}/getdetails`
    );
  }

  getCarsDetailsByBrand(
    brandName: string
  ): Observable<ListResponseModel<CarDetail>> {
    return this.httpClient.get<ListResponseModel<CarDetail>>(
      `${this.apiUrl}/getdetailsbybrandName?name=${brandName}`
    );
  }

  getCarsDetailsByColor(
    colorName: string
  ): Observable<ListResponseModel<CarDetail>> {
    return this.httpClient.get<ListResponseModel<CarDetail>>(
      `${this.apiUrl}/getdetailsbycolorname?name=${colorName}`
    );
  }
}
