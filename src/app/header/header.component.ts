import {Component, Input} from '@angular/core';
import {Location} from '../interfaces/location';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    @Input()
    selectedLocation!: Location;

}
