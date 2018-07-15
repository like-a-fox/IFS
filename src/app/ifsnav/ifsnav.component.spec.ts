
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { IFSNavComponent } from './ifsnav.component';

describe('IFSNavComponent', () => {
  let component: IFSNavComponent;
  let fixture: ComponentFixture<IFSNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [IFSNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IFSNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
