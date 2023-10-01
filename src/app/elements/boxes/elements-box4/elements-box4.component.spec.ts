import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementsBox4Component } from './elements-box4.component';

describe('ElementsBox4Component', () => {
  let component: ElementsBox4Component;
  let fixture: ComponentFixture<ElementsBox4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementsBox4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementsBox4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
