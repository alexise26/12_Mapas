import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lat: number =  28.681834;
  lng: number = -106.113611;
  zoom: number = 16;
}
