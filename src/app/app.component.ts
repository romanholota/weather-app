import {Component, OnInit} from '@angular/core';
import {AppService} from './app.service';
import {Location} from './interfaces/location';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    weatherData: any;

    selectedLocation: Location = {};

    constructor(
        private appService: AppService
    ) {}


    ngOnInit() {

    }

    selectLocation(selectedLocation: Location) {
        this.selectedLocation = selectedLocation;
        this.getWeather(this.selectedLocation);
    }

    getWeather(selectedLocation: Location) {

        if (!selectedLocation?.longitude || !selectedLocation?.latitude) {
            return;
        }

        this.appService.getWeather(selectedLocation.longitude, selectedLocation.latitude).subscribe(data => {
            this.weatherData = data;
            this.selectedLocation.currentTemp = data.current.temperature_2m;
        })

    }

}
