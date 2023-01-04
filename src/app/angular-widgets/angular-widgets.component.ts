import {Component} from '@angular/core';

@Component({
  selector: 'app-angular-widgets',
  templateUrl: './angular-widgets.component.html',
  styleUrls: ['./angular-widgets.component.css']
})
export class AngularWidgetsComponent {
  name = "Angular Widgets";
  github = "https://github.com/maggiecollette/Angular-Widgets";
  description = "Provide an extended description here...";
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
