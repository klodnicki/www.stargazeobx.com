import { Component, OnInit, Input, ViewChild, HostListener, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent implements OnInit, OnChanges {
  @Input() background: string;
  @Input() parallaxDistance = 1;
  @Input() shrink = false;
  @ViewChild('bg') private bg;
  @ViewChild('fg') private fg;

  constructor() {}

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
    if (this.parallaxDistance === 1) { return; }
    if (!this.bg || !this.bg.nativeElement) { return; }
    if (!this.fg || !this.fg.nativeElement) { return; }

    const viewportHeight = document.documentElement.clientHeight;
    const thisRect = this.fg.nativeElement.getBoundingClientRect();

    const scrollStart = 0;
    const scrollEnd = viewportHeight - thisRect.height;
    const scrollNow = thisRect.y;

    const percent = (scrollNow - scrollStart) / (scrollEnd - scrollStart);

    const move = (thisRect.y * -1) + (scrollEnd - scrollStart) * percent / this.parallaxDistance;

    this.bg.nativeElement.style.height =
      Number(thisRect.height + scrollEnd - (scrollEnd - scrollStart) / this.parallaxDistance).toString() + 'px';
    this.bg.nativeElement.style.top = move.toString() + 'px';
  }

}
