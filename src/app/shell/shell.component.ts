import { Component } from '@angular/core';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent {
  name = "Basic Shell";
  github = '';
  description = [
    "To start this project, we designed a tokenizer that splits a character array on the tokens '(', ')', '<', '>'," +
    " ';', '|', and whitespaces, into a list of character arrays.",
    "With the basic tokenizer completed, we were then able to begin creating the shell. We began by adding a welcome " +
    "prompt: \"Welcome to mini-shell.\", as well as the prompt \"shell$\" at the beginning of each new line.",
    "Basic commands were then implemented, such as \"exit\", which prints the message \"Bye bye\" and allows a user " +
    "to exit the mini shell.",
    "We also built in functionality for \"cd\" to change directories, \"help\" to display a help prompt, \"prev\" to" +
    "print the previous command line and execute it again,  and \"source\" to take in a filename and execute its " +
    "contents as a script.",
    "Once these basic functions were completed, we implemented the following:",
    "Sequencing, denoted by \";\", runs two or more commands back to back.",
    "Input redirection, denoted by \"<\", allows a user to run a command using the contents of a given file as " +
    "standard input.",
    "Output redirection, denoted by \">\", writes the output of a command to a given file, effectively replacing " +
    "standard output.",
    "Pipes, denoted by \"|\", run the commands on the left nad right hand sides of the pipe simultaneously, " +
    "replacing the standard input of the right hand side command with the standard output of the left hand side command",
    "Any of these features could be used in combination in our mini shell."
  ];
  images = [];
  skills = [
    {name: "C", icon: "bi bi-c-square"},
    {name: "GitHub", icon: "bi bi-github"},
    {name: "Virtual Machines", icon: "bi bi-motherboard"},
  ];
}
