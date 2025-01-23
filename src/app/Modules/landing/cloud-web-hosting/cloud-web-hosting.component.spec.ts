import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudWebHostingComponent } from './cloud-web-hosting.component';

describe('CloudWebHostingComponent', () => {
  let component: CloudWebHostingComponent;
  let fixture: ComponentFixture<CloudWebHostingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CloudWebHostingComponent]
    });
    fixture = TestBed.createComponent(CloudWebHostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
