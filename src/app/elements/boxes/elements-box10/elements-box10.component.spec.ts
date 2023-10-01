import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementsBox10Component } from './elements-box10.component';

describe('ElementsBox10Component', () => {
  let component: ElementsBox10Component;
  let fixture: ComponentFixture<ElementsBox10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementsBox10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementsBox10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
