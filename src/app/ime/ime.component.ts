import {Component} from '@angular/core';

@Component({
  selector: 'app-ime',
  templateUrl: './ime.component.html',
  styleUrls: ['./ime.component.css']
})
export class IMEComponent {
  name = "Image Manipulation and Enhancement";
  github = '';
  description = "Provide an extended description here...";
  images = [
    {title: "Loaded Image:", src: "assets/IME-SS1.png" },
    {title: "Downscaled Image:", src: "assets/IME-SS2.png" },
    {title: "Mosaic Filtered Image:", src: "assets/IME-SS3.png" },
    {title: "Greyscale Filtered Image:", src: "assets/IME-SS4.png" },
    {title: "Sepia Filtered Image:", src: "assets/IME-SS5.png" },
    {title: "Blur Filtered Image:", src: "assets/IME-SS6.png" },
    {title: "Sharpen Filtered Image:", src: "assets/IME-SS7.png" },
    {title: "Vertically Flipped Image:", src: "assets/IME-SS8.png" },
    {title: "Horizontally Flipped Image:", src: "assets/IME-SS9.png" },
    {title: "Example Filter Preview:", src: "assets/IME-SS11.png" },
  ];
  skills = [
    {name: "Java", icon: "bi bi-filetype-java"}
  ];
}
