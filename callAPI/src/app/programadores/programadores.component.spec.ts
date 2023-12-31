import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramadoresComponent } from './programadores.component';

describe('ProgramadoresComponent', () => {
  let component: ProgramadoresComponent;
  let fixture: ComponentFixture<ProgramadoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgramadoresComponent]
    });
    fixture = TestBed.createComponent(ProgramadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
