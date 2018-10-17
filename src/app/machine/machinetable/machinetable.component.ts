import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {DataTableDirective} from 'angular-datatables';
import {Subject} from 'rxjs/Rx';

@Component({
  selector: 'app-machinetable',
  templateUrl: './machinetable.component.html',
  styleUrls: ['./machinetable.component.scss']
})
export class MachinetableComponent implements OnInit {

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
