import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {WeatherService} from "./services/weather.service";
import { AppComponent } from './app.component';
import {WeatherListComponent} from "./weather/weather-list.component";
import {RouterModule, Routes} from "@angular/router";
import {FloorPipe} from "./filters/floor.pipe";

export const appRoutes: Routes = [
  {path: '', component: WeatherListComponent}
];

@NgModule({
  declarations: [AppComponent, WeatherListComponent, FloorPipe],
  imports: [BrowserModule, HttpModule, RouterModule.forRoot(appRoutes)],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
