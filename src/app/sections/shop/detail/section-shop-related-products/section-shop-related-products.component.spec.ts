import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionShopRelatedProductsComponent } from './section-shop-related-products.component';

describe('SectionShopRelatedProductsComponent', () => {
  let component: SectionShopRelatedProductsComponent;
  let fixture: ComponentFixture<SectionShopRelatedProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionShopRelatedProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionShopRelatedProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
