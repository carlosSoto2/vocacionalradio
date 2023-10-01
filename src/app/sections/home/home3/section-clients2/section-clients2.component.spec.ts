import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionClients2Component } from './section-clients2.component';

describe('SectionClients2Component', () => {
  let component: SectionClients2Component;
  let fixture: ComponentFixture<SectionClients2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionClients2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionClients2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
