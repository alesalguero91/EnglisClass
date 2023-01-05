import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToBeInputComponent } from './to-be-input.component';

describe('ToBeInputComponent', () => {
  let component: ToBeInputComponent;
  let fixture: ComponentFixture<ToBeInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToBeInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToBeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
