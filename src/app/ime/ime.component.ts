import {Component} from '@angular/core';

@Component({
  selector: 'app-ime',
  templateUrl: './ime.component.html',
  styleUrls: ['./ime.component.css']
})
export class IMEComponent {
  name = "Image Manipulation and Enhancement";
  github = '';
  description = [
    "Over the course of three assignments, plus an extra credit assignment, my CS3000 partner and I developed an " +
    "Image Manipulation and Enhancement program in Java.",
    "This program was also implemented using the Model View Controller Design Pattern, with support for both terminal " +
    "“text-view” and a GUI view.",
    "One of the main design choices made in this assignment was our use of the command design pattern and function " +
    "objects for each type of image manipulation. This design choice made our code far more extensible, and also " +
    "allowed us to reduce duplication within our code.",
    "Our project includes the following features:",
    "Loading and saving jpg, png, bmp, and ppm files.",
    "The ability to switch through any previously loaded or manipulated images.",
    "Brightening and Darkening an image by a specified increment.",
    "Flipping an image both horizontally and vertically.",
    "Visualizations of the Red, Green, Blue, Value, Intensity, and Luma components of an image.",
    "The ability to apply Sharpen, Blur, Sepia, and Grayscale filters on an image.",
    "Image Mosaic functionality, which can be customized by a specified seed.",
    "Downscaling an image to any given width and height.",
    "Histogram depiction of the red, green, blue, and intensity components of an image, updated every time the " +
    "displayed image is reselected or manipulated.",
    "An image manipulation preview window, which depicts a scrollable 200 x 200 pane to which an image manipulation " +
    "can be applied, and previewed as the user scrolls through the image (an implementation of image masking)."

];
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
    {name: "Java", icon: "bi bi-filetype-java"},
    {name: "GitHub", icon: "bi bi-github"},
    {name: "Java Swing", icon: "bi bi-display"}
  ];
}
