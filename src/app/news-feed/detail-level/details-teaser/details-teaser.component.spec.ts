import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsTeaserComponent } from './details-teaser.component';

describe('DetailsTeaserComponent', () => {
  let component: DetailsTeaserComponent;
  let fixture: ComponentFixture<DetailsTeaserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsTeaserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsTeaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
