import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToBeDrapDrpComponent } from './to-be-drap-drp.component';

describe('ToBeDrapDrpComponent', () => {
  let component: ToBeDrapDrpComponent;
  let fixture: ComponentFixture<ToBeDrapDrpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToBeDrapDrpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToBeDrapDrpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
