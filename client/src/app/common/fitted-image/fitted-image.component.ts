import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-fitted-image',
  template: '',
  styleUrls: ['./fitted-image.component.scss']
})
export class FittedImageComponent implements OnInit, OnChanges {
  @Input() imageUrl;

  constructor(private hostElement: ElementRef) { }

  ngOnInit() {
    this.updateImage();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.imageUrl) this.updateImage();
  }

  private updateImage() {
    (this.hostElement.nativeElement as HTMLElement).style.backgroundImage = `url(${JSON.stringify(this.imageUrl)})`;
  }
}
