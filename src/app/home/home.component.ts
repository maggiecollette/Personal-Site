import {Component} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = "Hi, I'm Maggie!";
  subtitle = "Northeastern University Computer Science 2025";
  images = [ "assets/CAROUSEL-IMG2.jpg", "assets/CAROUSEL-IMG5.jpg", "assets/CAROUSEL-IMG6.jpg"]
}
