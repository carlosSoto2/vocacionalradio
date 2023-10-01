import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageShopGridComponent } from './page-shop-grid.component';

describe('PageShopGridComponent', () => {
  let component: PageShopGridComponent;
  let fixture: ComponentFixture<PageShopGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageShopGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageShopGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
