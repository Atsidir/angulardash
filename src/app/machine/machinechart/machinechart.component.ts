import {Component, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import * as Chartist from 'chartist';
import {BaseChartDirective} from 'ng2-charts';

@Component({
  selector: 'app-machinechart',
  templateUrl: './machinechart.component.html',
  styleUrls: ['./machinechart.component.scss']
})
export class MachinechartComponent implements OnInit {

  hidden:boolean=true;
  display:any='none';


  @Input() charttype: any;

  @Input()
  set whatever(data:Array<object>){
    console.log("machine chart");
    console.log(data);
    if(data){
      this.display= 'block';

      this.lineChartData=[
        {
          label: "Health Score",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          borderWidth: 2,
          data: []
        }
      ];


      this.transformdatatochart(data);
      console.log(this.lineChartLabels);
      console.log(this.lineChartData);
      this.chart.chart.update();
    }
  }
  @ViewChild(BaseChartDirective)
  public chart: BaseChartDirective;


  public lineChartType='line';
  public lineChartData: Array<any>=[{data:[]},{data:[]}];
  public lineChartOptions: any;
  public lineChartLabels: Array<any>;
  public lineChartColors: Array<any>;
  public canvas: any;
  public ctx;
  public gradientFill;
  private gradientStroke;
  private gradientChartOptionsConfiguration: any;
  private chartColor: string;
  constructor() { }

ngOnInit() {
    this.chartColor = "#FFFFFF";
    this.canvas = document.getElementById("lineChartExample");
    this.ctx = this.canvas.getContext("2d");
    this.gradientStroke = this.ctx.createLinearGradient(500, 0, 100, 0);
    this.gradientStroke.addColorStop(0, '#80b6f4');
    this.gradientStroke.addColorStop(1, this.chartColor);

    this.gradientFill = this.ctx.createLinearGradient(0, 170, 0, 50);
    this.gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    this.gradientFill.addColorStop(1, "rgba(249, 99, 59, 0.40)");



    this.lineChartColors = [
       {
         borderColor: "#f96332",
         pointBorderColor: "#FFF",
         pointBackgroundColor: "#f96332",
         backgroundColor: this.gradientFill
       }
     ];
    this.lineChartLabels = [];
    this.lineChartOptions = {
    scales: {
      xAxes: [{
        type: 'time',
        time: {
          displayFormats: {
          	'millisecond': 'MMM DD',
            'second': 'MMM DD',
            'minute': 'MMM DD',
            'hour': 'MMM DD',
            'day': 'MMM DD',
            'week': 'MMM DD',
            'month': 'YYYY MMM DD',
            'quarter': 'MMM DD',
            'year': 'YYYY MMM DD',
          }
        }
      }],
    },
  };

    this.lineChartType = 'line';

}

  public transformdatatochart(data){

      this.lineChartData.push({
          label: "Predicted Health Score",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          borderWidth: 2,
          data: []
        });
    this.lineChartLabels.length = 0;
      let tempx=[];
      for (let elem in data){
          this.lineChartLabels.push(data[elem]['date']);
          tempx.push({'x': new Date(data[elem]['date']),'y': data[elem]['part_health_score']})
      }

      this.lineChartData[1]['data'] = [tempx[tempx.length - 2], tempx[tempx.length - 1]];
      tempx.pop();
      this.lineChartData[0]['data'] = tempx;




  }

}
