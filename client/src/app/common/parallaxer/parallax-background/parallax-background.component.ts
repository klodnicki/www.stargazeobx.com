import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parallax-background',
  templateUrl: './parallax-background.component.html',
  styleUrls: ['./parallax-background.component.scss']
})
export class ParallaxBackgroundComponent {
  @Input() bgParallaxDistance = 1.2;
  @Input() bgImageUrl: string;
  @Input() fgParallaxDistance = 1;
}
