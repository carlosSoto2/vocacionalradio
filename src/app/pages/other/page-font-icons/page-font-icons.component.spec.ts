import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFontIconsComponent } from './page-font-icons.component';

describe('PageFontIconsComponent', () => {
  let component: PageFontIconsComponent;
  let fixture: ComponentFixture<PageFontIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageFontIconsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFontIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
