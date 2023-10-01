import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementsBox9Component } from './elements-box9.component';

describe('ElementsBox9Component', () => {
  let component: ElementsBox9Component;
  let fixture: ComponentFixture<ElementsBox9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementsBox9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementsBox9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
