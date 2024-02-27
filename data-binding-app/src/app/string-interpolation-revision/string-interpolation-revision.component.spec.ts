import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringInterpolationRevisionComponent } from './string-interpolation-revision.component';

describe('StringInterpolationRevisionComponent', () => {
  let component: StringInterpolationRevisionComponent;
  let fixture: ComponentFixture<StringInterpolationRevisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StringInterpolationRevisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StringInterpolationRevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
