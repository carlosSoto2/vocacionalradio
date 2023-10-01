import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementsBox2Component } from './elements-box2.component';

describe('ElementsBox2Component', () => {
  let component: ElementsBox2Component;
  let fixture: ComponentFixture<ElementsBox2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementsBox2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementsBox2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
