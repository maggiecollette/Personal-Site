import {Component} from '@angular/core';

@Component({
  selector: 'app-marble-solitaire',
  templateUrl: './marble-solitaire.component.html',
  styleUrls: ['./marble-solitaire.component.css']
})
export class MarbleSolitaireComponent {
  name = "Marble Solitaire Game";
  github = "";
  description = [
    "Three board types are supported, English Solitaire, European Solitaire, and Triangular Solitaire.",
    "This game can be played in its default form using run configurations for the main class, MarbleSolitaire, as " +
    "well as a program argument that matches the name of the board type.",
    "To specify a board size, the argument ‘-size n’ can be included, where n is any odd number larger than 1 for " +
    "English and European boards, and any even number greater than 1 for Triangular boards.",
    "To specify the starting location of the empty hole on the board, the argument ‘-hole r c’ can be added, where r " +
    "is the row number and c is the column number.",
    "This project was an introduction to Object Oriented Design, where the only required design pattern was Model" +
    "View Controller.",
    "Due to the fact that there were three supported board types, I chose to implement the Abstract Factory pattern " +
    "to construct both the model and view of the specified instance of a board.",
    "Additionally, I created abstract classes for both the model and view components to reduce code duplication as " +
    "much as possible."
  ];
  images = [
    {title: "Default English Solitaire Game:", src: "assets/MARBLE-ENG1.png" },
    {title: "Example Custom English Solitaire Game:", src: "assets/MARBLE-ENG2.png" },
    {title: "Default European Solitaire Game:", src: "assets/MARBLE-EUR1.png" },
    {title: "Example Custom European Solitaire Game:", src: "assets/MARBLE-EUR2.png" },
    {title: "Default Triangle Solitaire Game:", src: "assets/MARBLE-TRI1.png" },
    {title: "Example Custom Triangle Solitaire Game:", src: "assets/MARBLE-TRI2.png" }
  ];
  skills = [
    {name: "Java", icon: "bi bi-filetype-java"},
    {name: "Object Oriented Design", icon: "bi bi-diagram-3-fill"},
    {name: "GitHub", icon: "bi bi-github"},
    {name: "Java Swing", icon: "bi bi-display"}
  ];
}
