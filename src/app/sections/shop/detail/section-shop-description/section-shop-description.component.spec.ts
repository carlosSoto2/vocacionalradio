import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionShopDescriptionComponent } from './section-shop-description.component';

describe('SectionShopDescriptionComponent', () => {
  let component: SectionShopDescriptionComponent;
  let fixture: ComponentFixture<SectionShopDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionShopDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionShopDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
