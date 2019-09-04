import { Component, OnInit } from '@angular/core';
import { trigger, transition, query, style, animate, group, keyframes } from '@angular/animations';

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
            [style({ position: 'relative', zIndex: 0 })],
            { optional: true }
          ),
          query(
            ':enter',
            [
              style({ position: 'relative', overflow: 'visible', height: '0px', opacity: 0, zIndex: 1 }),
              animate('0.6s linear', style({ opacity: 1 }))
            ],
            { optional: true }
          ),
          query(
            ':enter',
            [
              style({ transform: 'rotate(-5deg) translateX(10vw)' }),
              animate('0.6s ease-out', style({ transform: 'translateX(0)' }))
            ],
            { optional: true }
          )
        ])
      ])
    ])
  ]
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
