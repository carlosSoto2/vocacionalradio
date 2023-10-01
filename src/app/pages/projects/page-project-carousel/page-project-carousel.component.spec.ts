import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProjectCarouselComponent } from './page-project-carousel.component';

describe('PageProjectCarouselComponent', () => {
  let component: PageProjectCarouselComponent;
  let fixture: ComponentFixture<PageProjectCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageProjectCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProjectCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
