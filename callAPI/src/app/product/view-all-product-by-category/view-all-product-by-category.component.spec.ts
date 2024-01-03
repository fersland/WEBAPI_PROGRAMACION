import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllProductByCategoryComponent } from './view-all-product-by-category.component';

describe('ViewAllProductByCategoryComponent', () => {
  let component: ViewAllProductByCategoryComponent;
  let fixture: ComponentFixture<ViewAllProductByCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAllProductByCategoryComponent]
    });
    fixture = TestBed.createComponent(ViewAllProductByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
