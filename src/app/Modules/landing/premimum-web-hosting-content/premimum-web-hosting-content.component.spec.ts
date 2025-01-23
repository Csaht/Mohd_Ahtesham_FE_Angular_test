import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremimumWebHostingContentComponent } from './premimum-web-hosting-content.component';

describe('PremimumWebHostingContentComponent', () => {
  let component: PremimumWebHostingContentComponent;
  let fixture: ComponentFixture<PremimumWebHostingContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PremimumWebHostingContentComponent]
    });
    fixture = TestBed.createComponent(PremimumWebHostingContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
