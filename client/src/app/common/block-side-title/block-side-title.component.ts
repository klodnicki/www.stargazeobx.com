import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-block-side-title',
  templateUrl: './block-side-title.component.html',
  styleUrls: ['./block-side-title.component.scss']
})
export class BlockSideTitleComponent implements OnChanges {
  @Input() background: string;
  @Input() backgroundImage: string;
  @Input() parallaxDistance = 1;
  @Input() shrink = false;
  @Input() title: string;
  @Input() rightTitle: boolean;
  @Input() ratio = 0.5;
  public contentWidth = '50%';
  public titleWidth = '50%';

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.ratio) {
      this.contentWidth = Number(this.ratio * 100).toString() + '%';
      this.titleWidth = Number(100 - this.ratio * 100).toString() + '%';
    }
  }

}
