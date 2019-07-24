import { Component, Input, HostBinding, OnChanges } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-parallaximg',
  templateUrl: './parallaximg.component.html',
  styleUrls: ['./parallaximg.component.scss']
})
export class ParallaximgComponent implements OnChanges {
  @Input() src: string;
  @HostBinding('style.background-image') private image: SafeStyle;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnChanges() {
    this.image = this.sanitizer.bypassSecurityTrustStyle(this.src);
  }

}
