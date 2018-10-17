import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Subject} from 'rxjs/Rx';
import {DataTableDirective} from 'angular-datatables';

@Component({
  selector: 'app-machinepartstable',
  templateUrl: './machinepartstable.component.html',
  styleUrls: ['./machinepartstable.component.scss']
})
export class MachinepartstableComponent implements OnInit {

  _data:Array<any>=[];

  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  @Input()
  set data(data:any){
    this._data=data;
    this.dtTrigger.next();
  }

  constructor() { }

  ngOnInit() {
      this.dtOptions = {
        info:false,
      search:false,
      autoWidth: false,
      paging: false
    }
  }

}
