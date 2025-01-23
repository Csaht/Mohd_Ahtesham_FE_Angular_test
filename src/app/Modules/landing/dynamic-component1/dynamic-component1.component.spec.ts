import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicComponent1Component } from './dynamic-component1.component';

describe('DynamicComponent1Component', () => {
  let component: DynamicComponent1Component;
  let fixture: ComponentFixture<DynamicComponent1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicComponent1Component]
    });
    fixture = TestBed.createComponent(DynamicComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
