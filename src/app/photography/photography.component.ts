import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-photography',
  imports: [CommonModule],
  templateUrl: './photography.component.html',
  styleUrl: './photography.component.css',
})
export class PhotographyComponent {
  photos = [
    {
      src: 'assets/photography/antiques.jpg',
      loc: 'Bangkok, Thailand',
      lat: 13.73,
      lng: 100.56,
      date: new Date(2025, 5, 31),
    },
    {
      src: 'assets/photography/buffalo.jpg',
      loc: 'Antelope Island State Park, Utah',
      lat: 40.96,
      lng: -112.21,
      date: new Date(2024, 8, 31),
    },
    {
      src: 'assets/photography/snow.jpg',
      loc: 'Boston, Massachussetts',
      lat: 42.36,
      lng: -71.06,
      date: new Date(2025, 1, 19),
    },
    {
      src: 'assets/photography/deer.jpg',
      loc: 'Bellevue, Washington',
      lat: 47.61,
      lng: -122.2,
      date: new Date(2025, 7, 12),
    },
    {
      src: 'assets/photography/snowboard-1.jpg',
      loc: 'Boston, Massachussetts',
      lat: 42.36,
      lng: -71.06,
      date: new Date(2025, 2, 22),
    },
    {
      src: 'assets/photography/building-2.jpg',
      loc: 'Boston, Massachussetts',
      lat: 42.36,
      lng: -71.06,
      date: new Date(2025, 5, 13),
    },
    {
      src: 'assets/photography/snowboard-2.jpg',
      loc: 'Boston, Massachussetts',
      lat: 42.36,
      lng: -71.06,
      date: new Date(2025, 2, 22),
    },
  ];
}
