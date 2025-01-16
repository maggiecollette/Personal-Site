import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  title = "Hi, I'm Maggie!";
  subtitle = 'Northeastern University Computer Science 2025';
  images = [
    'assets/CAROUSEL-IMG3.jpg',
    'assets/CAROUSEL-IMG5.jpg',
    'assets/CAROUSEL-IMG6.jpg',
  ];
  info =
    "I'm currently a fourth year student at Northeastern University pursuing a B.S. in Computer Science, graduating in May 2025. While I started at Northeastern as a Data Science and Biology major, I quickly found that I had a passion for the problem-solving and creativity involved in my Computer Science classes, which ultimately led me to change my major going into my second year." +
    ' I have completed two Software Engineering Co-Ops - at eMoney Advisor during Fall 2023, and at MasterControl during Fall 2024. ' +
    'Each of these opportunities has given me a chance to apply my skills in a real world setting and to learn through collaboraton with professionals in the field. ' +
    "I'm looking forward to expanding on my learning from these experiences with a full-time role beginning in Summer 2025!";
}
