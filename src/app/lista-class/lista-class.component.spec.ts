import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaClassComponent } from './lista-class.component';

describe('ListaClassComponent', () => {
  let component: ListaClassComponent;
  let fixture: ComponentFixture<ListaClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
