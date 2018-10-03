import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteBubbleComponent } from './favourite-bubble.component';

describe('FavouriteBubbleComponent', () => {
  let component: FavouriteBubbleComponent;
  let fixture: ComponentFixture<FavouriteBubbleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouriteBubbleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteBubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
