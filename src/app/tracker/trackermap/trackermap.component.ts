import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ApiService} from '../../api.service';

declare let L;

@Component({
  selector: 'app-trackermap',
  templateUrl: './trackermap.component.html',
  styleUrls: ['./trackermap.component.scss']
})
export class TrackermapComponent implements OnInit {

  public _data: Array<object> = [];
  public map;
  public filtered:Array<object>=[];

  @Output() messageEvent = new EventEmitter<any>();

  sendFilter() {
    this.messageEvent.emit(this.filtered)
  }

  @Input()
  set data(data:Array<object>){
    this._data=data;

    if (data.length!=0){

    var coords = [];

      for (let line in data) {
        var long=parseFloat(data[line]['longitude']);
        var lat=parseFloat(data[line]['latitude']);

        coords.push({
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [long, lat]
          }
        })
      }


      L.geoJSON(coords, {
      pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
				radius: 8,
				fillColor: "#ff7800",
				color: "#000",
				weight: 1,
				opacity: 1,
				fillOpacity: 0.8
			});
      },

      onEachFeature: this.onEachFeature
      }).addTo(this.map);
      }
  }

  constructor(private  dataService: ApiService) {
  }

  ngOnInit() {
    this.map = L.map('map').setView([35.1586036, -30.2460265], 2);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }
    ).addTo(this.map);
    var that=this;
     this.map.on('moveend',function () {

       let i=0;
       var vmi=[];
       for (let coord in that._data){
          let long=parseFloat(that._data[coord]['longitude']);
          let lat=parseFloat(that._data[coord]['latitude']);
         if (that.map.getBounds().contains(L.latLng(Number(lat),Number(long)))){
              vmi.push(that._data[coord]);
        }
       }
       that.filtered=vmi;
       that.sendFilter();
     })
  }

  public onEachFeature(feature, layer) {
		let  popupContent = "<p>I started out as a GeoJSON " +
				feature.geometry.type + ", but now I'm a Leaflet vector!</p>";

		if (feature.properties && feature.properties.popupContent) {
			popupContent += feature.properties.popupContent;
		}

		layer.bindPopup(popupContent);
	}

}
