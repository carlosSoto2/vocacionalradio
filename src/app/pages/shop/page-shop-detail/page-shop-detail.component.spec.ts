import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageShopDetailComponent } from './page-shop-detail.component';

describe('PageShopDetailComponent', () => {
  let component: PageShopDetailComponent;
  let fixture: ComponentFixture<PageShopDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageShopDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageShopDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
