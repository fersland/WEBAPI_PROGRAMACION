import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLenguajeComponent } from './list-lenguaje.component';

describe('ListLenguajeComponent', () => {
  let component: ListLenguajeComponent;
  let fixture: ComponentFixture<ListLenguajeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListLenguajeComponent]
    });
    fixture = TestBed.createComponent(ListLenguajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
