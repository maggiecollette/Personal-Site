import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: false,
})
export class HomeComponent {
  title = 'MAGGIE COLLETTE';
  info =
    "Hi, I'm Maggie! I graduated Cum Laude from Northeastern University in May 2025 with a Bachelor's of Science in Computer Science. " +
    'After completing two six month long Software Engineering Co-Ops, first at eMoney Advisor and then at MasterControl, I am excited to begin ' +
    'my full time career in a role that will allow me to continue to grow as an engineer. Outside of Computer Science, I enjoy photography, ' +
    "reading about and listening to 70's-90's rock music, playing guitar, traveling, lifting, hiking, and volunteering for organizations like ";
  rp = "Rosie's Place";
  url = 'https://www.rosiesplace.org/';
}
