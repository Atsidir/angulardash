import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Subject} from 'rxjs/Rx';
import {DataTableDirective} from 'angular-datatables';


@Component({
  selector: 'app-trackertable',
  templateUrl: './trackertable.component.html',
  styleUrls: ['./trackertable.component.scss']
})
export class TrackertableComponent implements OnInit {

  _data: Array<object>;

  @Input()
  set data(data: Array<object>) {
    this._data = data;

      this.dtTrigger.next();

  }

  @Output() messageEvent = new EventEmitter<any>();

  sendFilter(machineid) {
    this.messageEvent.emit(machineid)
  }


  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor() {
  }

  ngOnInit() {

    this.dtOptions = {
      autoWidth: false,
      paging: false,
      scrollY: "400px",

    }

  }

  redirectto(item){
    console.log(item.equipment);
    this.sendFilter(item.equipment)
  }

}
