import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementsBox5Component } from './elements-box5.component';

describe('ElementsBox5Component', () => {
  let component: ElementsBox5Component;
  let fixture: ComponentFixture<ElementsBox5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementsBox5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementsBox5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
