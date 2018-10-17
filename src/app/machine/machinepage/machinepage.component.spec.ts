import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinepageComponent } from './machinepage.component';

describe('MachinepageComponent', () => {
  let component: MachinepageComponent;
  let fixture: ComponentFixture<MachinepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachinepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachinepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
