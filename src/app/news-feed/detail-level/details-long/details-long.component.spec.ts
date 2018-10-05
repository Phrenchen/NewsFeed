import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsLongComponent } from './details-long.component';

describe('DetailsLongComponent', () => {
  let component: DetailsLongComponent;
  let fixture: ComponentFixture<DetailsLongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsLongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsLongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
