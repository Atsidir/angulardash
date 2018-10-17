import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinecontrolComponent } from './machinecontrol.component';

describe('MachinecontrolComponent', () => {
  let component: MachinecontrolComponent;
  let fixture: ComponentFixture<MachinecontrolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachinecontrolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachinecontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
