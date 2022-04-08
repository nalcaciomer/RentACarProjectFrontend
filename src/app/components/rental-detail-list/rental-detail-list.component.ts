import { Component, OnInit } from '@angular/core';
import { RentalDetail } from 'src/app/models/rentalDetail';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental-detail-list',
  templateUrl: './rental-detail-list.component.html',
  styleUrls: ['./rental-detail-list.component.css'],
})
export class RentalDetailListComponent implements OnInit {
  rentals: RentalDetail[] = [];

  constructor(private rentalService: RentalService) {}

  ngOnInit(): void {
    this.getRentals();
  }

  getRentals() {
    this.rentalService
      .getRentalsDetails()
      .subscribe((response) => (this.rentals = response.data));
  }
}
