import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parallaximg',
  templateUrl: './parallaximg.component.html',
  styleUrls: ['./parallaximg.component.scss']
})
export class ParallaximgComponent implements OnInit {
  @Input() src: string;

  constructor() { }

  ngOnInit() {
  }

}
