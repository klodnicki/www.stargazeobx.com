import { Component, ElementRef, HostListener, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-parallax-layer',
  templateUrl: './parallax-layer.component.html',
  styleUrls: ['./parallax-layer.component.scss']
})
export class ParallaxLayerComponent implements OnInit {
  @Input() parallaxDistance = 1;

  constructor(private hostElement: ElementRef) { }

  ngOnInit() {
    this.parallaxScroll();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.parallaxDistance) {
      if (changes.parallaxDistance.currentValue === -1) { this.parallaxDistance = Infinity; }
      this.parallaxScroll();
    }
  }

  @HostListener('window:scroll')
  @HostListener('window:wheel')
  @HostListener('window:resize')
  private parallaxScroll() {
    const elm: HTMLElement = this.hostElement.nativeElement;
    const parent = elm.parentElement;

    // Special case: no parallax
    if (this.parallaxDistance === 1) {
      elm.style.position = 'absolute';
      elm.style.left = '0px';
      elm.style.top = '0px';
      elm.style.width = '100%';
      elm.style.height = '100%';
      elm.style.zIndex = '-1';
      return;
    }

    const boundingRect = parent.getBoundingClientRect() as DOMRect;
    const viewportHeight = document.documentElement.clientHeight;

    if (boundingRect.top > viewportHeight) { return; }
    if (boundingRect.top + boundingRect.height < 0) { return; }

    const position = boundingRect.top / this.parallaxDistance;

    const height = viewportHeight - (viewportHeight - boundingRect.height) / this.parallaxDistance;

    elm.style.position = 'fixed';
    elm.style.top = position + 'px';
    elm.style.left = boundingRect.x + 'px';
    elm.style.width = boundingRect.width + 'px';
    elm.style.height = height + 'px';
    elm.style.zIndex = this.parallaxDistance === Infinity ? '-99999' : Math.round(-this.parallaxDistance*1000).toString();
  }
}
