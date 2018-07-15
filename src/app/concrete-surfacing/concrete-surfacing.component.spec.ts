import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcreteSurfacingComponent } from './concrete-surfacing.component';

describe('ConcreteSurfacingComponent', () => {
  let component: ConcreteSurfacingComponent;
  let fixture: ComponentFixture<ConcreteSurfacingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcreteSurfacingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcreteSurfacingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
