import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementsBox8Component } from './elements-box8.component';

describe('ElementsBox8Component', () => {
  let component: ElementsBox8Component;
  let fixture: ComponentFixture<ElementsBox8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementsBox8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementsBox8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
