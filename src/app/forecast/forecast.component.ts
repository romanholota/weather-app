import {Component, Input} from '@angular/core';
import {WeatherData} from '../interfaces/weather-data';
import {WeatherCode} from '../consts/weather-code';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent {

    @Input()
    weatherData!: WeatherData;

    weatherCode = WeatherCode;

}
