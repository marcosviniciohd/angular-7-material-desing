import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyBindingReviewComponent } from './property-binding-review.component';

describe('PropertyBindingReviewComponent', () => {
  let component: PropertyBindingReviewComponent;
  let fixture: ComponentFixture<PropertyBindingReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyBindingReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyBindingReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
