import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualProblemPageComponent } from './individual-problem-page.component';

describe('IndividualProblemPageComponent', () => {
  let component: IndividualProblemPageComponent;
  let fixture: ComponentFixture<IndividualProblemPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualProblemPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualProblemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
