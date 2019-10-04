import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { filter, switchMap, repeat, map, tap, takeWhile } from 'rxjs/operators';
import { of, animationFrameScheduler } from 'rxjs';
import * as BezierEasing from 'bezier-easing';

const SCROLLUP_DURATION = 600;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'stargazeobx';

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationStart),
      filter(() => window.scrollY !== 0),
      switchMap(() => {
        const startTime = Date.now();
        const startScroll = window.scrollY;
        let done = false;
        const curve = BezierEasing(0.42, 0, 0.58, 1.0); // Same as 'ease-in-out'
        return of(0, animationFrameScheduler).pipe(
          repeat(),
          takeWhile(() => !done),
          map(() => Math.min((Date.now() - startTime) / SCROLLUP_DURATION, 1)),
          tap(perc => { done = (perc >= 1); }),
          map(perc => curve(perc)),
          map(pos => startScroll * (1 - pos))
        );
      })
    ).subscribe(newy => window.scrollTo(window.scrollX, newy));
  }
}
