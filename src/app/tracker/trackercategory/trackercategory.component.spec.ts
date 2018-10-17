import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackercategoryComponent } from './trackercategory.component';

describe('TrackercategoryComponent', () => {
  let component: TrackercategoryComponent;
  let fixture: ComponentFixture<TrackercategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackercategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackercategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
