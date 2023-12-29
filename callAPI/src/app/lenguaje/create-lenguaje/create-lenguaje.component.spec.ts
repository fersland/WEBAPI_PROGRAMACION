import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLenguajeComponent } from './create-lenguaje.component';

describe('CreateLenguajeComponent', () => {
  let component: CreateLenguajeComponent;
  let fixture: ComponentFixture<CreateLenguajeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateLenguajeComponent]
    });
    fixture = TestBed.createComponent(CreateLenguajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
