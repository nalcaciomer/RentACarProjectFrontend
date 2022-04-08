import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarImage } from '../models/carImage';
import { CarImageDetail } from '../models/carImageDetail';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarImageService {
  apiUrl = `${environment.apiUrl}/carimages`;

  constructor(private httpClient: HttpClient) {}

  getCarImageByCarId(carId: number): Observable<ListResponseModel<CarImage>> {
    return this.httpClient.get<ListResponseModel<CarImage>>(
      `${this.apiUrl}/getbycarid?carId=${carId}`
    );
  }

  getCarImageDetails(): Observable<ListResponseModel<CarImageDetail>> {
    return this.httpClient.get<ListResponseModel<CarImageDetail>>(
      `${this.apiUrl}/getdetails`
    );
  }
}
