
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { IFSTableComponent } from './ifstable.component';

describe('IFSTableComponent', () => {
  let component: IFSTableComponent;
  let fixture: ComponentFixture<IFSTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IFSTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IFSTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
