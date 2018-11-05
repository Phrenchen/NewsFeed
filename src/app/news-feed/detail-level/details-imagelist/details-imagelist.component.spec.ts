import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsImagelistComponent } from './details-imagelist.component';

describe('DetailsImagelistComponent', () => {
  let component: DetailsImagelistComponent;
  let fixture: ComponentFixture<DetailsImagelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsImagelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsImagelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
