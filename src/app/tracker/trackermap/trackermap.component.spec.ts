import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackermapComponent } from './trackermap.component';

describe('TrackermapComponent', () => {
  let component: TrackermapComponent;
  let fixture: ComponentFixture<TrackermapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackermapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackermapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
