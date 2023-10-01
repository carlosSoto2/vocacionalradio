import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementsBox7Component } from './elements-box7.component';

describe('ElementsBox7Component', () => {
  let component: ElementsBox7Component;
  let fixture: ComponentFixture<ElementsBox7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementsBox7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementsBox7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
