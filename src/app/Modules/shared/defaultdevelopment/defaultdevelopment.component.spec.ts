import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultdevelopmentComponent } from './defaultdevelopment.component';

describe('DefaultdevelopmentComponent', () => {
  let component: DefaultdevelopmentComponent;
  let fixture: ComponentFixture<DefaultdevelopmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DefaultdevelopmentComponent]
    });
    fixture = TestBed.createComponent(DefaultdevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
