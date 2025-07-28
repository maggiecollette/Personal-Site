import { Component, AfterViewInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false,
})
export class AppComponent implements AfterViewInit {
  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    const navbar = document.getElementById('mainNavbar');
    const header = document.querySelector('.overlay-header');

    if (navbar && header) {
      this.renderer.listen(navbar, 'show.bs.collapse', () => {
        this.renderer.addClass(header, 'navbar-expanded-bg');
      });

      this.renderer.listen(navbar, 'hide.bs.collapse', () => {
        this.renderer.removeClass(header, 'navbar-expanded-bg');
      });
    }
  }
}
