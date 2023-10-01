import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementsBox11Component } from './elements-box11.component';

describe('ElementsBox11Component', () => {
  let component: ElementsBox11Component;
  let fixture: ComponentFixture<ElementsBox11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementsBox11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementsBox11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
