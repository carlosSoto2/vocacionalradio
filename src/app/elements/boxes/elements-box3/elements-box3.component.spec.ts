import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementsBox3Component } from './elements-box3.component';

describe('ElementsBox3Component', () => {
  let component: ElementsBox3Component;
  let fixture: ComponentFixture<ElementsBox3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementsBox3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementsBox3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
