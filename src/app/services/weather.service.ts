import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {

  constructor(private http: Http) {
  }

  getBishkekWeather(): Observable<any> {
    const url = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%' +
      '20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22bishkek%2C%20KG%22)&format=json&env=store%' +
      '3A%2F%2Fdatatables.org%2Falltableswithkeys';
    return this.http.get(url).map(res => res.json());
  }

  getOshWeather(): Observable<any> {
    const url = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%' +
      '20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22osh%2C%20kg%22)&format=json&env=store%3A%' +
      '2F%2Fdatatables.org%2Falltableswithkeys';
    return this.http.get(url).map(res => res.json());
  }

  getBatkenWeather(): Observable<any> {
    const url = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%' +
      '20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22batken%2C%20kg%22)&format=json&env=store%3A' +
      '%2F%2Fdatatables.org%2Falltableswithkeys';
    return this.http.get(url).map(res => res.json());
  }
}
