import { Component, OnInit, Input, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent implements OnInit {
  @Input() src: string;
  @Input() parallaxDistance = 0;
  @ViewChild('bg') bg;
  @ViewChild('fg') fg;

  constructor() {}

  ngOnInit() {
    this.parallaxScroll();
  }

  @HostListener('window:scroll')
  @HostListener('window:resize')
  private parallaxScroll() {
    if (this.parallaxDistance === 0) { return; }
    if (!this.bg || !this.bg.nativeElement) { return; }
    if (!this.fg || !this.fg.nativeElement) { return; }

    const viewportHeight = document.documentElement.clientHeight;
    const thisRect = this.fg.nativeElement.getBoundingClientRect();

    const start = viewportHeight;
    const end = -thisRect.height;
    const now = thisRect.y;

    const percent = (now - start) / (end - start);

    const move = percent * this.parallaxDistance * -1;

    console.log(percent);

    this.bg.nativeElement.style.height = Number(100 + Math.abs(this.parallaxDistance)).toString() + '%';
    this.bg.nativeElement.style.top = move.toString() + '%';
  }

}
