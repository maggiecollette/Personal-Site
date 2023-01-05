import {Component} from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
      {
        "name":"Angular Widgets",
        "image":"assets/ANGULAR-WIDGETS-SS2.png",
        "description":"My first AngularJS project, started in December 2022 and still in progress. The overall " +
          "objective of this project is to teach myself the basics of Angular Components, Interpolation, Services, " +
          "Pipes, Structural Directives, and more. So far, one widget, which displays the current weather at a " +
          "location, is complete.",
        "buttons":[
          {
            "href":"angular-widgets",
            "target": null,
            "text":"See More",
            "icon": "bi bi-chevron-right"
          },
          {
            "href":"https://maggiecollette.github.io/Angular-Widgets/",
            "target": "_blank",
            "text":"Visit Site",
            "icon":"bi bi-box-arrow-up-right"
          },
          {
            "href":"https://github.com/maggiecollette/Angular-Widgets",
            "target": "_blank",
            "text":"GitHub",
            "icon":"bi bi-github"
          }
        ],
        "footer":{
          "text":""
        }
      },
      {
        "name":"HowBusyIsMarino.com",
        "image":"assets/OASIS-SS2.jpg",
        "description":"A website conceptualized with group members in Northeastern Oasis during the Fall 2022 " +
          "semester. Our objective was to gain experience in the web development process while providing a valuable " +
          "product to other Northeastern students.",
        "buttons":[
          {
            "href":"oasis-project-fall2022",
            "target": null,
            "text":"See More",
            "icon": "bi bi-chevron-right"
          },
          {
            "href":"https://github.com/maggiecollette/Marino-Gym-Project",
            "target": "_blank",
            "text":"GitHub",
            "icon":"bi bi-github"
          }
        ],
        "footer":{
          "text":""
        }
      },
      {
        "name":"CS3500 Image Manipulation and Enhancement",
        "image":"assets/IME-SS10.png",
        "description":"Developed in Java with a class partner for CS3500, Object Oriented Design, during the Fall " +
          "2022 semester. This project's view exists in both GUI (Java Swing) and text (Console) forms, and had an " +
          "emphasis on writing clear and extensible code.",
        "buttons":[
          {
            "href":"ood-ime",
            "target": null,
            "text":"See More",
            "icon":"bi bi-chevron-right"
          }
        ],
        "footer":{
          "text":"Code available upon request."
        }
      },
      {
        "name":"CS3500 Marble Solitaire Game",
        "image":"assets/OOD-MARBLE-SOLITAIRE-SS1.png",
        "description":"Developed in Java for CS3500, Object Oriented Design, during the Fall 2022 semester. The main " +
          "goal of this project was to teach the correct implementation of the Model View Controller design pattern, " +
          "as well as to practice other design patterns discussed in class.",
        "buttons":[
          {
            "href":"ood-marble-solitaire",
            "target":null,
            "text":"See More",
            "icon":"bi bi-chevron-right"
          }
        ],
        "footer":{
          "text":"Code available upon request."
        }
      }
    ]
}
