import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProjectGrid4ColsNogutComponent } from './page-project-grid4-cols-nogut.component';

describe('PageProjectGrid4ColsNogutComponent', () => {
  let component: PageProjectGrid4ColsNogutComponent;
  let fixture: ComponentFixture<PageProjectGrid4ColsNogutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageProjectGrid4ColsNogutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProjectGrid4ColsNogutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
