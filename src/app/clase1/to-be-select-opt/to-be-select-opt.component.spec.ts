import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToBeSelectOptComponent } from './to-be-select-opt.component';

describe('ToBeSelectOptComponent', () => {
  let component: ToBeSelectOptComponent;
  let fixture: ComponentFixture<ToBeSelectOptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToBeSelectOptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToBeSelectOptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
