import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementsBox1Component } from './elements-box1.component';

describe('ElementsBox1Component', () => {
  let component: ElementsBox1Component;
  let fixture: ComponentFixture<ElementsBox1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementsBox1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementsBox1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
