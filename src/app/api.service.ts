import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ApiService {

  API_URL = 'http://localhost:8000';

  constructor(private  httpClient: HttpClient) {
  }

  getData() {
    return this.httpClient.get(`${this.API_URL}/dbapi`);
  }

  getParts(machineid) {
    return this.httpClient.post(`${this.API_URL}/partsapi`,{'machineid':machineid});
  }

  getHistoryPart(machineid,filter) {
    return this.httpClient.post(`${this.API_URL}/parthistory`,{'machineid':machineid, 'type':filter});
  }

  getMachine(machineid){
    return this.httpClient.post(`${this.API_URL}/machine`,{'machineid':machineid});
  }

}
