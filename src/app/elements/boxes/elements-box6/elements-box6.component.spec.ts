import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementsBox6Component } from './elements-box6.component';

describe('ElementsBox6Component', () => {
  let component: ElementsBox6Component;
  let fixture: ComponentFixture<ElementsBox6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementsBox6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementsBox6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
