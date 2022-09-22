import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesDetailsViewComponent } from './movies-details-view.component';

describe('MoviesDetailsViewComponent', () => {
  let component: MoviesDetailsViewComponent;
  let fixture: ComponentFixture<MoviesDetailsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesDetailsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
