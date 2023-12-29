import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLenguajeComponent } from './edit-lenguaje.component';

describe('EditLenguajeComponent', () => {
  let component: EditLenguajeComponent;
  let fixture: ComponentFixture<EditLenguajeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditLenguajeComponent]
    });
    fixture = TestBed.createComponent(EditLenguajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
