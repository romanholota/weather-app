import {Component, EventEmitter, Output} from '@angular/core';
import {AppService} from '../app.service';
import {Location} from '../interfaces/location';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

    @Output()
    locationSelected: EventEmitter<Location> = new EventEmitter<Location>();
    search: string = '';
    locations: Location[] = [];

    showList: boolean = false;

    constructor(
        private appService: AppService,
    ) {}

    select(location: Location) {
        this.showList = false;
        this.search = '';
        this.locationSelected.emit(location)
    }

    getLocations() {
        this.appService.getLocations(this.search).subscribe(data => {
            this.showList = true;
            this.locations = data.results ?? [];
        });
    }

}
