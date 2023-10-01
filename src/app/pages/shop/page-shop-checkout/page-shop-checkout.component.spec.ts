import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageShopCheckoutComponent } from './page-shop-checkout.component';

describe('PageShopCheckoutComponent', () => {
  let component: PageShopCheckoutComponent;
  let fixture: ComponentFixture<PageShopCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageShopCheckoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageShopCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
