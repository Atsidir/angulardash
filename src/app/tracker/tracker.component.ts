import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss']
})
export class TrackerComponent implements OnInit {

  public data:Array<object>=[];
  constructor(private dataService:ApiService) { }
  public filtered:Array<object>=[];
  machineid:any;

  firstPage:boolean=true;

  ngOnInit() {
    console.log(this.dataService);
    this.dataService.getData().subscribe((data: Array<object>) => {
      this.data=data;
      this.filtered=data;
    });
  }

   receiveFilter($event) {
    this.filtered = $event
  }
    receivePage($event) {
    this.machineid = $event;
    this.firstPage = false;
  }
  switchPage($event) {
    this.firstPage = !this.firstPage;
  }

}
