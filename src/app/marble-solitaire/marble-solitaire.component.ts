import {Component} from '@angular/core';

@Component({
  selector: 'app-marble-solitaire',
  templateUrl: './marble-solitaire.component.html',
  styleUrls: ['./marble-solitaire.component.css']
})
export class MarbleSolitaireComponent {
  name = "Marble Solitaire Game";
  github = "";
  description = "Provide an extended description here...";
  images = [
    {title: "Default English Solitaire Game:", src: "assets/MARBLE-ENG1.png" },
    {title: "Example Custom English Solitaire Game:", src: "assets/MARBLE-ENG2.png" },
    {title: "Default European Solitaire Game:", src: "assets/MARBLE-EUR1.png" },
    {title: "Example Custom European Solitaire Game:", src: "assets/MARBLE-EUR2.png" },
    {title: "Default Triangle Solitaire Game:", src: "assets/MARBLE-TRI1.png" },
    {title: "Example Custom Triangle Solitaire Game:", src: "assets/MARBLE-TRI2.png" }
  ];
  skills = [
    {name: "Java", icon: "bi bi-filetype-java"}
  ];
}
