import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatConfirmDialigComponent } from './mat-confirm-dialig.component';

describe('MatConfirmDialigComponent', () => {
  let component: MatConfirmDialigComponent;
  let fixture: ComponentFixture<MatConfirmDialigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatConfirmDialigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatConfirmDialigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
