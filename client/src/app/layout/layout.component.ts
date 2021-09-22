import { Component, OnInit } from '@angular/core';
import { trigger, transition, query, style, animate, group, keyframes, state } from '@angular/animations';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [
    trigger('routeAnimation', [
      transition('* => *', [
        group([
          query(
            ':leave',
            [
              style({ position: 'relative', zIndex: 0, opacity: 1 }),
              animate('1s linear', style({ opacity: 0 }))
            ],
            { optional: true }
          ),
          query(
            ':enter',
            [
              style({ position: 'relative', overflow: 'visible', height: '0px', opacity: 0, zIndex: 1 }),
              animate('1s linear', style({ opacity: 1 }))
            ],
            { optional: true }
          ),
        ])
      ])
    ]),
    trigger('delayFadeAnimation', [
      state(
        'wait',
        style({ opacity: 0 }),
      ),
      transition('wait => go', [
        style({ opacity: 0 }),
        animate('1s 1s linear', style({ opacity: 1 }))
      ])
    ]),
  ]
})
export class LayoutComponent implements OnInit {
  initialAnimateTrigger = 'wait';

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.initialAnimateTrigger = 'go';
    });
  }
}
