import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageShopListComponent } from './page-shop-list.component';

describe('PageShopListComponent', () => {
  let component: PageShopListComponent;
  let fixture: ComponentFixture<PageShopListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageShopListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageShopListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
