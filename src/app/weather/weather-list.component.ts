import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {WeatherService} from ".././services/weather.service";


@Component({
  selector: 'app-weather',
  templateUrl: 'weather-list.component.html',
  styleUrls: ['weather-list.component.scss']
})
export class WeatherListComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  bishkekForecasts: any = [];
  currentWeatherBish: any = [];

  oshForecasts: any = [];
  currentWeatherOsh: any = [];

  batkenForecasts: any = [];
  currentWeatherBatken: any = [];

  currentTime = new Date();

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit() {
    this.getBishkekForecast();
    this.getOshForecast();
    this.getBatkenForecast();
  }

  getBishkekForecast(){
    this.subscription = this.weatherService.getBishkekWeather().subscribe(data => {
      this.currentWeatherBish.push(data.query.results.channel.item.condition, data.query.results.channel.atmosphere);
      const bishDailyForecast = data.query.results.channel.item.forecast;
      this.bishkekForecasts = bishDailyForecast;
    });
  }

  getOshForecast(){
    this.subscription = this.weatherService.getOshWeather().subscribe(data => {
      this.currentWeatherOsh.push(data.query.results.channel.item.condition, data.query.results.channel.atmosphere);
      const oshDailyForecast = data.query.results.channel.item.forecast;
      this.oshForecasts = oshDailyForecast;
    });
  }

  getBatkenForecast(){
    this.subscription = this.weatherService.getBatkenWeather().subscribe(data => {
      this.currentWeatherBatken.push(data.query.results.channel.item.condition, data.query.results.channel.atmosphere);
      const batkenDailyForecast = data.query.results.channel.item.forecast;
      this.batkenForecasts = batkenDailyForecast;
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
