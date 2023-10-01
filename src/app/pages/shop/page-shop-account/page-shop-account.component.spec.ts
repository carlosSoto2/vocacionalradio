import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageShopAccountComponent } from './page-shop-account.component';

describe('PageShopAccountComponent', () => {
  let component: PageShopAccountComponent;
  let fixture: ComponentFixture<PageShopAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageShopAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageShopAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
