import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinepartstableComponent } from './machinepartstable.component';

describe('MachinepartstableComponent', () => {
  let component: MachinepartstableComponent;
  let fixture: ComponentFixture<MachinepartstableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachinepartstableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachinepartstableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
