import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDetailListComponent } from './car-detail-list.component';

describe('CarDetailListComponent', () => {
  let component: CarDetailListComponent;
  let fixture: ComponentFixture<CarDetailListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarDetailListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarDetailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
