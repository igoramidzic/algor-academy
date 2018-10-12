import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualProblemComponent } from './individual-problem.component';

describe('IndividualProblemComponent', () => {
  let component: IndividualProblemComponent;
  let fixture: ComponentFixture<IndividualProblemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualProblemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
