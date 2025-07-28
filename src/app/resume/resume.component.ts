import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
  standalone: false,
})
export class ResumeComponent {
  resume: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    const pdfPath = 'assets/resume/Marguerite_Collette_Resume.pdf';
    this.resume = this.sanitizer.bypassSecurityTrustResourceUrl(pdfPath);
  }
}
