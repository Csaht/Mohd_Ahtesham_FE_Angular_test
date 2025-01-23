import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LemonwarescardsComponent } from './lemonwarescards.component';

describe('LemonwarescardsComponent', () => {
  let component: LemonwarescardsComponent;
  let fixture: ComponentFixture<LemonwarescardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LemonwarescardsComponent]
    });
    fixture = TestBed.createComponent(LemonwarescardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
