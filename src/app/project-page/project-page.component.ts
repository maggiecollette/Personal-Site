import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent {
  @Input() name!: string;
  @Input() github!: string;
  @Input() description!: string[];
  @Input() images!: {title: string, src: string}[];
  @Input() skills!: {name: string, icon: string}[];
}
