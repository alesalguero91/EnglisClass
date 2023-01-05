import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToBeRadioComponent } from './to-be-radio.component';

describe('ToBeRadioComponent', () => {
  let component: ToBeRadioComponent;
  let fixture: ComponentFixture<ToBeRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToBeRadioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToBeRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
