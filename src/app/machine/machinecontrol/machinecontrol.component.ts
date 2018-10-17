import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-machinecontrol',
  templateUrl: './machinecontrol.component.html',
  styleUrls: ['./machinecontrol.component.scss']
})
export class MachinecontrolComponent implements OnInit {

  @Output() messageEvent = new EventEmitter<any>();

  sendFilter(filter) {
    this.messageEvent.emit(filter)
  }
  constructor() { }

  ngOnInit() {
  }

}
