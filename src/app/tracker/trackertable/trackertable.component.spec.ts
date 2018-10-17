import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackertableComponent } from './trackertable.component';

describe('TrackertableComponent', () => {
  let component: TrackertableComponent;
  let fixture: ComponentFixture<TrackertableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackertableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackertableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
