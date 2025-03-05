import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendCoursesComponent } from './recommend-courses.component';

describe('RecommendCoursesComponent', () => {
  let component: RecommendCoursesComponent;
  let fixture: ComponentFixture<RecommendCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecommendCoursesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommendCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
