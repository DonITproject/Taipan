import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent {
  private map!: L.Map;

  // Указанные координаты
  private coordinates: [number, number] = [50.40173770211433, 30.32679088636119];

  ngOnInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map').setView(this.coordinates, 16);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(this.map);

    const customIcon = L.icon({
      iconUrl: 'assets/images/logo.png',
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32]
    });
    L.marker(this.coordinates, { icon: customIcon })
        .addTo(this.map)
        .bindPopup('ЖК Софіївська сфера, Київська область')
        .openPopup();
  }
}
