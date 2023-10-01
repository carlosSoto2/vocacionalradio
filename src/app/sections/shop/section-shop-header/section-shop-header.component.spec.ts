import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionShopHeaderComponent } from './section-shop-header.component';

describe('SectionShopHeaderComponent', () => {
  let component: SectionShopHeaderComponent;
  let fixture: ComponentFixture<SectionShopHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionShopHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionShopHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
