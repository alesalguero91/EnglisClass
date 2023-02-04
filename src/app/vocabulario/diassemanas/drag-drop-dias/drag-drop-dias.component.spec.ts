import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragDropDiasComponent } from './drag-drop-dias.component';

describe('DragDropDiasComponent', () => {
  let component: DragDropDiasComponent;
  let fixture: ComponentFixture<DragDropDiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragDropDiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragDropDiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
