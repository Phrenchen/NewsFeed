import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedBubbleComponent } from './feed-bubble.component';

describe('FeedBubbleComponent', () => {
  let component: FeedBubbleComponent;
  let fixture: ComponentFixture<FeedBubbleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedBubbleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedBubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
