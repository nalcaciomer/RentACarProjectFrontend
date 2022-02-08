import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { RentalDetail } from '../models/rentalDetail';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  apiUrl = `${environment.apiUrl}/rentals`;

  constructor(private httpClient: HttpClient) {}

  getRentals(): Observable<ListResponseModel<Rental>> {
    return this.httpClient.get<ListResponseModel<Rental>>(
      `${this.apiUrl}/getall`
    );
  }

  getRentalsDetails(): Observable<ListResponseModel<RentalDetail>> {
    return this.httpClient.get<ListResponseModel<RentalDetail>>(
      `${this.apiUrl}/getdetails`
    );
  }
}
