import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockSideTitleComponent } from './block-side-title.component';

describe('BlockSideTitleComponent', () => {
  let component: BlockSideTitleComponent;
  let fixture: ComponentFixture<BlockSideTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockSideTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockSideTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
