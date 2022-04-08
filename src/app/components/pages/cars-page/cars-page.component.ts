import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cars-page',
  templateUrl: './cars-page.component.html',
  styleUrls: ['./cars-page.component.css'],
})
export class CarsPageComponent implements OnInit {
  colorName: any;
  brandName: any;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.brandName = this.activatedRoute.snapshot.paramMap.get('brandName');
    this.colorName = this.activatedRoute.snapshot.paramMap.get('colorName');
  }
}
