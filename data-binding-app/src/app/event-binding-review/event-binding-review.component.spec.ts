import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBindingReviewComponent } from './event-binding-review.component';

describe('EventBindingReviewComponent', () => {
  let component: EventBindingReviewComponent;
  let fixture: ComponentFixture<EventBindingReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventBindingReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventBindingReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
