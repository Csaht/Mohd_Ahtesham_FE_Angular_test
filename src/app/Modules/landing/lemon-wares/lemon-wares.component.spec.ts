import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LemonWaresComponent } from './lemon-wares.component';

describe('LemonWaresComponent', () => {
  let component: LemonWaresComponent;
  let fixture: ComponentFixture<LemonWaresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LemonWaresComponent]
    });
    fixture = TestBed.createComponent(LemonWaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
