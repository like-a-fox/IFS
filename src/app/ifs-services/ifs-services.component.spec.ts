import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IfsServicesComponent } from './ifs-services.component';

describe('IfsServicesComponent', () => {
  let component: IfsServicesComponent;
  let fixture: ComponentFixture<IfsServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IfsServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IfsServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
