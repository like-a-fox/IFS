
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { IFSDashboardComponent } from './ifsdashboard.component';

describe('IFSDashboardComponent', () => {
  let component: IFSDashboardComponent;
  let fixture: ComponentFixture<IFSDashboardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IFSDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IFSDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
