import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebhostingcardsComponent } from './webhostingcards.component';

describe('WebhostingcardsComponent', () => {
  let component: WebhostingcardsComponent;
  let fixture: ComponentFixture<WebhostingcardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebhostingcardsComponent]
    });
    fixture = TestBed.createComponent(WebhostingcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
