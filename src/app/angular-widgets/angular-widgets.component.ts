import {Component} from '@angular/core';

@Component({
  selector: 'app-angular-widgets',
  templateUrl: './angular-widgets.component.html',
  styleUrls: ['./angular-widgets.component.css']
})
export class AngularWidgetsComponent {
  name = "Angular Widgets";
  github = "https://github.com/maggiecollette/Angular-Widgets";
  description = [
  "Angular Widgets is an in-progress project that I’ve been mainly using to practice making API calls with a service.",
  "Currently one component is completed, a widget to search today’s weather.",
  "Additionally, I have continued using what I learned from creating my personal website, such as the use of ngIf, " +
  "ngFor and other Structural Directives to properly display both the empty and filled states of the weather component.",
  "I have also been continuing to use Pipes to format dates, times, and temperature values, and Interpolation as " +
  "needed to display data."

];
  images = [
    {title: "The Current Weather Component's Empty State:", src: "assets/ANGULAR-WIDGETS-SS3.png" },
    {title: "The Current Weather Component After a Search:", src: "assets/ANGULAR-WIDGETS-SS1.png" },
  ];
  skills = [
    {name: "TypeScript", icon: "bi bi-filetype-tsx"},
    {name: "HTML", icon: "bi bi-filetype-html"},
    {name: "CSS", icon: "bi bi-filetype-css"},
    {name: "JSON", icon: "bi bi-filetype-json"},
    {name: "Bootstrap", icon: "bi bi-bootstrap"},
    {name: "AngularJS", icon: "bi bi-window"},
    {name: "Node.js", icon: "bi-diagram-2"},
  ];
}
