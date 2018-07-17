import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IfsGalleryComponent } from './ifs-gallery.component';

describe('IfsGalleryComponent', () => {
  let component: IfsGalleryComponent;
  let fixture: ComponentFixture<IfsGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IfsGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IfsGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
