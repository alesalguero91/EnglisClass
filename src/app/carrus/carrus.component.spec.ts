import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrusComponent } from './carrus.component';

describe('CarrusComponent', () => {
  let component: CarrusComponent;
  let fixture: ComponentFixture<CarrusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
