import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremimumWebHostingComponent } from './premimum-web-hosting.component';

describe('PremimumWebHostingComponent', () => {
  let component: PremimumWebHostingComponent;
  let fixture: ComponentFixture<PremimumWebHostingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PremimumWebHostingComponent]
    });
    fixture = TestBed.createComponent(PremimumWebHostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
