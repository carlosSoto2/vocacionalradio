import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionShopTabsComponent } from './section-shop-tabs.component';

describe('SectionShopTabsComponent', () => {
  let component: SectionShopTabsComponent;
  let fixture: ComponentFixture<SectionShopTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionShopTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionShopTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
