import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallaximgComponent } from './parallaximg.component';

describe('ParallaximgComponent', () => {
  let component: ParallaximgComponent;
  let fixture: ComponentFixture<ParallaximgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParallaximgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParallaximgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
