import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainProblemsPageComponent } from './main-problems-page.component';

describe('MainProblemsPageComponent', () => {
  let component: MainProblemsPageComponent;
  let fixture: ComponentFixture<MainProblemsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainProblemsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainProblemsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
