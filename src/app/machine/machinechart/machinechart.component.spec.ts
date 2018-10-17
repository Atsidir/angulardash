import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinechartComponent } from './machinechart.component';

describe('MachinechartComponent', () => {
  let component: MachinechartComponent;
  let fixture: ComponentFixture<MachinechartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachinechartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachinechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
