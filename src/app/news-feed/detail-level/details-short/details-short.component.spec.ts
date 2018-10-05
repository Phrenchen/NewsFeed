import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsShortComponent } from './details-short.component';

describe('DetailsShortComponent', () => {
  let component: DetailsShortComponent;
  let fixture: ComponentFixture<DetailsShortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsShortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
