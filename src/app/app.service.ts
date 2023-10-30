import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable, tap} from 'rxjs';
import {Location} from './interfaces/location';
import {LocationResponse} from './interfaces/location-response';
import {WeatherData} from './interfaces/weather-data';

@Injectable({
  providedIn: 'root'
})
export class AppService {

    constructor(
        private http: HttpClient
    ) { }

    getLocations(search: string): Observable<LocationResponse> {
        return this.http.get<LocationResponse>(`https://geocoding-api.open-meteo.com/v1/search?name=${search}&count=10&language=en&format=json`);
    }

    getWeather(longitude: number, latitude: number) {
        return this.http.get<WeatherData>(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin`)
    }

}
