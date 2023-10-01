import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProjectGrid3ColsNogutComponent } from './page-project-grid3-cols-nogut.component';

describe('PageProjectGrid3ColsNogutComponent', () => {
  let component: PageProjectGrid3ColsNogutComponent;
  let fixture: ComponentFixture<PageProjectGrid3ColsNogutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageProjectGrid3ColsNogutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProjectGrid3ColsNogutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
