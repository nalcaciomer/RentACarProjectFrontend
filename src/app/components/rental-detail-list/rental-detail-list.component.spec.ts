import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalDetailListComponent } from './rental-detail-list.component';

describe('RentalDetailListComponent', () => {
  let component: RentalDetailListComponent;
  let fixture: ComponentFixture<RentalDetailListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentalDetailListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalDetailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
