import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from '../../api.service';

@Component({
  selector: 'app-machinepage',
  templateUrl: './machinepage.component.html',
  styleUrls: ['./machinepage.component.scss']
})
export class MachinepageComponent implements OnInit {


  oil_filter: String = 'Oil Filter';
  air_filter: String = 'AIR Filter';


  public data:Array<any>=[];
  public _machineid:any;
  public parts:Array<any>=[];
  public oilhistory: Array<object>;
  public airhistory: Array<object>;
  public filter: any='';
    private displayOil: string='none';
    private displayAir: string='none';


  @Input()
  set machineid(data:any){
      console.log('input');
      this._machineid=data;
  }
  constructor(private dataService:ApiService) { }

  ngOnInit() {

      this.dataService.getMachine(this._machineid).subscribe((data: Array<object>) => {
          this.data = data;
      });
      this.dataService.getParts(this._machineid).subscribe((data: Array<object>) => {
          this.parts = data;
      });

      this.dataService.getHistoryPart(this._machineid, this.oil_filter).subscribe((data: Array<object>) => {

          this.oilhistory = data;
      });

      this.dataService.getHistoryPart(this._machineid, this.air_filter).subscribe((data: Array<object>) => {
          console.log('oil history page');
          console.log(data);
          this.airhistory = data;
      });


  }

  receiveFilter($event)
      {
        if ($event==='air'){
            this.displayOil='none';
            this.displayAir='block';
        } else if ($event==='oil'){
            this.displayOil='block';
            this.displayAir='none';
        }
      }

}
