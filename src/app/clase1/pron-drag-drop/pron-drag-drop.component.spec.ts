import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PronDragDropComponent } from './pron-drag-drop.component';

describe('PronDragDropComponent', () => {
  let component: PronDragDropComponent;
  let fixture: ComponentFixture<PronDragDropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PronDragDropComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PronDragDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
