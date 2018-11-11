import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ATestPageComponent } from './a-test-page.component';

describe('ATestPageComponent', () => {
  let component: ATestPageComponent;
  let fixture: ComponentFixture<ATestPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ATestPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ATestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
