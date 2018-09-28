import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHeaderNavComponent } from './page-header-nav.component';

describe('PageHeaderNavComponent', () => {
  let component: PageHeaderNavComponent;
  let fixture: ComponentFixture<PageHeaderNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageHeaderNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHeaderNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
