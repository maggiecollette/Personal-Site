import {Component} from '@angular/core';

@Component({
  selector: 'app-oasis-project',
  templateUrl: './oasis-project.component.html',
  styleUrls: ['./oasis-project.component.css']
})
export class OasisProjectComponent {
  name = "HowBusyIsMarino.com";
  github = "https://github.com/maggiecollette/Marino-Gym-Project";
  description = "Provide an extended description here...";
  images = [
    {title: "Home Page:", src: "assets/OASIS-SS3.png" },
    {title: "Home Page:", src: "assets/OASIS-SS4.png" },
    {title: "Graphs Page:", src: "assets/OASIS-SS5.png" },
    {title: "Sample Graph:", src: "assets/OASIS-SS1.jpg" },
  ];
  skills = [
    {name: "JavaScript", icon: "bi bi-filetype-js"},
    {name: "Python", icon: "bi bi-filetype-py"},
    {name: "HTML", icon: "bi bi-filetype-html"},
    {name: "CSS", icon: "bi bi-filetype-css"},
    {name: "JSON", icon: "bi bi-filetype-json"},
    {name: "Bootstrap", icon: "bi bi-bootstrap"},
    {name: "Node.js", icon: "bi bi-diagram-2"},
    {name: "Plotly.js", icon: "bi bi-bar-chart-line"},
    {name: "Crontab", icon: "bi bi-clock-history"},
    {name: "AWS", icon: "bi bi-database"},
    {name: "BeautifulSoup", icon: "bi bi-file-bar-graph"},
  ];
}
