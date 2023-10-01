import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageShopCartComponent } from './page-shop-cart.component';

describe('PageShopCartComponent', () => {
  let component: PageShopCartComponent;
  let fixture: ComponentFixture<PageShopCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageShopCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageShopCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
